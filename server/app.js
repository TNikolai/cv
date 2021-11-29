import express from "express";
import generateHtml from "./generateHtml.js";

const app = express(); // create express app

app.get("*", (req, res) => {
  const html = generateHtml(req);
  res.send(html);
});

// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});

export default app;
