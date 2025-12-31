const jwt = require('jsonwebtoken');
const db = require('../config/db');

const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: 'Authorization token required' });
  }

  const token = authorization.split(' ')[1];

  try {
    const { id } = jwt.verify(token, process.env.SECRET);

    const [rows] = await db.query('SELECT id FROM users WHERE id = ?', [id]);
    
    if (rows.length === 0) {
      return res.status(401).json({ error: 'User not found in database' });
    }

    req.user = rows[0];
    next();

  } catch (error) {
    res.status(401).json({ error: 'Request is not authorized' });
  }
};

module.exports = requireAuth;