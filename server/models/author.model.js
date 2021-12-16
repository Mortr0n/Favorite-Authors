const mongoose = require('mongoose');


const AuthorSchema = new mongoose.Schema({
    author: {
        type: String,
        required: [true, "You must enter an author name"],
        minlength: [3, "Author name must be at least 3 characters long"],
    }
}, { timestamps: true });

module.exports = mongoose.model('Author', AuthorSchema);