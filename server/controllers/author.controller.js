const { response } = require('express'); 
const Author = require('../models/author.model');

module.exports = {
    index: (req, res) => {
        res.json({ testMessage: "Working!"});
    },

    createAuthor: (req, res) => {
        Author.create(req.body)
            .then((newAuthor) => res.json(newAuthor))
            .catch((err) => res.status(400).json(err));
    },

    getAllAuthors: (req, res) => {
        Author.find()
            .then((allAuthors) => {
                res.json(allAuthors);
            })
            .catch((err) => res.status(400).json(err));
    },

    getOneAuthor: (req, res) => {
        Author.findById({ _id: req.params.id })
            .then((foundAuthor) => res.json(foundAuthor))
            .catch((err) => res.status(400).json(err));
    },

    updateOneAuthor: (req, res) => {
        Author.findByIdAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true },
        )
            .then((updatedAuthor) => {
                console.log(updatedAuthor);
                res.json(updatedAuthor);
            })
            .catch((err) => res.status(400).json(err));
    },

    deleteOneAuthor: (req, res) => {
        Author.findByIdAndDelete({ _id: req.params.id })
            .then((deletedRestaurant) => {
                console.log(`Deleted : ${deletedRestaurant}`);
                res.json(deletedRestaurant);
            })
            .catch((err) => res.status(400).json(err));
    }

}