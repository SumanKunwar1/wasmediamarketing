const express = require("express");
const multer = require("multer");
const File = require("../models/File");
const isAuthenticated = require("../middleware/isAuthenticated");
const router = express.Router();
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(
      __dirname,
      `../${process.env.FIle_UPLOAD_PATH}`
    ); // You can configure the folder path here
    cb(null, uploadPath); // Set the destination folder
  },
  filename: (req, file, cb) => {
    const filename = Date.now() + "-" + file.originalname; // Filename format
    cb(null, filename); // Save with a unique filename
  },
});

// Set file upload size limit (optional, 2MB in this example)
const upload = multer({ storage }); // 2MB limit

// Upload route
router.post(
  "/upload",
  isAuthenticated,
  upload.single("file"),
  async (req, res) => {
    try {
      console.log("File upload started");

      if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
      }

      const { mimetype, size, originalname, filename } = req.file;
      const { islider } = req.body;

      const allowedFileTypes = [
        "text/css",
        "text/plain",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/pdf",
        "application/vnd.ms-excel",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "application/vnd.ms-powerpoint",
        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        "text/html",
        "application/javascript",
        "text/javascript",
      ];

      if (!allowedFileTypes.includes(mimetype)) {
        return res.status(400).json({
          message:
            "Invalid file type. Allowed types are CSS, DOC, PDF, TXT, etc.",
        });
      }

      // Create a new file record with metadata
      const file = new File({
        filename: originalname,
        contentType: mimetype,
        imagePath: path.join(process.env.FIle_UPLOAD_PATH, filename),
        size,
        islider: islider === "true" || islider === true,
      });

      // Save the file metadata in MongoDB
      await file.save();

      return res.redirect("/admin/file");
    } catch (err) {
      console.error("Error uploading file:", err);
      res.status(500).json({ message: "Error uploading file", error: err });
    }
  }
);

router.get("/:id", async (req, res) => {
  try {
    const file = await File.findById(req.params.id);

    if (!file) {
      return res.status(404).json({ message: "File not found" });
    }

    const filePath = path.join(__dirname, "..", file.imagePath); // 'imagePath' stores the file's relative path on the server
    console.log(filePath);

    res.set("Content-Type", file.contentType);

    fs.createReadStream(filePath).pipe(res);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error retrieving file", error: err });
  }
});

router.get("/", async (req, res) => {
  try {
    console.log("Fetching all files");

    const files = await File.find({ islider: { $ne: true } });

    if (!files || files.length === 0) {
      return res.status(404).json({ message: "No files found" });
    }
    const fileMetadata = files.map((file) => ({
      id: file._id,
      filename: file.filename,
      contentType: file.contentType,
      url: `/admin/files/${file._id}`,
    }));

    console.log(fileMetadata);
    res.status(200).json(fileMetadata);
  } catch (err) {
    console.log("Error fetching files");
    res.status(500).json({ message: "Error retrieving files", error: err });
  }
});

router.post("/:id", isAuthenticated, async (req, res) => {
  try {
    console.log("deleteing the file");
    const fileId = req.params.id;
    const file = await File.findById(fileId);

    if (!file) {
      return res.status(404).json({ message: " file not found" });
    }
    const filePath = file.imagePath;
    console.log(file.imagePath);
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error("Error deleting file:", err);
        return res
          .status(500)
          .json({ message: "Error deleting file", error: err });
      }

      console.log("Image file deleted successfully");
    });
    await File.findByIdAndDelete(fileId);
    return res.redirect("/admin/file");
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error deleting CSS file", error: err });
  }
});

module.exports = router;
