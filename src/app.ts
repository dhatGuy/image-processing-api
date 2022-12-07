import express from "express";
import imageRouter from "./routes/images";

const app = express();

app.use("/api/images", imageRouter);

app.use("*", (_, res) => {
  res.status(404).send(`
    <p>Please use the following endpoints:</p>
    <ol>
      <li><a href="/api/images?filename=louise&width=200&height=200">/api/images?filename=louise&width=200&height=200</a></li>
      <li><a href="/api/images?filename=tina&width=200&height=200">/api/images?filename=tina&width=200&height=200</a></li>
      <li><a href="/api/images?filename=garden&width=200&height=200">/api/images?filename=garden&width=200&height=200</a></li>
      <li><a href="/api/images?filename=palmtunnel&width=200&height=200">/api/images?filename=palmtunnel&width=200&height=200</a></li>
      <li><a href="/api/images?filename=santamonica&width=200&height=200">/api/images?filename=santamonica&width=200&height=200</a></li>
    </ol>
  `);
});

export default app;
