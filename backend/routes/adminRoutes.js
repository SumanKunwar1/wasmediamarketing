const express = require("express");
const path = require("path");
const router = express.Router();
const isAuthenticated = require("../middleware/isAuthenticated");
const ContactForm = require("../models/contact");
const Page = require("../models/pageSchema");
const Faq = require("../models/faqSchema");
const Slider = require("../models/sliderSchema");
const NewsLetter = require("../models/newsLetterSchema");
const Image = require("../models/images");
const File = require("../models/File");
const Info = require("../models/infoSchema");

router.get("/", async (req, res) => {
  try {
    console.log("welcome to the login page");
    res.render("page-login", { message: null });
  } catch (error) {
    console.error("Error serving the admin login page:", error);
    res.status(500).send("Error serving the page");
  }
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    req.session.isAuthenticated = true;
    res.redirect("/admin/dashboard");
  } else {
    res.render("page-login", { message: "Invalid Credentials" });
  }
});

router.get("/dashboard", isAuthenticated, async (req, res) => {
  try {
    console.log(
      "Serving admin dashboard page yo path bata",
      path.join(__dirname, "../views/adminLogin.html")
    );
    res.sendFile(path.join(__dirname, "../views/dashboard.html"));
  } catch (error) {
    console.error("Error serving the admin login page:", error);
    res.status(500).send("Error serving the page");
  }
});

router.get("/enquiry", isAuthenticated, async (req, res) => {
  try {
    console.log("getting all contact for admin");
    const contacts = await ContactForm.find();
    res.render("enquiry", { contacts }); // Pass contacts as an object
  } catch (error) {
    console.error("Error serving the admin login page:", error);
    res.status(500).send("Error serving the page");
  }
});

router.get("/addpage", isAuthenticated, async (req, res) => {
  try {
    console.log("adding the page?");
    res.sendFile(path.join(__dirname, "../views/addPage.html"));
  } catch (error) {
    console.log(error);
    res.status(500).send("Error serving the page");
  }
});

router.get("/addfaq", isAuthenticated, async (req, res) => {
  try {
    const faq = await Faq.findOne();
    console.log(faq);

    res.render("addFaq", { faq });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error serving the page");
  }
});

router.get("/faq", isAuthenticated, async (req, res) => {
  try {
    const faq = await Faq.findOne();
    console.log(faq);

    res.render("adminfaq", { faq });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error serving the page");
  }
});

router.get("/social-link", isAuthenticated, async (req, res) => {
  try {
    const info = await Info.find();
    console.log(info);
    res.render("social-link", { info });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error serving the page");
  }
});

router.get("/slider", isAuthenticated, async (req, res) => {
  try {
    const sliders = await Slider.find();

    const sliderMetadata = sliders.map((slider) => ({
      id: slider._id,
      title: slider.title,
      subtitle: slider.subtitle,
      visible: slider.visible,
      url: `/admin/image/slider/${slider._id}`,
    }));
    res.render("slider", { sliderMetadata });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error serving the page");
  }
});

router.get("/file", isAuthenticated, async (req, res) => {
  try {
    console.log("adding the file?");
    const image = await Image.find();

    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }
    const imageMetadata = image.map((image) => ({
      id: image._id,
      contentType: image.contentType,
      url: `/admin/image/${image._id}`, // URL for accessing the image
    }));

    const files = await File.find();
    const fileMetadata = files.map((file) => ({
      id: file._id,
      filename: file.filename,
      contentType: file.contentType,
      url: `/admin/file/${file._id}`,
    }));
    res.render("addfiles", { fileMetadata, imageMetadata });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error serving the page");
  }
});

router.get("/page", isAuthenticated, async (req, res) => {
  try {
    console.log("getting all the pages for admin");
    const pages = await Page.find(
      {},
      "_id title urlSlug parentId order isPublished createdAt updatedAt metaDescription"
    ); // Select necessary fields
    const formattedPages = pages.map((page) => ({
      _id: page._id,
      title: page.title,
      urlSlug: page.urlSlug,
      parentId: page.parentId ? page.parentId.toString() : null, // Convert to string if present
      order: page.order,
      isPublished: page.isPublished,
      createdAt: page.createdAt.toISOString().split("T")[0], // Format date as YYYY-MM-DD
      updatedAt: page.updatedAt.toISOString().split("T")[0], // Format date as YYYY-MM-DD
      metaDescription: page.metaDescription || "N/A", // Default to 'N/A' if not present
    }));
    console.log(formattedPages);
    res.render("page", { pages: formattedPages }); // Pass formatted pages to the view
  } catch (error) {
    console.error("Error serving the admin page:", error);
    res.status(500).send("Error serving the page");
  }
});

router.get("/navbar", isAuthenticated, async (req, res) => {
  try {
    console.log("getting all the pages for admin");
    const pages = await Page.find(
      {},
      "_id title urlSlug parentId order isPublished createdAt updatedAt metaDescription"
    ); // Select necessary fields
    const formattedPages = pages.map((page) => ({
      _id: page._id,
      title: page.title,
      parentId: page.parentId ? page.parentId.toString() : null, // Convert to string if present
      order: page.order,
      isPublished: page.isPublished,
      updatedAt: page.updatedAt.toISOString().split("T")[0], // Format date as YYYY-MM-DD
    }));
    console.log(formattedPages);
    res.render("navbar", { pages: formattedPages }); // Pass formatted pages to the view
  } catch (error) {
    console.error("Error serving the admin page:", error);
    res.status(500).send("Error serving the page");
  }
});

router.get("/page/edit/:id", async (req, res) => {
  try {
    console.log("Fetching page for editing...");
    const { id } = req.params;

    const page = await Page.findById(id);
    if (!page) {
      return res.status(404).json({ message: "Page not found" });
    }

    // Concatenate content sections and tabs into one HTML string
    let contentHTML = "";
    if (page.content && page.content.length > 0) {
      page.content.forEach((section) => {
        contentHTML += `${section.sectionTitle}`;
        contentHTML += `${section.sectionDescription}`;
        contentHTML += `${section.tabs}`;
      });
    }

    // Render the form and pre-populate the TinyMCE editor with concatenated content
    res.render("editpage", {
      page: {
        ...page.toObject(),
        contentHTML, // Pre-fill the TinyMCE editor with concatenated HTML content
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching page" });
  }
});

router.get("/slider/edit/:id", isAuthenticated, async (req, res) => {
  try {
    console.log("fetching slider for edit...");
    const { id } = req.params;

    const slider = await Slider.findById(id, "title subtitle visible");
    if (!slider) {
      return res.status(404).json({ message: "slider not found" });
    }
    console.log(slider);
    res.render("edit-slider", slider);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching page" });
  }
});

router.get("/subscriber", isAuthenticated, async (req, res) => {
  try {
    console.log("subscriber finder arrived");
    const newsLetter = await NewsLetter.find();

    res.render("newsletter", { newsLetter });
  } catch (error) {
    console.error("Error saving contact message:", error);
    res.status(500).json({ error: "There was an issue saving your message." });
  }
});

router.get("/logout", isAuthenticated, (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send("Failed to log out");
    }
    res.redirect("/admin");
  });
});

module.exports = router;
