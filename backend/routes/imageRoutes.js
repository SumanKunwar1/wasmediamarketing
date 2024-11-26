const express = require("express");
const multer = require("multer");
const path = require("path");
const Image = require("../models/images");
const Slider = require("../models/sliderSchema");
const isAuthenticated = require("../middleware/isAuthenticated");
const router = express.Router();
const fs = require("fs");
const { ObjectId } = require("mongoose").Types;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, `../${process.env.UPLOAD_PATH}`);
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    console.log(file, path.extname(file.originalname), file.originalname);
    const filename = Date.now() + file.originalname;
    cb(null, filename);
  },
});
const upload = multer({ storage, limits: { fileSize: 2 * 1024 * 1024 } }); // 2MB limit

router.post(
  "/upload",
  isAuthenticated,
  upload.single("image"),
  async (req, res) => {
    try {
      console.log("image upload");
      if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
      }
      const { mimetype, size, originalname, filename } = req.file;
      console.log(mimetype, size, originalname, filename);
      const image = new Image({
        filename: originalname,
        contentType: mimetype,
        imagePath: path.join(process.env.UPLOAD_PATH, filename),
        size,
      });
      await image.save();
      return res.redirect("/admin/file");
    } catch (err) {
      res.status(500).json({ message: "Error uploading image", error: err });
    }
  }
);

router.post("/slider", upload.single("image"), async (req, res) => {
  try {
    console.log("slider add garna lagya");
    const { title, subtitle, visible } = req.body;
    const { mimetype, size, originalname, filename } = req.file;
    if (!title) {
      return res.status(400).json({ message: "Title are required" });
    }
    console.log(title, subtitle, visible);

    // Create a new slider document
    const newSlider = new Slider({
      title,
      subtitle,
      image: path.join(process.env.UPLOAD_PATH, filename),
      visible: visible,
    });

    // Save the slider to the database
    const savedSlider = await newSlider.save();

    return res
      .status(201)
      .json({ message: "Slider created successfully", slider: savedSlider });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error creating slider", error: err });
  }
});

router.patch("/slider-edit/:id", async (req, res) => {
  try {
    console.log("slider edit garna lagya");
    const { title, subtitle, visible } = req.body;
    console.log(title, subtitle, visible);
    const { id } = req.params;

    if (!title || !subtitle) {
      return res
        .status(400)
        .json({ message: "Title, subtitle, and visible status are required" });
    }

    const updatedSlider = await Slider.findById(id);
    if (!updatedSlider) {
      return res.status(404).json({ message: "Slider not found" });
    }
    updatedSlider.title = title;
    updatedSlider.subtitle = subtitle;
    updatedSlider.visible = visible;

    await updatedSlider.save();

    return res
      .status(200)
      .json({ message: "Slider updated successfully", slider: updatedSlider });
  } catch (err) {
    res.status(500).json({ message: "Error updating slider", error: err });
  }
});

router.get("/", async (req, res) => {
  try {
    console.log("get all image");
    const image = await Image.find();

    if (!image) {
      console.log("not found");
      return res.status(404).json({ message: "Image not found" });
    }
    const imageMetadata = image.map((image) => ({
      id: image._id,
      filename: image.filename,
      contentType: image.contentType,
      url: `/admin/image/${image._id}`, // URL for accessing the image
    }));
    console.log(imageMetadata);
    res.status(200).json(imageMetadata);
  } catch (err) {
    console.log("error");
    res.status(500).json({ message: "Error retrieving image", error: err });
  }
});

router.get("/slider", async (req, res) => {
  try {
    console.log("posting the slider");
    const sliders = await Slider.find();

    if (!sliders || sliders.length === 0) {
      return res.status(404).json({ message: "No sliders found" });
    }

    const sliderMetadata = sliders.map((slider) => ({
      id: slider._id,
      title: slider.title,
      subtitle: slider.subtitle,
      visible: slider.visible,
      url: `/admin/image/slider/${slider._id}`,
    }));

    res.status(200).json(sliderMetadata);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving sliders", error: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    console.log("get the image");
    const image = await Image.findById(req.params.id);
    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }
    const imagePath = path.join(__dirname, "..", image.imagePath);
    console.log(imagePath);
    res.set("Content-Type", image.contentType);
    fs.createReadStream(imagePath).pipe(res);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error retrieving image", error: err });
  }
});

router.get("/slider/:id", async (req, res) => {
  try {
    console.log("get the sldier");
    const image = await Slider.findById(req.params.id);
    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }
    console.log(image);
    const imagePath = path.join(__dirname, "..", image.image);
    console.log(imagePath);
    res.set("Content-Type", image.contentType);
    fs.createReadStream(imagePath).pipe(res);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error retrieving image", error: err });
  }
});

router.post("/slider/:id", isAuthenticated, async (req, res) => {
  try {
    const slider = await Slider.findById(req.params.id);

    if (!slider) {
      return res.status(404).json({ message: "Slider not found" });
    }
    const imagePath = slider.image;
    console.log(slider.image);
    fs.unlink(imagePath, (err) => {
      if (err) {
        console.error("Error deleting image file:", err);
        return res
          .status(500)
          .json({ message: "Error deleting image file", error: err });
      }

      console.log("Image file deleted successfully");
    });
    await slider.deleteOne();
    return res.redirect("/admin/slider");
  } catch (err) {
    res.status(500).json({ message: "Error retrieving image", error: err });
  }
});

router.post("/:id", isAuthenticated, async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);

    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }
    const imagePath = image.imagePath;
    console.log(image.imagePath);
    fs.unlink(imagePath, (err) => {
      if (err) {
        console.error("Error deleting image file:", err);
        return res
          .status(500)
          .json({ message: "Error deleting image file", error: err });
      }

      console.log("Image file deleted successfully");
    });
    await image.deleteOne();
    return res.redirect("/admin/file");
  } catch (err) {
    res.status(500).json({ message: "Error retrieving image", error: err });
  }
});

module.exports = router;
