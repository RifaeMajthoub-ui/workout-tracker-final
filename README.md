🏋️ Health Track: Workout Recorder (Frontend Interface)

This document describes the user-facing part (the frontend) of the Health Track fitness system—what you see and click on your screen.

🚀 Primary Goal

The app's main function is to give you a simple way to log your workouts. You can quickly record three key details for each exercise:

Title: (e.g., Bench Press, 5K Run)

Load (kg): The weight used.

Reps: The number of repetitions performed.

Currently, the app uses fake (mock) data for stability, meaning it doesn't save to a live database yet. This ensures the user interface (UI) is 100% functional and ready for future integration with a real server.

🛠️ Key Technology and Features

The application is built using modern React and the Context API for efficient data management.

Feature

Description

Mock-Up Ready

Allows you to Create, View, and Delete workout logs to test the core logic without a backend connection.

Dynamic Look

Features a smooth, time-based slideshow of fitness images in the background for an engaging visual experience.

Responsive Design

Optimized to adjust automatically and seamlessly for use on mobile phones, tablets, and desktops.

Simple State

Uses standard React tools (useReducer and useContext) to manage data clearly and reliably.

💡 Origin and Customization Notes

While this project began with a great template structure, it was heavily customized for Health Track's specific needs:

Visual Enhancement: We added the full-screen dynamic background and a dark overlay to ensure text visibility over varied images.

Data Centralization: All data operations (Add, Delete, etc.) now flow through a custom Context hook for better control.

Branding: All navigation, content, and UI elements were updated to align with the Health Track brand and project goals.

Stability: The code was adjusted to use mock data instead of real API calls, ensuring the frontend runs perfectly in a development environment.

📦 Getting Started (Local Setup)

Follow these steps to run the project on your machine:

Get the Code:

git clone ([https://github.com/trickedcupid/workout-tracker.git](https://github.com/trickedcupid/workout-tracker.git))
cd health-track-frontend


Install Dependencies:

npm install


Add Assets:
You must place 7 specific image files (1.jpg.jpg, 2.webp, 3.webp, 4.webp, 5.jpg.avif, 6.jpg.jpg, 7.jpg.jpg) inside the src/assets/ folder for the dynamic background to function.

Run the Application:

npm start


The application should open at http://localhost:3000.

⏭️ Future Plans (Next Phase)

The primary goal is to introduce permanent data saving:

Full Backend Integration: Replace mock functions with real API calls to connect to our database.

User Authentication: Implement secure sign-up and login functionality to separate and protect user data.