const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    productInfo: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0, // Price should not be negative
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    size: {
        type: number,
        required: true,
    },
    tags: {
        type: [String],
        default: [],
    },
});

const mongoose = require("mongoose");

const productSchema2 = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        default: 0,
    },
    description: {
        type: String,
    },
    features: [
        {
            type: String,
        },
    ],
    images: [
        {
            type: String,
        },
    ],
    effectivePixels: {
        type: Number,
    },
    sensorType: {
        type: String,
    },
    wifi: {
        type: Boolean,
    },
    videoResolution: {
        type: String,
    },
    warranty: {
        type: Number,
    },
    ratings: {
        type: Number,
    },
    reviews: {
        type: Number,
    },
    stock: {
        type: Number,
        default: 0,
    },
});

const FlipkartProduct = mongoose.model("FlipkartProduct", productSchema2);

module.exports = { FlipkartProduct };

module.exports = mongoose.model("Product", productSchema);
