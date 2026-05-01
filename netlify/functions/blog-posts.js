const fs = require("fs/promises");
const path = require("path");

exports.handler = async (event) => {
  if (event.httpMethod && event.httpMethod !== "GET") {
    return {
      statusCode: 405,
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ error: "Method Not Allowed" })
    };
  }

  try {
    const blogDir = path.join(process.cwd(), "content", "blog");
    const entries = await fs.readdir(blogDir, { withFileTypes: true });
    const jsonFiles = entries
      .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".json") && entry.name !== "index.json")
      .map((entry) => entry.name);

    const posts = await Promise.all(
      jsonFiles.map(async (fileName) => {
        try {
          const filePath = path.join(blogDir, fileName);
          const raw = await fs.readFile(filePath, "utf8");
          const post = JSON.parse(raw);
          if (!post || typeof post !== "object") return null;
          if (!post.slug) {
            post.slug = fileName.replace(/\.json$/i, "");
          }
          return post;
        } catch (error) {
          return null;
        }
      })
    );

    const sortedPosts = posts
      .filter(Boolean)
      .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));

    return {
      statusCode: 200,
      headers: { "content-type": "application/json" },
      body: JSON.stringify(sortedPosts)
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ error: "Unable to load posts" })
    };
  }
};
