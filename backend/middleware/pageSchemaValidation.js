const Joi = require('joi');

const pageValidationSchema = Joi.object({
    title: Joi.string().required(),
    urlSlug: Joi.string().required(),
    pageType: Joi.string().required(), 
    parentId: Joi.string().optional(),
    order: Joi.number().optional(),
    isPublished: Joi.boolean().optional(),
    content: Joi.array().items(Joi.object({
        sectionTitle: Joi.string().optional(),
        sectionDescription: Joi.string().optional(),
        sectionImage: Joi.string().optional(),
        sectionLink: Joi.string().optional(),
        tabs: Joi.array().items(Joi.object({
            type: Joi.string().required(),
            name: Joi.string().optional(),
            description: Joi.string().optional(),
            image: Joi.string().optional(),
            link: Joi.string().optional(),
            jobcategory:  Joi.string().optional(),
            jobapplyBefore: Joi.optional(),
            jobtype: Joi.string().optional(),
        })).optional(),
    })).optional(),
    author: Joi.string().optional(),
    metaDescription: Joi.string().optional(),
    metaKeywords: Joi.array().items(Joi.string()).optional(),
});

module.exports = pageValidationSchema;
