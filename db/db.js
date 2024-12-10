const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log("Database connected");
    } catch (error) {
        console.log("Database connection failed", error);
    }
};

module.exports = connectDB;
