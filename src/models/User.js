// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
// }, { timestamps: true });  // Automatically add createdAt and updatedAt fields

// const User = mongoose.model('User', userSchema);

// module.exports = User;



// backend/models/User.js
// import mongoose from 'mongoose';
// import bcrypt from 'bcrypt';

// // Define the user schema
// const userSchema = new mongoose.Schema({
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         match: [/.+@.+\..+/, 'Please enter a valid email address']
//     },
//     password: {
//         type: String,
//         required: true,
//         minlength: 6
//     }
// });

// // Hash the password before saving the user model
// userSchema.pre('save', async function (next) {
//     if (this.isModified('password')) {
//         this.password = await bcrypt.hash(this.password, 10);
//     }
//     next();
// });

// const User = mongoose.model('User', userSchema);
// export default User;


// backend/models/user.js


// backend/models/user.js
// import mongoose from 'mongoose';
// import bcrypt from 'bcrypt';

// // Define the user schema
// const userSchema = new mongoose.Schema({
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         match: [/.+@.+\..+/, 'Please enter a valid email address']
//     },
//     password: {
//         type: String,
//         required: true,
//         minlength: 6
//     }
// });

// // Hash the password before saving the user model
// userSchema.pre('save', async function (next) {
//     if (this.isModified('password')) {
//         try {
//             this.password = await bcrypt.hash(this.password, 10);
//         } catch (err) {
//             return next(err);  // Pass the error to the next middleware
//         }
//     }
//     next();
// });

// // Create a method to compare passwords
// userSchema.methods.comparePassword = async function (candidatePassword) {
//     return bcrypt.compare(candidatePassword, this.password);
// };

// const User = mongoose.model('User', userSchema);
// export default User;


// backend/models/user.js
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

// Define the user schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address']
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
});

// Hash the password before saving the user model
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

// Method to compare passwords
userSchema.methods.comparePassword = async function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);
export default User;
