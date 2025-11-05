import { getBlogPost } from "@/lib/notion";
import Link from "next/link";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getBlogPost(id);

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <main className="mx-auto max-w-2xl px-6 py-16 sm:px-8 sm:py-20">
          <Link
            href="/"
            className="text-black hover:underline mb-8 text-sm block"
          >
            ← Home
          </Link>
          <h1 className="text-4xl font-bold mb-4">Post not found</h1>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-2xl px-6 py-16 sm:px-8 sm:py-20">
        <Link
          href="/"
          className="text-black text-sm hover:underline mb-8 block"
        >
          ← Home
        </Link>

        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-black mb-4">{post.title}</h1>
            {post.date && <time className="text-gray-500">{post.date}</time>}
          </header>

          <div className="prose prose-lg max-w-none">
            {post.content.map((block, index) => (
              <div key={index} className="mb-4">
                {block.type === "paragraph" && (
                  <p className="text-black leading-relaxed">{block.text}</p>
                )}
                {block.type === "heading_1" && (
                  <h1 className="text-3xl font-bold text-black mt-8 mb-4">
                    {block.text}
                  </h1>
                )}
                {block.type === "heading_2" && (
                  <h2 className="text-2xl font-bold text-black mt-6 mb-3">
                    {block.text}
                  </h2>
                )}
                {block.type === "heading_3" && (
                  <h3 className="text-xl font-bold text-black mt-4 mb-2">
                    {block.text}
                  </h3>
                )}
                {block.type === "bulleted_list_item" && (
                  <ul className="list-disc list-inside">
                    <li className="text-black">{block.text}</li>
                  </ul>
                )}
                {block.type === "numbered_list_item" && (
                  <ol className="list-decimal list-inside">
                    <li className="text-black">{block.text}</li>
                  </ol>
                )}
                {block.type === "code" && (
                  <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
                    <code className="text-sm">{block.text}</code>
                  </pre>
                )}
                {block.type === "quote" && (
                  <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700">
                    {block.text}
                  </blockquote>
                )}
              </div>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
}
