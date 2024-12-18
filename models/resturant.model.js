const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        cuisine: {
            type: [String],
            enum: [
                "American",
                "Italian",
                "Chinese",
                "Indian",
                "Japanese",
                "Mexican",
                "Thai",
                "French",
                "Mediterranean",
                "Greek",
                "Spanish",
                "Other",
            ],
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            min: 0,
            max: 5,
            default: 0,
        },
        website: {
            type: String,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        openHours: {
            type: String,
        },
        priceRange: {
            type: String,
            enum: ["$", "$$", "$$$", "$$$$", "Other"],
        },
        reservationsNeeded: {
            type: Boolean,
            default: false,
        },
        isDeliveryAvailable: {
            type: Boolean,
            default: false,
        },
        menuUrl: {
            type: String,
            required: true,
        },
        photos: {
            type: [String],
        },
    },
    { timestamps: true },
); // Automatically tracks creation and update times

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
