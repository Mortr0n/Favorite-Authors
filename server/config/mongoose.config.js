const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/authors', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established connection to the database'))
    .catch((err) => console.log('Something has gone wrong witht he database connection', err));
