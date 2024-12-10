const mongoose = require("mongoose");

// Define the User schema
const userSchema = new mongoose.Schema(
    {
        fullName: { type: String, required: true }, // Full name of the user
        username: { type: String, required: true, unique: true }, // Username (unique)
        bio: { type: String, required: true }, // User's bio
        profilePicUrl: { type: String, required: true }, // URL to the user's profile picture
        followingCount: { type: Number, default: 0 }, // Number of people the user is following
        followerCount: { type: Number, default: 0 }, // Number of followers
        companyName: { type: String, required: true }, // Name of the user's company
        location: { type: String, required: true }, // Location of the user
        portfolioUrl: { type: String, required: true }, // URL to the user's portfolio
    },
    { timestamps: true },
); // Automatically add createdAt and updatedAt fields

// Create the User model
const User = mongoose.model("User", userSchema);

module.exports = User;
