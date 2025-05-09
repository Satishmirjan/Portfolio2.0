import React from 'react';
import Section from '../UI/Section';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Doctor Appointment Booking App',
    description: 'An all-in-one platform to streamline the appointment process between doctors and patients. The application supports three user roles—Admin, Doctor, and Patient—each with tailored dashboards and features.',
    image: '/images/doctors.png',
    tags: ['MERN Stack', 'Authentication & Authorization', 'Admin Panel', 'Doctor Dashboard'],
    liveUrl: 'https://prescripto-2-frontend.onrender.com/',
    githubUrl: 'https://github.com/Satishmirjan/prescripto',
  },
  {
    id: 2,
    title: 'AI Trip Planner',
    description: 'Plan your entire trip using AI! Get customized travel itineraries based on your preferences, season, and budget.',
    image: '/images/aitrip.png',
    tags: ['React', 'OpenAI API', 'Google OAuth', 'Tailwind'],
    liveUrl: 'https://planetic-y27k.vercel.app/',
    githubUrl: 'https://github.com/Satishmirjan/planetic',
  },
  {
    id: 3,
    title: 'Club Crush',
    description: 'A tool for managing college clubs—event scheduling, attendance, announcements, and member coordination.',
    image: '/images/clubmanagement.png',
    tags: ['React.js', 'Context API', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT Auth'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Satishmirjan/ClubCrush',
  },
  {
    id: 6,
    title: 'Digital Playground',
    description: 'A creative 3D web experience that showcases interactive animations, 3D components, and AI-generated images and videos using GSAP. Built to explore the fusion of motion, design, and generative media.',
    image: '/images/playground.png',
    tags: ['Three.js', 'GSAP', 'React.js', 'AI Media'],
    liveUrl: 'https://next-gen-playground.vercel.app/',
    githubUrl: 'https://github.com/Satishmirjan/NextGenPlayground',},
  
  {
    id: 5,
    title: 'Menu App',
    description: 'A simple and elegant React app that displays daily food menus, designed for hostels, PGs, or restaurants. Users can easily browse what’s being served each day.',
    image: '/images/menu.png',
    
    tags: ['React.js', 'Tailwind CSS'],
    liveUrl: 'https://restaurant-menu-satishs-projects-c8ec8fe7.vercel.app/',
    githubUrl: 'https://github.com/Satishmirjan/Restaurant-Menu',
  },
  

  {
    id: 4,
    title: 'NewsKart',
    description: 'A sleek news aggregator app that fetches news from multiple sources and organizes them by category.',
    image: 'https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'NewsAPI', 'Material UI'],
    liveUrl: 'https://newskart.vercel.app/',
    githubUrl: 'https://github.com/Satishmirjan/newskart',
  },
];

const Projects: React.FC = () => {
  return (
    <Section
      id="projects"
      title="My Projects"
      subtitle="Check out some of my recent work"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.id} hoverEffect className="flex flex-col h-full">
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full dark:bg-indigo-900 dark:text-indigo-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex space-x-3 mt-auto">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  <ExternalLink size={16} className="mr-1" />
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  <Github size={16} className="mr-1" />
                  GitHub
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button variant="outline" onClick={() => window.open('https://github.com/Satishmirjan', '_blank')}>
          View More on GitHub
        </Button>
      </div>
    </Section>
  );
};

export default Projects;