import express from "express"

import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
app.use(cookieParser())


//route import
import userRouter from './routes/user.routes.js'

const express = require('express');
const authRoutes = require('./routes/authRoutes');


app.use(express.json());
app.use('/api/auth', authRoutes);

module.exports = app;

app.use("/api/v1/users", userRouter)

// http://localhost:8000/api/v1/users/register
export { app }