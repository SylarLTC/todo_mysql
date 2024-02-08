import express from "express";
import dotenv from "dotenv";
import mysql from "mysql2";
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

app.get("/", (req, res) => {
  res.status(200).json("Hello world");
});

app.get("/todos", (req, res) => {
  const query = "SELECT * FROM todo.todos";
  db.query(query, (err, data) => {
    if (err) return res.status(400).json("There is an error occured: ", err);
    return res.json(data);
  });
});

app.post("/todos", (req, res) => {
  const query = "INSERT INTO todo.todos (`title`, `description`) VALUES (?)";
  const values = [req.body.title, req.body.description];

  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Todo has been created succesfully.");
  });
});

app.delete("/todos/:id", (req, res) => {
  const todoId = req.params.id;
  const query = "DELETE FROM todo.todos WHERE id = ?";

  db.query(query, [todoId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Todo has been deleted succesfully");
  });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("server is running!!!");
});
