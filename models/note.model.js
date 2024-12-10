const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the schema for the Note
const noteSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            enum: ["Personal", "Work", "Study", "Ideas", "Journal", "Other"],
            required: true,
        },
        tags: {
            type: [String],
            default: [],
        },
    },
    { timestamps: true }, // Automatically adds createdAt and updatedAt
);

const Note = mongoose.model("Note", noteSchema);
module.exports = Note;
