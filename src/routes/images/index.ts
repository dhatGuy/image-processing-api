import { Router } from "express";
import { convertImage } from "../../utils/convertImage";

const imageRouter = Router();

imageRouter.get("/", async (req, res) => {
  const filename = req.query.filename as string;
  const width = Number(req.query.width);
  const height = Number(req.query.height);

  if (!filename || !width || !height) {
    return res.status(400).json({
      message: "filename, width and height query parameter is required",
    });
  }
  try {
    const image = await convertImage({
      filename,
      width,
      height,
    });

    res.sendFile(image);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

export default imageRouter;
