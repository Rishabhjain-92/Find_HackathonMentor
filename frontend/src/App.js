import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Hackathons from './components/Hackathons';
import FindMentor from './components/FindMentor';
import BecomeMentor from './components/BecomeMentor';
import MentorProfile from './components/MentorProfile';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import SignUp from './components/SignUp';
import FeedbackList from './components/FeedbackList';
import Footer from './components/Footer';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/find-mentor" element={<FindMentor />} />
                <Route path="/mentor/:id" element={<MentorProfile />} />
                <Route path="/become-mentor" element={<BecomeMentor />} />
                <Route path="/hackathons" element={<Hackathons />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/feedback" element={<><FeedbackList /></>} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Suspense>
      </Router>
    </AuthProvider>
  );
}

export default App;
