import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({
    message: "Hello World",
  });
});

app.post("/", (req, res) => {
  return res.json("Testing post method");
});

app.listen(3333, () => console.log("Server is running on port 3333"));
