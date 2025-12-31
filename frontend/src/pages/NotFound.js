import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="pages" style={{ textAlign: 'center', padding: '50px' }}>
            <h1 style={{ fontSize: '3rem', color: 'var(--error)' }}>404</h1>
            <h2 style={{ color: '#333', marginBottom: '20px' }}>Page Not Found</h2>
            <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '30px' }}>
                Oops! It looks like you tried to access a page that doesn't exist.
            </p>
            <Link to='/' style={{ 
                color: '#fff', 
                background: 'var(--primary)', 
                padding: '10px 20px', 
                borderRadius: '4px', 
                textDecoration: 'none',
                fontWeight: 'bold'
            }}>
                Go to Home Page
            </Link>
        </div>
    );
}

export default NotFound;