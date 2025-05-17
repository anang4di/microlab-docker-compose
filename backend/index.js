const express = require("express");
const cors = require('cors');
const { Pool } = require("pg");

const app = express();
const port = process.env.PORT || 5000;

// CORS middleware
app.use(cors({
  origin: 'http://localhost:8080',
}));

// PostgreSQL pool
const pool = new Pool({
  host: process.env.POSTGRES_HOST || "localhost",
  port: process.env.POSTGRES_PORT || 5433,
  user: process.env.POSTGRES_USER || "postgres",
  password: process.env.POSTGRES_PASSWORD || "password",
  database: process.env.POSTGRES_DB || "postgres",
});

app.get("/", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

app.get("/check-db-connection", async (req, res) => {
  try {
    await pool.query("SELECT 1");
    res.json({ status: "ok" });
  } catch (err) {
    res
      .status(500)
      .json({ status: "error", error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
