const db = require('../config/db');

const getWorkouts = async (req, res) => {
  const user_id = req.user.id;
  try {
    const [rows] = await db.query(
      'SELECT * FROM workouts WHERE user_id = ? ORDER BY createdAt DESC', 
      [user_id]
    );
    res.status(200).json(rows);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getWorkout = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.query('SELECT * FROM workouts WHERE id = ?', [id]);
    
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Workout not found' });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createWorkout = async (req, res) => {
  const { title, load_kg, reps } = req.body;
  const user_id = req.user.id;

  if (!title || !load_kg || !reps) {
    return res.status(400).json({ error: 'Please fill in all the fields' });
  }

  try {
    const [result] = await db.query(
      'INSERT INTO workouts (title, load_kg, reps, user_id) VALUES (?, ?, ?, ?)', 
      [title, load_kg, reps, user_id]
    );
    res.status(200).json({ id: result.insertId, title, load_kg, reps });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await db.query('DELETE FROM workouts WHERE id = ?', [id]);
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'No such workout' });
    }
    res.status(200).json({ id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getWorkouts,
  getWorkout, 
  createWorkout,
  deleteWorkout
};