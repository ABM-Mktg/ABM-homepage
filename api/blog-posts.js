const fs = require("fs/promises");
const path = require("path");

module.exports = async (req, res) => {
  if (req.method && req.method !== "GET") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
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

    res.status(200).json(
      posts
        .filter(Boolean)
        .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0))
    );
  } catch (error) {
    res.status(500).json({ error: "Unable to load posts" });
  }
};
