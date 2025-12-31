import React from 'react';

const About = () => {
    return (
        <div className="pages">
            <h2 style={{ color: 'var(--primary)', marginBottom: '15px' }}>About the Workout Recorder</h2>
            <p>
                The Workout Recorder is a simple, effective tool for fitness enthusiasts to track their daily exercises and progress. 
                This application acts as the main interface for the Health Track system, focusing on data accuracy and user experience.
            </p>
            <p>
                I built this app to provide a straightforward way to track gym progress without the clutter of traditional apps. 
                By focusing on the basics—exercise titles, weights, and repetitions—it allows users to stay focused on their training.
            </p>
            <p>
                The application is built using the MERN stack (MySQL, Express, React, and Node.js), ensuring a scalable foundation 
                for future features like progress analytics and long-term fitness tracking.
            </p>
        </div>
    );
}

export default About;