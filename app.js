const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(express.json());
app.use(cors());

/**
 * POST - Add New Task
 */
app.post("/tasks", (req, res) => {
  const { title, description, priority, assigned_to, status } = req.body;

  if (!title || !priority || !status) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const sql = `
    INSERT INTO tasks (title, description, priority, assigned_to, status)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [title, description, priority, assigned_to, status],
    (err, result) => {
         if (err) {
        console.error("Insert error:", err);
        return res.status(500).json({ error: "Database insert failed" });
      }

      res.json({
        message: "✅  Task added successfully",
        id: result.insertId
      });
    }
  );
});

/**
 * GET - Fetch All Tasks
 */
app.get("/tasks", (req, res) => {
  const sql = "SELECT * FROM tasks ORDER BY created_at DESC";

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Fetch error:", err);
      return res.status(500).json({ error: "Database fetch failed" });
    }

    res.json(results);
  });
  });

// Server start
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀  Backend running on port ${PORT}`);
});