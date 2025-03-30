import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(''); // State for login message

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(''); // Clear previous message
        try {
            console.log('Attempting to log in with:', { email, password }); // Log email and password
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            console.log('Login response:', data); // Log the response

            if (response.ok) {
                setMessage(data.message); // Show success message
            } else {
                setMessage(data.message); // Show error message
            }
        } catch (error) {
            console.error('Login error:', error);
            setMessage('An error occurred. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit">Sign In</button>
            {message && <p style={{ color: response.ok ? 'green' : 'red' }}>{message}</p>}
        </form>
    );
};

export default Login;
