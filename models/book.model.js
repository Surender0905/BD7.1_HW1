const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        publishedYear: {
            type: Number,
            required: true,
        },
        genre: {
            type: [String],
            enum: [
                "Fiction",
                "Non-Fiction",
                "Mystery",
                "Thriller",
                "Science Fiction",
                "Fantasy",
                "Romance",
                "Historical",
                "Biography",
                "Self-help",
                "Other",
            ],
            required: true,
        },
        language: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            default: "United States",
        },
        rating: {
            type: Number,
            min: 0,
            max: 10,
            default: 0,
        },
        summary: {
            type: String,
        },
        awards: {
            type: String,
        },
        coverImageUrl: {
            type: String,
        },
        purchaseUrl: {
            type: String,
        },
    },
    { timestamps: true }, // Automatically adds createdAt and updatedAt
);

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
