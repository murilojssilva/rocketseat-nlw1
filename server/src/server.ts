import express from "express";

const app = express();

app.get("/", (request, response) => {
  response.json({ message: "Oi" });
});

app.listen(3001);
