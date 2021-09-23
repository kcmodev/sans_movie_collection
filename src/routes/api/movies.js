const express = require('express');
const router = express.Router();
const Movie = require('../../Models/Movie')

// @route    POST api/movies
// @desc     Add a movie to the database
// @access   Private
router.post(
    '/',
    async (req, res) => {
        try {
            // const newMovie = new Movie({
            //     title: req.body.title,
            //     format: req.body.format,
            //     filmLength: req.body.filmLength,
            //     releaseYear: req.body.releaseYear,
            //     rating: req.body.rating
            // });

            // const savedMovie = await newMovie.save();
            // res.json(savedMovie);

        } catch (e) {
            console.error(e)
            res.status(500).send('Server error.')
        }
    }
);

// @route    GET api/movies
// @desc     Retrieve all movies from database
// @access   Private
router.get('/', async (req, res) => {
        try {
            const movies = await Movie.find();
            res.json(movies)
        } catch (e) {
            console.error(e)
            res.status(500).send('Error with Movie.find().')
        }
    }
);

// @route    DELETE api/movies
// @desc     Remove a movie from the database
// @access   Private
router.delete(
    '/',
    async (req, res) => {
        try {

        } catch (e) {
            console.error(e)
            res.status(500).send('Server error.')
        }
    }
);

// @route    PUT api/movies
// @desc     Edit a movie from the database
// @access   Private
router.put(
    '/',
    async (req, res) => {
        try {

        }catch (e) {
            console.error(e)
            res.status(500).send('Server error.')
        }
    }
);

module.exports = router;
