const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        priority: {
            type: String,
            enum: ["Low", "Medium", "High"],
            required: true,
        },
        dueDate: {
            type: Date,
        },
        completed: {
            type: Boolean,
            default: false,
        },
        tags: {
            type: [String],
            default: [],
        },
    },
    { timestamps: true }, // Automatically adds createdAt and updatedAt
);

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
