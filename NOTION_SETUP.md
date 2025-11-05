# Notion Integration Setup

Follow these steps to integrate your Notion blog database with your portfolio:

## 1. Create a Notion Integration

1. Go to https://www.notion.so/my-integrations
2. Click "+ New integration"
3. Give it a name (e.g., "Portfolio Blog")
4. Select the workspace where your blog database is
5. Click "Submit"
6. Copy the "Internal Integration Token" (starts with `secret_`)

## 2. Create a Notion Database

1. In Notion, create a new database (or use an existing one)
2. Make sure it has these properties:
   - **Title** or **Name**: The blog post title (type: Title)
   - **Date**: Publication date (type: Date)
   - **URL**: Link to the full blog post (type: URL) - Optional

## 3. Share Database with Integration

1. Open your Notion database
2. Click the "..." menu in the top right
3. Click "Add connections"
4. Search for and select your integration
5. Click "Confirm"

## 4. Get Database ID

1. Open your database in Notion
2. Look at the URL in your browser
3. The database ID is the part after the workspace name and before the "?"
   - Example URL: `https://www.notion.so/workspace/a1b2c3d4e5f6...?v=...`
   - Database ID: `a1b2c3d4e5f6...` (32 characters with hyphens)

## 5. Add Environment Variables

1. Open `.env.local` in your project
2. Replace the placeholder values:
   ```
   NOTION_API_KEY=secret_your_actual_token_here
   NOTION_DATABASE_ID=your_actual_database_id_here
   ```

## 6. Restart Your Dev Server

Stop your dev server (Ctrl+C) and restart it:
```bash
npm run dev
```

Your blog posts should now appear on your portfolio! 🎉

## Tips

- Posts are sorted by date (newest first)
- If you don't add a URL, the post will just display without a link
- Changes in Notion will appear after you refresh your site
- To force a rebuild in production, redeploy your site
