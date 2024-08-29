const AuthService = require('../services/authService');

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await AuthService.login(email, password);
        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        res.status(401).json({ message: 'Invalid credentials', error: error.message });
    }
};