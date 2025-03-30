import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const mockHackathons = [
  {
    id: 1,
    name: 'TechCrunch Disrupt Hackathon',
    date: '2025-03-15',
    location: 'San Francisco, CA',
    mode: 'In-Person',
    registrationDeadline: '2025-03-01',
    prizeMoney: '$30,000',
    description: 'Join the world\'s leading hackathon for startups and innovators.',
    imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['Startup', 'Innovation', 'Tech'],
    mentorsNeeded: 15,
  },
  {
    id: 2,
    name: 'AI for Good Hackathon',
    date: '2025-04-20',
    location: 'Virtual',
    mode: 'Online',
    registrationDeadline: '2025-04-10',
    prizeMoney: '$20,000',
    description: 'Create AI solutions that make a positive impact on society.',
    imageUrl: 'https://images.unsplash.com/photo-1526378800651-c1a31ee6f4e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['AI', 'Social Impact', 'Machine Learning'],
    mentorsNeeded: 20,
  },
  {
    id: 3,
    name: 'Global Climate Hack',
    date: '2025-05-01',
    location: 'London, UK',
    mode: 'Hybrid',
    registrationDeadline: '2025-04-15',
    prizeMoney: '£25,000',
    description: 'Develop innovative solutions to combat climate change.',
    imageUrl: 'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['Climate', 'Sustainability', 'GreenTech'],
    mentorsNeeded: 12,
  },
];

function HackathonList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMode, setSelectedMode] = useState('');
  const [sortBy, setSortBy] = useState('date');

  const filteredAndSortedHackathons = mockHackathons
    .filter(hackathon => {
      const matchesSearch = hackathon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hackathon.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hackathon.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesMode = !selectedMode || hackathon.mode === selectedMode;

      return matchesSearch && matchesMode;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(a.date) - new Date(b.date);
        case 'prize':
          return parseInt(b.prizeMoney.replace(/[^0-9]/g, '')) - 
                 parseInt(a.prizeMoney.replace(/[^0-9]/g, ''));
        case 'mentors':
          return b.mentorsNeeded - a.mentorsNeeded;
        default:
          return 0;
      }
    });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Hackathons</h2>
        <p className="text-gray-600">Find hackathons where you can make an impact as a mentor.</p>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Search and Filters */}
        <div className="md:col-span-2">
          <input
            type="text"
            placeholder="Search hackathons..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <select
            value={selectedMode}
            onChange={(e) => setSelectedMode(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Modes</option>
            <option value="In-Person">In-Person</option>
            <option value="Online">Online</option>
            <option value="Hybrid">Hybrid</option>
          </select>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="date">Sort by Date</option>
            <option value="prize">Sort by Prize</option>
            <option value="mentors">Sort by Mentors Needed</option>
          </select>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredAndSortedHackathons.map((hackathon) => (
          <div key={hackathon.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="relative h-48">
              <img
                src={hackathon.imageUrl}
                alt={hackathon.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
                  ${hackathon.mode === 'Online' ? 'bg-green-100 text-green-800' :
                    hackathon.mode === 'In-Person' ? 'bg-blue-100 text-blue-800' :
                    'bg-purple-100 text-purple-800'}`}>
                  {hackathon.mode}
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold text-gray-900">{hackathon.name}</h3>
                <span className="text-lg font-semibold text-blue-600">{hackathon.prizeMoney}</span>
              </div>
              <p className="mt-2 text-gray-600 line-clamp-2">{hackathon.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {hackathon.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-500">
                <div>
                  <span className="block font-medium">Date</span>
                  <span>{new Date(hackathon.date).toLocaleDateString()}</span>
                </div>
                <div>
                  <span className="block font-medium">Location</span>
                  <span>{hackathon.location}</span>
                </div>
                <div>
                  <span className="block font-medium">Registration Deadline</span>
                  <span>{new Date(hackathon.registrationDeadline).toLocaleDateString()}</span>
                </div>
                <div>
                  <span className="block font-medium">Mentors Needed</span>
                  <span>{hackathon.mentorsNeeded}</span>
                </div>
              </div>
              <Link
                to={`/hackathon/${hackathon.id}`}
                className="mt-6 w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HackathonList;
