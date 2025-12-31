# 🏋️‍♂️ Workout Tracker - Full Stack Web Application

This is a personal Workout Tracker application built to help users manage their fitness journey. It allows users to create, view, and track their workout sessions with a focus on ease of use and clean data management.

## 🔗 Project Links
* **GitHub Repository:** [https://github.com/RifaeMajthoub-ui/workout-tracker-final](https://github.com/RifaeMajthoub-ui/workout-tracker-final)

---

## 🚀 Features
* **Full Authentication:** Secure user signup and login using JWT (JSON Web Tokens).
* **Workout Management:** Users can add new workouts (Exercise, Load, Reps) and delete completed ones.
* **Responsive UI:** Built with React for a smooth, single-page experience.
* **Persistent Storage:** All data is saved in a structured MySQL database.

---

## 🛠️ Tech Stack
* **Frontend:** React.js, CSS3
* **Backend:** Node.js, Express.js
* **Database:** MySQL
* **Authentication:** JWT (JSON Web Tokens) & Bcrypt for password hashing
* **Version Control:** Git & GitHub

---

## 📁 Project Structure
- `frontend/`: React application (User Interface)
- `backend/`: Express server and API routes
- `database_setup.sql`: SQL script to initialize the MySQL tables

---

## ⚙️ Setup & Installation

### 1. Database Setup
1. Open your MySQL terminal or Workbench.
2. Run the commands found in `database_setup.sql` to create the database and the necessary tables.

### 2. Backend Setup
1. Navigate to the `backend` folder: `cd backend`
2. Install dependencies: `npm install`
3. Create a `.env` file with your `PORT`, `MYSQL_USER`, `MYSQL_PASSWORD`, and `SECRET`.
4. Start the server: `npm start`

### 3. Frontend Setup
1. Navigate to the `frontend` folder: `cd frontend`
2. Install dependencies: `npm install`
3. Start the application: `npm start`

---

## 📈 Development Process (Git History)
The project followed a structured development lifecycle:
1. **Initial Setup:** Project architecture and dependency configuration.
2. **Backend Development:** Building the REST API and MySQL integration.
3. **Frontend Development:** Designing React components and connecting to the backend.

---

### **Developer Information**
* **Project:** Full-Stack Workout Tracker
* **Requirement:** University Assessment - Source Code & Version Control Proof