const mongoose = require("mongoose");
const { Schema } = mongoose;

const smartphoneSchema = new Schema(
    {
        brand: {
            type: String,
            required: true,
        },
        model: {
            type: String,
            required: true,
        },
        releaseYear: {
            type: Number,
            required: true,
        },
        operatingSystem: {
            type: String,
            enum: ["iOS", "Android", "Windows", "Other"],
            required: true,
        },
        displaySize: {
            type: String,
        },
        storage: {
            type: String,
        },
        ram: {
            type: String,
        },
        cameraSpecs: {
            type: Object,
        },
        batteryCapacity: {
            type: String,
        },
        connectivity: {
            type: [String],
        },
        price: {
            type: Number,
        },
        colorsAvailable: {
            type: [String],
        },
        features: {
            type: [String],
        },
    },
    { timestamps: true }, // Automatically adds createdAt and updatedAt
);

const Smartphone = mongoose.model("Smartphone", smartphoneSchema);
module.exports = Smartphone;
