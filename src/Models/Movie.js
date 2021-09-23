const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MoviesSchema = new Schema({
    title: String,
    format: String,
    filmLength: String,
    releaseYear: String,
    rating: String,
});

module.exports = mongoose.model('movie', MoviesSchema)
