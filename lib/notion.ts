/* eslint-disable @typescript-eslint/no-explicit-any */
export interface BlogPost {
  id: string;
  title: string;
  date: string;
  url?: string;
}

export interface RichTextSegment {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
  color?: string;
  href?: string;
}

export interface BlogPostDetail extends BlogPost {
  content: Array<{
    type: string;
    text: string;
    richText?: RichTextSegment[];
    imageUrl?: string;
  }>;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const apiKey = process.env.NOTION_API_KEY;
    const databaseId = process.env.NOTION_DATABASE_ID;

    if (!apiKey) {
      console.log("NOTION_API_KEY is not set");
      return [];
    }

    if (!databaseId) {
      console.log("NOTION_DATABASE_ID is not set");
      return [];
    }

    const response = await fetch(
      `https://api.notion.com/v1/databases/${databaseId}/query`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Notion-Version": "2022-06-28",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sorts: [
            {
              property: "Date",
              direction: "descending",
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      console.error("Notion API error:", response.status, response.statusText);
      return [];
    }

    const data = await response.json();

    const posts = data.results.map((page: any) => {
      const titleProperty = page.properties.Title || page.properties.Name;
      const dateProperty = page.properties.Date;
      const urlProperty = page.properties.URL;

      let title = "Untitled";
      if (titleProperty) {
        if (titleProperty.type === "title" && titleProperty.title.length > 0) {
          title = titleProperty.title[0].plain_text;
        } else if (
          titleProperty.type === "rich_text" &&
          titleProperty.rich_text.length > 0
        ) {
          title = titleProperty.rich_text[0].plain_text;
        }
      }

      let date = "";
      if (dateProperty && dateProperty.type === "date" && dateProperty.date) {
        date = dateProperty.date.start;
      }

      let url = "";
      if (urlProperty && urlProperty.type === "url") {
        url = urlProperty.url || "";
      }

      return {
        id: page.id,
        title,
        date,
        url,
      };
    });

    return posts;
  } catch (error) {
    console.error("Error fetching from Notion:", error);
    return [];
  }
}

export async function getBlogPost(
  pageId: string
): Promise<BlogPostDetail | null> {
  try {
    const apiKey = process.env.NOTION_API_KEY;

    if (!apiKey) {
      console.log("NOTION_API_KEY is not set");
      return null;
    }

    // Remove hyphens from page ID if present, Notion API works with both formats
    const cleanPageId = pageId.replace(/-/g, "");

    console.log("Fetching page:", cleanPageId);

    // Fetch page metadata
    const pageResponse = await fetch(
      `https://api.notion.com/v1/pages/${cleanPageId}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Notion-Version": "2022-06-28",
        },
      }
    );

    console.log("Page response status:", pageResponse.status);

    if (!pageResponse.ok) {
      const errorData = await pageResponse.json();
      console.error(
        "Error fetching page:",
        pageResponse.status,
        JSON.stringify(errorData, null, 2)
      );
      return null;
    }

    const page = await pageResponse.json();
    console.log("Page fetched successfully:", page.id);

    // Extract title and date from page properties
    const titleProperty = page.properties.Title || page.properties.Name;
    const dateProperty = page.properties.Date;

    let title = "Untitled";
    if (titleProperty) {
      if (titleProperty.type === "title" && titleProperty.title.length > 0) {
        title = titleProperty.title[0].plain_text;
      } else if (
        titleProperty.type === "rich_text" &&
        titleProperty.rich_text.length > 0
      ) {
        title = titleProperty.rich_text[0].plain_text;
      }
    }

    let date = "";
    if (dateProperty && dateProperty.type === "date" && dateProperty.date) {
      date = dateProperty.date.start;
    }

    // Fetch page content blocks
    const blocksResponse = await fetch(
      `https://api.notion.com/v1/blocks/${pageId}/children`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Notion-Version": "2022-06-28",
        },
      }
    );

    if (!blocksResponse.ok) {
      console.error("Error fetching blocks:", blocksResponse.status);
      return null;
    }

    const blocksData = await blocksResponse.json();

    // Parse blocks into content
    const content = blocksData.results.map((block: any) => {
      const type = block.type;
      let text = "";
      let richText: RichTextSegment[] = [];
      let imageUrl = "";

      if (block[type]?.rich_text) {
        text = block[type].rich_text
          .map((richText: any) => richText.plain_text)
          .join("");

        // Extract rich text formatting
        richText = block[type].rich_text.map((rt: any) => ({
          text: rt.plain_text,
          bold: rt.annotations?.bold,
          italic: rt.annotations?.italic,
          underline: rt.annotations?.underline,
          strikethrough: rt.annotations?.strikethrough,
          code: rt.annotations?.code,
          color: rt.annotations?.color,
          href: rt.href,
        }));
      }

      // Handle image blocks
      if (type === "image") {
        if (block.image.type === "file") {
          imageUrl = block.image.file.url;
        } else if (block.image.type === "external") {
          imageUrl = block.image.external.url;
        }
      }

      return {
        type,
        text,
        richText,
        imageUrl,
      };
    });

    return {
      id: pageId,
      title,
      date,
      content,
    };
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}
