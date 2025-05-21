import React from 'react';
import Button from '../UI/Button';
import { ArrowDown, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 pt-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            <span className="block">Hello, I'm</span>
            <span className="block text-indigo-600 dark:text-indigo-400">
              Satish Naik
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl">
            A passionate{' '}
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">
              developer
            </span>{' '}
            creating impactful digital experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={() => (window.location.href = '#projects')}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => (window.location.href = '#contact')}
            >
              Get In Touch
            </Button>
            <a
              href="/SatishNaik.pdf"
              download
              className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold shadow hover:bg-indigo-700 transition-colors text-lg"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
