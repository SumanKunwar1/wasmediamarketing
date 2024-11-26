const PageSchemaValidation = require('./pageSchemaValidation');

const validatePageRequest = (req, res, next) => {
    const { error } = PageSchemaValidation.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details.map(e => e.message).join(', ') });
    }
    next();
};

module.exports = validatePageRequest