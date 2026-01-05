import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import amalAppImg from '../assets/images/Amal App.jpg';
import feelProImg from '../assets/images/FeelPRO.jpg';
import guessChatImg from '../assets/images/Gues Chat.jpg';
import kidsSchoolImg from '../assets/images/Kids School.jpg';
import kidsDrawingImg from '../assets/images/Kids Drawing.jpg';
import review2025Img from '../assets/images/Review 2025.jpg';

const projects = [
  {
    id: 1,
    name: "Amal APP",
    category: "Productivity & Tools",
    image: amalAppImg,
    slug: "amal-app"
  },
  {
    id: 2,
    name: "Feel PRO",
    category: "Health & Wellness",
    image: feelProImg,
    slug: "feel-pro"
  },
  {
    id: 3,
    name: "Guess Chat",
    category: "Social & Gaming",
    image: guessChatImg,
    slug: "guess-chat"
  },
  {
    id: 4,
    name: "Kids School",
    category: "Educational App",
    image: kidsSchoolImg,
    slug: "kids-school"
  },
  {
    id: 5,
    name: "Kids Drawing",
    category: "Creative & Learning",
    image: kidsDrawingImg,
    slug: "kids-drawing"
  },
  {
    id: 6,
    name: "Review 2025",
    category: "Business & Reviews",
    image: review2025Img,
    slug: "review-2025"
  }
];

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);
  const initialCount = 4;
  const displayedProjects = showAll ? projects : projects.slice(0, initialCount);

  return (
    <section id="work" className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">We Build.</h2>
            <p className="text-zinc-500 dark:text-zinc-400">Selected work & experiments.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {displayedProjects.map((project) => (
            <Link to={`/project/${project.slug}`} key={project.id} className="group cursor-pointer block">
              <div className="relative overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 aspect-[16/9] mb-4 sm:mb-6">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10 duration-500" />
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  <span className="px-6 py-3 bg-white dark:bg-white text-black rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    View In Detail <ArrowUpRight size={18} />
                  </span>
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-1">{project.name}</h3>
                  <p className="text-zinc-500 dark:text-zinc-400">{project.category}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {projects.length > initialCount && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300"
            >
              {showAll ? 'Show Less' : 'See More'}
              <ChevronDown 
                size={20} 
                className={`transform transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
