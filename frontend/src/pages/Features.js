import React from 'react';

const Features = () => {
    return (
        <div className="pages">
            <h2 style={{ color: 'var(--primary)', marginBottom: '15px' }}>Key Features</h2>
            <ul style={{ listStyle: 'disc', marginLeft: '20px', lineHeight: '1.8' }}>
                <li><strong>Full CRUD Functionality:</strong> Instantly add, view, and delete workout sessions with title, load, and repetition details.</li>
                <li><strong>Secure Authentication:</strong> User signup and login system to protect personal workout data.</li>
                <li><strong>State Management:</strong> Uses React Context API and a reducer pattern for efficient, real-time UI updates.</li>
                <li><strong>MySQL Database Integration:</strong> Persistent storage ensuring your data is saved and retrieved from a relational database.</li>
                <li><strong>RESTful API:</strong> Communicates with a Node.js and Express backend for seamless data handling.</li>
                <li><strong>Responsive UI:</strong> The layout is designed to be fully responsive for both mobile and desktop viewing.</li>
                <li><strong>Modular Architecture:</strong> Built with clean, reusable React components for maintainable code.</li>
            </ul>
        </div>
    );
}

export default Features;