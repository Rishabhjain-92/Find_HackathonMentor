import React, { useEffect, useState } from 'react';

const FeedbackList = () => {
    const [feedback, setFeedback] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFeedback = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/feedback');
                if (!response.ok) {
                    throw new Error('Failed to fetch feedback');
                }
                const data = await response.json();
                setFeedback(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchFeedback();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>Feedback</h2>
            <ul>
                {feedback.map((item, index) => (
                    <li key={index}><strong>{item.name}:</strong> {item.message}</li>
                ))}
            </ul>
        </div>
    );
};

export default FeedbackList;
