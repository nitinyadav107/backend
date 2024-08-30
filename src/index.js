// import dotenv from "dotenv";
// import express from "express";
// import connectDB from "./db/index.js";

// // Load environment variables from the specified file
// dotenv.config({
//     path: "./env"
// });

// // Initialize Express app
// const app = express();

// // Connect to MongoDB and then start the server
// connectDB()
//     .then(() => {
//         app.listen(process.env.PORT || 8000, () => {
//             console.log(`Server is running at port: ${process.env.PORT || 8000}`);
//         });
//     })
//     .catch((err) => {
//         console.log("MONGO db connection failed!!! ", err);
//         process.exit(1); // Exit the process with failure
//     });


// backend/src/index.js
// backend/index.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/auth.js';  // Ensure this file exists

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/yourdbname', {  // Replace 'yourdbname' with your actual database name
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
