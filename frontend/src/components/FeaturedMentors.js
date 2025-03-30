import React from 'react';
import { Link } from 'react-router-dom';

const featuredMentors = [
  {
    name: 'John Doe',
    expertise: ['React', 'Node.js', 'MongoDB'],
    experience: '5+ years',
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Full-stack developer passionate about mentoring',
  },
  {
    name: 'Jane Smith',
    expertise: ['System Design', 'Java', 'Spring'],
    experience: '10+ years',
    rating: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Senior architect specializing in scalable systems',
  }
];

function FeaturedMentors() {
  const [name, setName] = React.useState("");
  const [feedback, setFeedback] = React.useState("");
  const [rating, setRating] = React.useState(5);
  const [selectedMentor, setSelectedMentor] = React.useState(null);

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/feedback/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        mentorId: selectedMentor ? selectedMentor.name : 'mentor-id-placeholder', 
        userId: 'user-id-placeholder', 
        feedbackMessage: feedback,
        rating: rating
      }),
    });
    if (response.ok) {
      alert('Feedback submitted successfully!');
      setName("");
      setFeedback("");
    } else {
      alert('Failed to submit feedback.');
    }
  };

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold">Featured Mentors</h2>
        <div className="mt-12">
          {featuredMentors.map(mentor => (
            <div key={mentor.name} className="mentor">
              <img src={mentor.imageUrl} alt={mentor.name} />
              <h3>{mentor.name}</h3>
              <p>{mentor.bio}</p>
              <Link to={`/mentors/${mentor.name}`}>View Profile</Link>
              <button onClick={() => setSelectedMentor(mentor)}>Select Mentor</button>
            </div>
          ))}
        </div>
        <form onSubmit={handleFeedbackSubmit} className="mt-4">
          <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required className="border rounded p-2 w-full" />
          <textarea placeholder="Your Feedback" value={feedback} onChange={(e) => setFeedback(e.target.value)} required className="border rounded p-2 w-full mt-2" />
          <select value={rating} onChange={(e) => setRating(e.target.value)} required className="border rounded p-2 w-full mt-2">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button type="submit" className="bg-blue-500 text-white rounded p-2 mt-2">Submit Feedback</button>
        </form>
      </div>
    </section>
  );
}

export default FeaturedMentors;
