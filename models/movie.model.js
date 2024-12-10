const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        releaseYear: { type: Number, required: true },
        genre: { type: [String], required: true }, // Array of genres
        director: { type: String, required: true },
        actors: { type: [String], required: true }, // Array of actors
        language: { type: String, required: true },
        country: { type: String, required: true },
        rating: { type: Number, min: 0, max: 10, required: true }, // Rating between 0 and 10
        plot: { type: String, required: true },
        awards: { type: String },
        posterUrl: { type: String },
        trailerUrl: { type: String },
    },
    { timestamps: true },
);

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
