const db = require('../config/db');
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken');

const createToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET, { expiresIn: '3d' });
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'All fields must be filled' });
    }

    try {
        const [users] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        const user = users[0];

        if (!user) {
            return res.status(400).json({ error: 'Incorrect email' });
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(400).json({ error: 'Incorrect password' });
        }

        const token = createToken(user.id);

        res.status(200).json({ email, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const signupUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'All fields must be filled' });
    }

    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const [result] = await db.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hash]);
        
        const id = result.insertId;
        const token = createToken(id);

        res.status(200).json({ email, token });
    } catch (error) {
        res.status(400).json({ error: 'Email already in use' });
    }
};

module.exports = { signupUser, loginUser };