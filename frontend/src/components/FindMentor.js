import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaComments } from 'react-icons/fa';

// Export mentors array
export const mentors = [
  {
    id: 1,
    name: "Rishabh Jain",
    title: "Senior Software Engineer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    skills: ["React", "Node.js", "Python"],
    rating: 4.9,
    reviewCount: 127,
    available: true,
    expertiseLevel: "Advanced",
    bio: "Senior software engineer with 8+ years of experience in full-stack development. Passionate about mentoring and building scalable applications.",
    linkedin: "https://www.linkedin.com/in/rishabhjain",
    profilePicture: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    website: "https://rishabhjain.dev",
    achievements: "Built several successful applications, mentored over 50 students."
  },
  {
    id: 2,
    name: "Saloni Goyal",
    title: "Machine Learning Engineer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    skills: ["Machine Learning", "Python", "TensorFlow", "Deep Learning"],
    rating: 4.8,
    reviewCount: 98,
    available: true,
    expertiseLevel: "Intermediate",
    bio: "Machine learning expert specializing in deep learning and computer vision. Passionate about making AI accessible to everyone.",
    linkedin: "https://www.linkedin.com/in/salonigoyal",
    profilePicture: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    website: "https://salonigoyal.dev",
    achievements: "Published research papers in top-tier journals."
  },
  {
    id: 3,
    name: "Rudra Tak",
    title: "Cloud Solutions Architect",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    skills: ["AWS", "Azure", "DevOps", "Kubernetes"],
    rating: 4.9,
    reviewCount: 156,
    available: true,
    expertiseLevel: "Advanced",
    bio: "Cloud architect with expertise in AWS and Azure. Helping teams build scalable and secure cloud infrastructure.",
    linkedin: "https://www.linkedin.com/in/rudratak",
    profilePicture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    website: "https://rudratak.dev",
    achievements: "Designed cloud solutions for Fortune 500 companies."
  },
  {
    id: 4,
    name: "Riya",
    title: "UX/UI Designer",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    skills: ["UI Design", "Figma", "User Research", "Prototyping"],
    rating: 5.0,
    reviewCount: 89,
    available: true,
    expertiseLevel: "Advanced",
    bio: "UX/UI designer focused on creating beautiful and intuitive user experiences. Expert in Figma and design systems.",
    linkedin: "https://www.linkedin.com/in/riya",
    profilePicture: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    website: "https://riya.dev",
    achievements: "Designed user interfaces for several successful startups."
  },
  {
    id: 5,
    name: "Sachin Kumar",
    title: "Mobile App Developer",
    image: "https://images.unsplash.com/photo-1519341905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    skills: ["React Native", "iOS", "Android", "Flutter"],
    rating: 4.7,
    reviewCount: 112,
    available: false,
    expertiseLevel: "Beginner",
    bio: "Mobile developer with expertise in React Native and Flutter. Building cross-platform apps that users love.",
    linkedin: "https://www.linkedin.com/in/sachinkumar",
    profilePicture: "https://images.unsplash.com/photo-1519341905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    website: "https://sachinkumar.dev",
    achievements: "Built several successful mobile applications."
  },
  {
    id: 6,
    name: "Aisha Patel",
    title: "Data Scientist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    skills: ["Data Science", "Python", "SQL", "Machine Learning"],
    rating: 4.8,
    reviewCount: 94,
    available: true,
    expertiseLevel: "Intermediate",
    bio: "Data scientist turning complex data into actionable insights. Expert in predictive modeling and data visualization.",
    linkedin: "https://www.linkedin.com/in/aishapatel",
    profilePicture: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    website: "https://aishapatel.dev",
    achievements: "Published research papers in top-tier journals."
  },
  {
    id: 7,
    name: "Raj Verma",
    title: "Blockchain Developer",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    skills: ["Blockchain", "Solidity", "Smart Contracts", "Web3"],
    rating: 4.9,
    reviewCount: 78,
    available: true,
    expertiseLevel: "Advanced",
    bio: "Blockchain developer specializing in DeFi and NFT projects. Building the future of decentralized applications.",
    linkedin: "https://www.linkedin.com/in/rajverma",
    profilePicture: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    website: "https://rajverma.dev",
    achievements: "Built several successful blockchain applications."
  },
  {
    id: 8,
    name: "Maya Singh",
    title: "Game Developer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    skills: ["Unity", "C#", "Game Design", "3D Modeling"],
    rating: 4.7,
    reviewCount: 86,
    available: true,
    expertiseLevel: "Intermediate",
    bio: "Game developer with a passion for creating immersive experiences. Expert in Unity and game design principles.",
    linkedin: "https://www.linkedin.com/in/mayasinha",
    profilePicture: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    website: "https://mayasingh.dev",
    achievements: "Built several successful games."
  },
  {
    id: 9,
    name: "Arjun Mehta",
    title: "DevOps Engineer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    skills: ["DevOps", "Docker", "Jenkins", "GitLab CI"],
    rating: 4.8,
    reviewCount: 103,
    available: false,
    expertiseLevel: "Beginner",
    bio: "DevOps engineer focused on automating development workflows and improving deployment processes.",
    linkedin: "https://www.linkedin.com/in/arjunmehta",
    profilePicture: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    website: "https://arjunmehta.dev",
    achievements: "Improved deployment processes for several companies."
  },
  {
    id: 10,
    name: "Neha Sharma",
    title: "Security Engineer",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    skills: ["Cybersecurity", "Penetration Testing", "Security Auditing"],
    rating: 4.9,
    reviewCount: 91,
    available: true,
    expertiseLevel: "Advanced",
    bio: "Security expert specializing in application security and penetration testing. Keeping systems safe and secure.",
    linkedin: "https://www.linkedin.com/in/nehasharma",
    profilePicture: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    website: "https://nehasharma.dev",
    achievements: "Improved security for several companies."
  },
  {
    id: 11,
    name: "Vikram Singh",
    title: "AR/VR Developer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    skills: ["Unity", "AR", "VR", "3D Development"],
    rating: 4.8,
    reviewCount: 82,
    available: true,
    expertiseLevel: "Intermediate",
    bio: "AR/VR developer creating immersive experiences. Expert in spatial computing and interactive design.",
    linkedin: "https://www.linkedin.com/in/vikramsingh",
    profilePicture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    website: "https://vikramsingh.dev",
    achievements: "Built several successful AR/VR applications."
  },
  {
    id: 12,
    name: "Priya Reddy",
    title: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    skills: ["JavaScript", "Vue.js", "Node.js", "MongoDB"],
    rating: 4.7,
    reviewCount: 115,
    available: true,
    expertiseLevel: "Advanced",
    bio: "Full stack developer with expertise in Vue.js and Node.js. Building modern web applications with clean architecture.",
    linkedin: "https://www.linkedin.com/in/priyareddy",
    profilePicture: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    website: "https://priyareddy.dev",
    achievements: "Built several successful web applications."
  },
  {
    id: 13,
    name: "Karthik Kumar",
    title: "IoT Developer",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    skills: ["IoT", "Embedded Systems", "Python", "MQTT"],
    rating: 4.8,
    reviewCount: 76,
    available: false,
    expertiseLevel: "Beginner",
    bio: "IoT developer connecting the physical and digital worlds. Expert in embedded systems and sensor networks.",
    linkedin: "https://www.linkedin.com/in/karthikkumar",
    profilePicture: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    website: "https://karthikkumar.dev",
    achievements: "Improved IoT solutions for several companies."
  },
  {
    id: 14,
    name: "Ananya Gupta",
    title: "Data Engineer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    skills: ["Apache Spark", "Python", "SQL", "Data Pipelines"],
    rating: 4.9,
    reviewCount: 88,
    available: true,
    expertiseLevel: "Advanced",
    bio: "Data engineer building robust and scalable data pipelines. Expert in big data technologies and ETL processes.",
    linkedin: "https://www.linkedin.com/in/ananyagupta",
    profilePicture: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    website: "https://ananyagupta.dev",
    achievements: "Improved data pipelines for several companies."
  },
  {
    id: 15,
    name: "Rohan Kapoor",
    title: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    rating: 4.8,
    reviewCount: 97,
    available: true,
    expertiseLevel: "Advanced",
    bio: "Frontend developer creating beautiful and performant web applications. Expert in React and modern JavaScript.",
    linkedin: "https://www.linkedin.com/in/rohankapoor",
    profilePicture: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    website: "https://rohankapoor.dev",
    achievements: "Built several successful web applications."
  }
];

