import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft, Headphones } from 'lucide-react';

const projects = {
  "amal-app": {
    name: "Amal APP",
    description: "A comprehensive productivity and tools application designed to streamline your daily tasks and boost efficiency. Amal APP combines powerful features with an intuitive interface to help you stay organized and productive throughout your day.",
    image: '/assets/Detail%20Page%20Images/Amal%20App%20Detail%20page.jpg',
    features: ["Task Management", "Smart Reminders", "Calendar Integration", "Cloud Sync", "Multi-device Support"],
    stack: ["React Native", "Redux", "Firebase", "Node.js"]
  },
  "feel-pro": {
    name: "Feel PRO",
    description: "Your personal health and wellness companion that helps you track your mood, meditation sessions, and mental well-being. Feel PRO provides guided exercises, mindfulness techniques, and personalized insights to improve your emotional health.",
    image: '/assets/Detail%20Page%20Images/FeelPRO%20Detail%20Page.jpg',
    features: ["Mood Tracking", "Guided Meditation", "Wellness Analytics", "Daily Affirmations", "Progress Reports"],
    stack: ["Flutter", "Firebase", "HealthKit", "Core Data"]
  },
  "guess-chat": {
    name: "Guess Chat",
    description: "A fun and interactive social gaming app where friends challenge each other with exciting questions and climb the leaderboard together. Guess & Chat combines social networking with trivia gaming for an engaging experience.",
    image: '/assets/Detail%20Page%20Images/Gues%20Chat%20Detail%20page.jpg',
    features: ["Real-time Multiplayer", "Leaderboard System", "Community Challenges", "Friend Invites"],
    stack: ["React Native", "Firebase", "Node.js", "Socket.io"]
  },
  "kids-school": {
    name: "Kids School",
    description: "An educational app designed for young learners to master alphabets, numbers, shapes, and more in both English and Urdu. Interactive lessons make learning fun and engaging for kids.",
    image: '/assets/Detail%20Page%20Images/Kids%20School%20Detail%20page.jpg',
    features: ["English Alphabets", "Urdu Haroof", "Numbers 1-100", "Shapes & Colors", "Interactive Quizzes"],
    stack: ["Flutter", "Firebase", "Dart", "Adobe Illustrator"]
  },
  "kids-drawing": {
    name: "Kids Drawing",
    description: "This app gives kids a fun space to draw and color. It helps them turn imagination into creative artwork with daily challenges, free drawing mode, and a personal gallery to save their masterpieces.",
    image: '/assets/Detail%20Page%20Images/Kids%20Drawing%20Detail%20pgae.jpg',
    features: ["Free Draw Mode", "Daily Challenges", "Color Palette", "Gallery & Sharing", "Drawing Tools"],
    stack: ["React Native", "Canvas API", "AsyncStorage", "Expo"]
  },
  "review-2025": {
    name: "Review 2025",
    description: "A modern business review platform that helps customers share their experiences and businesses manage their online reputation. Review 2025 makes it easy to collect, display, and respond to customer feedback with powerful analytics and insights.",
    image: '/assets/Detail%20Page%20Images/Review%202025%20Detail%20page.jpg',
    features: ["Customer Reviews", "Rating System", "Business Analytics", "Review Management", "Response Tools"],
    stack: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"]
  }
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects[slug];

  if (!project) {
    return <div className="min-h-screen flex items-center justify-center text-black dark:text-white bg-white dark:bg-black">Project not found</div>;
  }

  return (
    <div className="bg-white dark:bg-black min-h-screen text-black dark:text-white">
      <Header />
      
      <main className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 container mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-sm sm:text-base text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white mb-6 sm:mb-8 transition-colors">
          <ArrowLeft size={18} className="sm:w-5 sm:h-5" /> Back to Home
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12 md:mb-16">
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">{project.name}</h1>
            <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 sm:mb-8">
              {project.description}
            </p>
            
            <div className="mb-6 sm:mb-8">
              <h3 className="text-sm sm:text-base md:text-lg font-bold mb-3 sm:mb-4 uppercase tracking-wider text-zinc-500">Key Features</h3>
              <ul className="space-y-2 text-sm sm:text-base">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 sm:gap-3">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6 sm:mb-8">
               <h3 className="text-sm sm:text-base md:text-lg font-bold mb-3 sm:mb-4 uppercase tracking-wider text-zinc-500">Tech Stack</h3>
               <div className="flex flex-wrap gap-2 sm:gap-3">
                 {project.stack.map((tech, i) => (
                   <span key={i} className="px-3 py-1.5 sm:px-4 sm:py-2 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full text-xs sm:text-sm">
                     {tech}
                   </span>
                 ))}
               </div>
            </div>

            {/* Support CTA */}
            <Link 
              to={`/support/${slug}`}
              className="inline-flex items-center gap-2 sm:gap-3 px-5 py-3 sm:px-6 sm:py-4 bg-black dark:bg-white text-white dark:text-black rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base hover:scale-105 transition-transform duration-300"
            >
              <Headphones className="w-4 h-4 sm:w-5 sm:h-5" />
              Get Support
            </Link>
          </div>
          
          <div className="order-1 lg:order-2 rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
            <img src={project.image} alt={project.name} className="w-full h-auto block" />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
