import React from 'react';

const Contact = () => {
    return (
        <div className="pages">
            <h2 style={{ color: 'var(--primary)', marginBottom: '15px' }}>Contact & Support</h2>
            <p>
                If you have any questions regarding the Workout Recorder application or the broader Health Track system, feel free to reach out.
            </p>
            <div style={{ 
                padding: '20px', 
                background: '#fff', 
                borderRadius: '8px', 
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)', 
                maxWidth: '400px',
                marginTop: '20px'
            }}>
                <p><strong>Email:</strong> 22130536@students.liu.edu.lb</p>
                <p><strong>Phone:</strong> +961 71437066</p>
                <p><strong>Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM</p>
            </div>
        </div>
    );
}

export default Contact;