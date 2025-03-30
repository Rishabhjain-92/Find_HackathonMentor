import React, { useState } from 'react';

const Feedback = () => {
    const [name, setName] = useState('Rishabh'); // Default name
    const [message, setMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMessage(''); // Clear previous message
        try {
            const response = await fetch('http://localhost:5000/api/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, message }), // Exclude mentorName
            });
            const data = await response.json();
            if (response.ok) {
                setSuccessMessage('Feedback submitted successfully!'); // Show success message
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>Message:</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
            </div>
            <button type="submit">Submit Feedback</button>
            {successMessage && <p>{successMessage}</p>}
        </form>
    );
};

export default Feedback;