const FindMentor = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [skillSearchTerm, setSkillSearchTerm] = useState('');
  const [expertiseLevel, setExpertiseLevel] = useState('');
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);

  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentor.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSkills = skillSearchTerm === '' || 
                         mentor.skills.some(skill => 
                           skill.toLowerCase().includes(skillSearchTerm.toLowerCase())
                         );
    const matchesExpertise = expertiseLevel === '' || mentor.expertiseLevel === expertiseLevel;
    const matchesAvailability = !showAvailableOnly || mentor.available;
    
    return matchesSearch && matchesSkills && matchesExpertise && matchesAvailability;
  });

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gradient-to-r from-blue-200 to-blue-500 border-4 border-blue-600 rounded-lg">
        <h2 className="text-5xl font-bold text-center mb-4">Find Your Mentor</h2>
        <div className="mb-4 flex flex-col md:flex-row gap-4">
          {/* Name/Title Search */}
          <div className="flex-1 relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Skills Search */}
          <div className="flex-1 relative">
            <select
              value={skillSearchTerm}
              onChange={(e) => setSkillSearchTerm(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
            >
              <option value="">Select Skill</option>
              <option value="React">React</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
              <option value="Java">Java</option>
              <option value="C++">C++</option>
            </select>
          </div>

          {/* Expertise Level Dropdown */}
          <div className="flex-1 relative">
            <select
              value={expertiseLevel}
              onChange={(e) => setExpertiseLevel(e.target.value)}
              className="w-full border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Expertise Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          {/* Availability Toggle */}
          <label className="flex items-center gap-2 whitespace-nowrap">
            <input
              type="checkbox"
              checked={showAvailableOnly}
              onChange={(e) => setShowAvailableOnly(e.target.checked)}
              className="rounded text-blue-600 focus:ring-blue-500"
            />
            <span>Available Only</span>
          </label>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMentors.map(mentor => (
            <div key={mentor.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{mentor.name}</h3>
                    <p className="text-gray-600">{mentor.title}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-sm ${i < Math.floor(mentor.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                        >
                          ★
                        </span>
                      ))}
                      <span className="ml-1 text-sm text-gray-600">({mentor.reviewCount})</span>
                    </div>
                  </div>
                  {mentor.available ? (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      Available
                    </span>
                  ) : (
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                      Unavailable
                    </span>
                  )}
                </div>
                <p className="mt-4 text-sm text-gray-600 line-clamp-2">{mentor.bio}</p>
                <div className="mt-4">
                  <div className="flex flex-wrap gap-2 overflow-y-auto max-h-20">
                    {mentor.skills.map(skill => (
                      <span
                        key={skill}
                        className="bg-gray-100 px-2 py-1 rounded-md text-sm text-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex gap-3">
                  <Link
                    to={`/mentor/${mentor.id}`}
                    className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                  >
                    View Profile
                  </Link>
                  <Link
                    to={`/mentor/${mentor.id}?tab=chat`}
                    className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200 group"
                    title="Start Chat"
                  >
                    <FaComments className="text-gray-600 group-hover:text-blue-600 text-base" />
                  </Link>
                </div>
                <div className="mt-6">
                  <p className="text-sm text-gray-600">LinkedIn: <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer">{mentor.linkedin}</a></p>
                  <p className="text-sm text-gray-600">Website: <a href={mentor.website} target="_blank" rel="noopener noreferrer">{mentor.website}</a></p>
                  <p className="text-sm text-gray-600">Achievements: {mentor.achievements}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindMentor;
