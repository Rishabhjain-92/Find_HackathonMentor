import React from 'react';
import { Link } from 'react-router-dom';

const Hackathons = () => {
  // This would typically come from your backend
  const hackathons = [
    {
      id: 1,
      title: 'Global AI Innovation Challenge',
      description: 'Build innovative AI solutions for real-world problems',
      date: 'March 1-3, 2025',
      image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDF8fHRlY2hjdW5nfGVufDB8fHx8MTYxNjY5MjQwNzg3NTA0ODc2Mg&ixlib=rb-1.2.1&q=80&w=1080',
      participants: 500,
      prize: '$10,000',
      location: 'Virtual'
    },
    {
      id: 2,
      title: 'Sustainable Tech Hackathon',
      description: 'Create solutions for environmental sustainability',
      date: 'March 15-17, 2025',
      image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDF8fHRlY2hjdW5nfGVufDB8fHx8MTYxNjY5MjQwNzg3NTA0ODc2Mg&ixlib=rb-1.2.1&q=80&w=1080',
      participants: 300,
      prize: '$5,000',
      location: 'Hybrid'
    },
    // Add more hackathons...
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-200 to-blue-200 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Upcoming Hackathons</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hackathons.map((hackathon) => (
            <div key={hackathon.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={hackathon.image} 
                alt={hackathon.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{hackathon.title}</h2>
                <p className="text-gray-600 mb-2">{hackathon.description}</p>
                <p className="text-gray-500">Date: {hackathon.date}</p>
                <p className="text-gray-500">Location: {hackathon.location}</p>
                <p className="text-gray-500">Participants: {hackathon.participants}</p>
                <p className="text-gray-500">Prize: {hackathon.prize}</p>
                <Link 
                  to={`/hackathon/${hackathon.id}`}
                  className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Assuming you have a mentorId available when viewing the profile
const MentorProfile = () => {
  const mentorId = 1; // Replace with actual mentor ID
  const userId = 1; // Replace with actual user ID

  return (
    <div>
      // FeedbackForm mentorId={mentorId} userId={userId} />
    </div>
  );
};

export default Hackathons;
