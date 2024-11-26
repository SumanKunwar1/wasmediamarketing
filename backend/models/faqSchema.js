const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const faqSchema = new Schema({
  title: { type: String },
  metaDescription: { type: String },
  metaKeywords: { type: [String] },

  content: [
    {
      sectionTitle: { type: String, required: true },
      Description: { type: String, required: true },
      tabs: [
        {
          question: { type: String, required: true },
          answer: { type: String, required: true },
        },
      ],
    },
  ],

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Faq = mongoose.model("Faq", faqSchema);

module.exports = Faq;
