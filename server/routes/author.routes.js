const AuthorController = require('../controllers/author.controller');

module.exports = (app) => {
    app.get('/api', AuthorController.index);
    app.post('/api/author', AuthorController.createAuthor);
    app.get('/api/author', AuthorController.getAllAuthors);
    app.get('/api/author/:id', AuthorController.getOneAuthor);
    app.put('/api/author/:id', AuthorController.updateOneAuthor);
    app.delete('/api/author/:id', AuthorController.deleteOneAuthor);
}