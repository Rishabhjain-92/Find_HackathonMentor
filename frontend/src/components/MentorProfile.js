import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaGlobe, FaPaperPlane } from 'react-icons/fa';

// Import mentor data
import { mentors } from './FindMentor';

const MentorProfile = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('ABOUT');
  const [mentor, setMentor] = useState(null);
  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const userId = 1; // Assuming a user ID is available

  useEffect(() => {
    // Find the mentor by ID from the mentors array
    const selectedMentor = mentors.find(m => m.id === parseInt(id));
    
    if (selectedMentor) {
      setMentor({
        ...selectedMentor,
        experience: [
          {
            role: 'Senior ' + selectedMentor.title,
            company: 'Tech Solutions Inc.',
            duration: '2020 - Present',
            description: `Leading ${selectedMentor.title.toLowerCase()} initiatives and mentoring junior developers.`
          },
          {
            role: selectedMentor.title,
            company: 'Innovation Labs',
            duration: '2018 - 2020',
            description: `Developed cutting-edge solutions in ${selectedMentor.skills.join(' and ')}.`
          },
          {
            role: 'Junior ' + selectedMentor.title,
            company: 'StartUp Co',
            duration: '2016 - 2018',
            description: 'Started career with hands-on development and learning.'
          }
        ],
        education: [
          {
            degree: 'Master of Science in Computer Science',
            school: 'Tech University',
            year: '2018'
          },
          {
            degree: 'Bachelor of Science in Software Engineering',
            school: 'Engineering College',
            year: '2016'
          }
        ],
        social: {
          linkedin: 'https://linkedin.com/in/' + selectedMentor.name.toLowerCase().replace(' ', '-'),
          github: 'https://github.com/' + selectedMentor.name.toLowerCase().split(' ')[0],
          website: 'https://' + selectedMentor.name.toLowerCase().split(' ')[0] + '.dev'
        }
      });

      // Initialize chat with a welcome message from the mentor
      setChatMessages([
        {
          sender: 'mentor',
          text: `Hi! I'm ${selectedMentor.name}. How can I help you with ${selectedMentor.skills.join(', ')}?`,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }
  }, [id]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    const newMessage = {
      sender: 'user',
      text: chatMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatMessages([...chatMessages, newMessage]);
    setChatMessage('');

    // Simulate mentor response
    setTimeout(() => {
      const mentorResponse = {
        sender: 'mentor',
        text: `Thanks for your message! I'd be happy to help you with ${mentor.skills[0]}.`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatMessages(prev => [...prev, mentorResponse]);
    }, 1000);
  };

  if (!mentor) return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">Loading...</div>;

  const renderTabContent = () => {
    switch (activeTab) {
      case 'ABOUT':
        return (
          <div className="prose max-w-none">
            <p className="text-gray-600">{mentor.bio}</p>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Expertise</h3>
              <p className="text-gray-600">
                Specialized in {mentor.skills.join(', ')} with {mentor.reviewCount}+ successful mentoring sessions.
              </p>
            </div>
          </div>
        );
      
      case 'EXPERIENCE':
        return (
          <div className="space-y-6">
            {mentor.experience.map((exp, index) => (
              <div key={index} className="border-l-2 border-gray-200 pl-4">
                <h3 className="font-semibold text-lg">{exp.role}</h3>
                <p className="text-sm text-gray-500">{exp.company} • {exp.duration}</p>
                <p className="mt-2 text-gray-600">{exp.description}</p>
              </div>
            ))}
          </div>
        );
      
      case 'EDUCATION':
        return (
          <div>
            {mentor.education.map((edu, index) => (
              <div key={index} className="mb-4 flex items-start">
                <div className="mt-1 mr-4">
                  <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <p className="text-gray-600">{edu.school} • {edu.year}</p>
                </div>
              </div>
            ))}
          </div>
        );
      
      case 'CHAT':
        return (
          <div className="h-96 flex flex-col">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {chatMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'mentor' && (
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="h-8 w-8 rounded-full mr-2"
                    />
                  )}
                  <div
                    className={`max-w-[70%] rounded-lg p-3 ${
                      msg.sender === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span className="text-xs mt-1 block opacity-75">{msg.time}</span>
                  </div>
                  {msg.sender === 'user' && (
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt="You"
                      className="h-8 w-8 rounded-full ml-2"
                    />
                  )}
                </div>
              ))}
            </div>
            <form onSubmit={handleSendMessage} className="border-t p-4 flex gap-2">
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 flex items-center gap-2"
              >
                <FaPaperPlane />
                Send
              </button>
            </form>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold mb-4">{mentor.name}</h1>
      <div className="flex gap-8">
        {/* Main Content */}
        <div className="flex-grow">
          <div className="bg-white rounded-lg shadow-sm min-h-[400px]">
            {/* Profile Header */}
            <div className="p-6">
              <div className="flex items-start gap-6">
                <img 
                  src={mentor.image} 
                  alt={mentor.name}
                  className="w-32 h-32 rounded-full object-cover"
                />
                <div className="flex-grow">
                  <h1 className="text-2xl font-bold mb-1">{mentor.name}</h1>
                  <p className="text-gray-600 mb-2">{mentor.title}</p>
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span 
                        key={i} 
                        className={`text-${i < Math.floor(mentor.rating) ? 'yellow' : 'gray'}-400`}
                      >
                        ★
                      </span>
                    ))}
                    <span className="ml-2 text-gray-600">({mentor.reviewCount} reviews)</span>
                  </div>
                  {mentor.available && (
                    <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                      Available for Mentoring
                    </span>
                  )}
                </div>
              </div>
            </div>
            
            {/* Skills */}
            <div className="px-6 pb-6">
              <h2 className="text-lg font-semibold mb-3">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {mentor.skills.map(skill => (
                  <span 
                    key={skill}
                    className="bg-gray-100 px-3 py-1 rounded-md text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Tabs */}
            <div className="border-t border-gray-200">
              <div className="flex border-b">
                {['ABOUT', 'EXPERIENCE', 'EDUCATION', 'CHAT'].map((tab) => (
                  <button
                    key={tab}
                    className={`px-6 py-3 font-medium ${
                      activeTab === tab
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              
              {/* Tab Content */}
              <div className="p-6">
                {renderTabContent()}
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-white rounded-lg shadow p-6 mb-4 min-h-[400px]">
          <h2 className="text-2xl font-semibold mb-2">Connect</h2>
          <div className="space-y-2">
            <a
              href={mentor.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 w-full border rounded-md p-2 text-gray-700 hover:bg-gray-50"
            >
              <FaLinkedin className="text-blue-600" />
              <span>LinkedIn</span>
            </a>
            <a
              href={mentor.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 w-full border rounded-md p-2 text-gray-700 hover:bg-gray-50"
            >
              <FaGithub className="text-gray-800" />
              <span>GitHub</span>
            </a>
            <a
              href={mentor.social.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 w-full border rounded-md p-2 text-gray-700 hover:bg-gray-50"
            >
              <FaGlobe className="text-gray-600" />
              <span>Website</span>
            </a>
            <button
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              onClick={() => alert('Schedule a meeting functionality coming soon!')}
            >
              Schedule Meeting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorProfile;
