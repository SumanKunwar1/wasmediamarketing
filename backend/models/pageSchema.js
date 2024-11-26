const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pageSchema = new Schema({
    title: { type: String, required: true },
    urlSlug: { type: String, required: true }, 
    pageType: { type: String, required: true },  
    parentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Page', default: null },
    order: { type: Number, default: 0 },
    isPublished: { type: Boolean, default: true },
    image: { type: String , required: false}, 
    file: { type: String, required:false }, 
    content: [
        {
          sectionTitle: { type: String, required: false }, 
          sectionDescription: { type: String, required: false }, 
          tabs: { type: String, required: false },
        }
      ],
    author: { type: String, required: false },
    metaTitle: { type: String },
    metaDescription: { type: String },
    metaKeywords: { type: [String] },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const Page = mongoose.model('Page', pageSchema);

module.exports = Page;

//so parent page=null and order =0 in the nav bar
// parent page-null and order = 1 in the footer
//parent page !=null order =1 subpage 1 