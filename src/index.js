import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

// Load environment variables from the specified file
dotenv.config({
    path: "./env"
});

// Initialize Express app
const app = express();

// Connect to MongoDB and then start the server
connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port: ${process.env.PORT || 8000}`);
        });
    })
    .catch((err) => {
        console.log("MONGO db connection failed!!! ", err);
        process.exit(1); // Exit the process with failure
    });
