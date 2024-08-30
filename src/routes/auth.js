// const express = require('express');
// const { signup } = require('../controllers/authController');

// const router = express.Router();

// // Signup route
// router.post('/signup', signup);

// module.exports = router;



// backend/routes/auth.js
// import express from 'express';
// import User from '../models/User.js';

// const router = express.Router();

// // Signup route
// router.post('/signup', async (req, res) => {
//     const { email, password } = req.body;

//     // Check if email and password are provided
//     if (!email || !password) {
//         return res.status(400).json({ error: 'Email and password are required' });
//     }

//     try {
//         // Check if the user already exists
//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({ error: 'User already exists' });
//         }

//         // Create a new user
//         const newUser = new User({ email, password });
//         await newUser.save();

//         res.status(201).json({ message: 'User registered successfully' });
//     } catch (err) {
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// export default router;



// backend/routes/auth.js
import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js'; // Import the User model

const router = express.Router();
const JWT_SECRET = 'OPsharma'; // Replace with a strong secret key

// User signup route
// router.post('/signup', async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         // Check if the user already exists
//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({ error: 'User already exists' });
//         }

//         // Hash the password
//         const hashedPassword = await bcrypt.hash(password, 10);

//         // Create a new user
//         const newUser = new User({ email, password: hashedPassword });
//         await newUser.save();

//         res.json({ success: true, message: 'User registered successfully' });
//     } catch (err) {
//         console.error('Error during signup:', err);
//         res.status(500).json({ error: 'Server error' });
//     }
// });


// backend/routes/auth.js
// Add this route to the existing file
router.post('/signup', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const newUser = new User({ email, password });
        await newUser.save();

        res.status(201).json({ success: true, message: 'User registered successfully' });
    } catch (err) {
        console.error('Error during signup:', err);
        res.status(500).json({ error: 'Server error', details: err.message });
    }
});


// User login route
// In routes/auth.js

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        // Compare the provided password with the stored hashed password
        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });

        res.json({ success: true, token, message: 'Login successful' });
    } catch (err) {
        console.error('Error during login:', err);
        res.status(500).json({ error: 'Server error', details: err.message });
    }
});


export default router;
