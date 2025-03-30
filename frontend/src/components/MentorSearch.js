import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const mentors = [
  {
    id: 1,
    name: 'Rishabh Jain',
    title: 'Senior Software Engineer',
    rating: 4.9,
    reviews: 127,
    skills: ['React', 'Node.js', 'Python'],
    expertiseLevel: 'Expert',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    available: true,
    bio: 'Experienced Senior Software Engineer with a passion for teaching and mentoring. Specializing in React, Node.js, Python.',
    experience: [
      {
        role: 'Senior Software Engineer',
        company: 'Tech Corp',
        duration: '2020 - Present',
        description: 'Leading frontend development team and mentoring junior developers.'
      },
      {
        role: 'Software Engineer',
        company: 'StartupX',
        duration: '2018 - 2020',
        description: 'Full-stack development using React and Node.js.'
      }
    ],
    education: [
      {
        degree: 'M.S. Computer Science',
        school: 'Stanford University',
        year: '2018'
      },
      {
        degree: 'B.Tech Computer Science',
        school: 'IIT Delhi',
        year: '2016'
      }
    ],
    links: {
      linkedin: 'https://linkedin.com/in/rishabh-jain',
      github: 'https://github.com/rishabh',
      website: 'https://rishabh.dev'
    }
  },
  {
    id: 2,
    name: 'Saloni Goyal',
    title: 'AI/ML Specialist',
    rating: 4.8,
    reviews: 98,
    skills: ['Machine Learning', 'TensorFlow', 'Data Science'],
    expertiseLevel: 'Advanced',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    available: true,
    bio: 'AI/ML specialist with expertise in deep learning and data science. Passionate about mentoring aspiring data scientists.',
    experience: [
      {
        role: 'AI Research Scientist',
        company: 'AI Labs',
        duration: '2019 - Present',
        description: 'Leading research in deep learning and computer vision.'
      }
    ],
    education: [
      {
        degree: 'Ph.D. Machine Learning',
        school: 'MIT',
        year: '2019'
      }
    ],
    links: {
      linkedin: 'https://linkedin.com/in/saloni',
      github: 'https://github.com/saloni',
      website: 'https://saloni.ai'
    }
  },
  {
    id: 3,
    name: 'Rudra Tak',
    title: 'UX/UI Designer',
    rating: 4.7,
    reviews: 84,
    skills: ['UI/UX Design', 'Figma', 'User Research'],
    expertiseLevel: 'Intermediate',
    imageUrl: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    available: true,
    bio: 'UX/UI designer focused on creating beautiful and functional user experiences.',
    experience: [
      {
        role: 'Senior UX Designer',
        company: 'Design Studio',
        duration: '2020 - Present',
        description: 'Leading design teams and mentoring junior designers.'
      }
    ],
    education: [
      {
        degree: 'B.Des Design',
        school: 'Design Institute',
        year: '2018'
      }
    ],
    links: {
      linkedin: 'https://linkedin.com/in/rudra',
      github: 'https://github.com/rudra',
      website: 'https://rudra.design'
    }
  }
];

const expertiseLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];
const skillsList = [
  'React', 'Node.js', 'Python', 'Java', 'JavaScript', 'Machine Learning',
  'Data Science', 'Cloud Computing', 'DevOps', 'Mobile Development',
  'Web Development', 'UI/UX Design', 'Blockchain', 'AI', 'Cybersecurity'
];

function MentorSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExpertise, setSelectedExpertise] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [availableOnly, setAvailableOnly] = useState(false);
  const [showSkillsDropdown, setShowSkillsDropdown] = useState(false);

  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesExpertise = !selectedExpertise || mentor.expertiseLevel === selectedExpertise;
    const matchesSkills = selectedSkills.length === 0 || 
      selectedSkills.every(skill => mentor.skills.includes(skill));
    const matchesAvailability = !availableOnly || mentor.available;

    return matchesSearch && matchesExpertise && matchesSkills && matchesAvailability;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Find Your Mentor</h1>

      {/* Filters */}
      <div className="mb-8 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="col-span-1">
            <input
              type="text"
              placeholder="Search by name or skills..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="col-span-1">
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={selectedExpertise}
              onChange={(e) => setSelectedExpertise(e.target.value)}
            >
              <option value="">Expertise Level</option>
              {expertiseLevels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>
          <div className="col-span-1 relative">
            <button
              onClick={() => setShowSkillsDropdown(!showSkillsDropdown)}
              className="w-full p-2 border rounded-md bg-white flex justify-between items-center"
            >
              <span>{selectedSkills.length ? `${selectedSkills.length} skills selected` : 'Select Skills'}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showSkillsDropdown && (
              <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg">
                <div className="p-2">
                  {skillsList.map((skill) => (
                    <label key={skill} className="flex items-center p-2 hover:bg-gray-100">
                      <input
                        type="checkbox"
                        checked={selectedSkills.includes(skill)}
                        onChange={() => {
                          if (selectedSkills.includes(skill)) {
                            setSelectedSkills(selectedSkills.filter((s) => s !== skill));
                          } else {
                            setSelectedSkills([...selectedSkills, skill]);
                          }
                        }}
                        className="mr-2"
                      />
                      {skill}
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="col-span-1 flex items-center">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
                checked={availableOnly}
                onChange={(e) => setAvailableOnly(e.target.checked)}
              />
              <span>Available Now</span>
            </label>
          </div>
        </div>
      </div>

      {/* Mentor List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMentors.map(mentor => (
          <div key={mentor.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center space-x-4">
                <img
                  src={mentor.imageUrl}
                  alt={mentor.name}
                  className="h-16 w-16 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{mentor.name}</h3>
                  <p className="text-sm text-gray-500">{mentor.title}</p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {mentor.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(mentor.rating) ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm text-gray-600">({mentor.reviews})</span>
                </div>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <Link
                  to={`/mentor/${mentor.id}`}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  View Profile
                </Link>
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  Chat
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MentorSearch;
