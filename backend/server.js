require('dotenv').config();
const express = require('express');
const cors = require('cors');

const workoutRoutes = require('./routes/workouts');
const userRoutes = require('./routes/user');

const app = express();

app.use(express.json()); 
app.use(cors()); 

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.use('/api/workouts', workoutRoutes);
app.use('/api/user', userRoutes);

app.get('/', (req, res) => {
    res.send("API is running");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});