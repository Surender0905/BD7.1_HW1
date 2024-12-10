const mongoose = require("mongoose");
const { Schema } = mongoose;

const restaurantSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        cuisine: {
            type: [String],
            enum: [
                "Italian",
                "Mexican",
                "Chinese",
                "Indian",
                "American",
                "French",
                "Japanese",
                "Mediterranean",
                "Thai",
                "Vegetarian",
                "Vegan",
                "Other",
            ],
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        owner: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
        },
        website: {
            type: String,
        },
        openingYear: {
            type: Number,
        },
        rating: {
            type: Number,
            min: 0,
            max: 5,
            default: 0,
        },
        specialDishes: {
            type: [String],
        },
        photoUrls: {
            type: [String],
        },
    },
    { timestamps: true }, // Automatically adds createdAt and updatedAt
);

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
module.exports = Restaurant;