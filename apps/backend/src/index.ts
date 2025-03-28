import express from "express";
import prisma from "@repo/db/config";

const app = express();

app.get("/", async (req, res) => {
  res.send("Hello World");
});

app.listen(8080, () => {
  console.log("Server is running on port 3000");
});