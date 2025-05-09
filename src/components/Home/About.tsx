import React from 'react';
import Section from '../UI/Section';

const About: React.FC = () => {
  return (
    <Section
  id="about"
  title="About Me"
  subtitle="Get to know more about me and my background"
  className="bg-gray-50 dark:bg-gray-800"
>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <div className="order-2 lg:order-1">
      <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        Who am I?
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
        I'm a passionate full-stack developer from Karnataka, currently pursuing my Bachelor's in Computer Science Engineering at JSS Science and Technology University, Mysore. I specialize in turning ideas into practical, user-friendly digital solutions that address real-life challenges—especially those commonly faced in college and hostel environments.
      </p>
      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
        From streamlining food management systems in hostels to building AI-powered educational tools, my projects are rooted in real-world needs. I’ve also worked on civic tech initiatives and automation tools that bring measurable value to users.
      </p>
      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
        What sets me apart is my ability to deeply understand a problem, break it down, and build efficient, scalable apps with clean UX. I actively participate in hackathons, contribute to open-source projects, and lead tech events and workshops—always staying curious and committed to learning.
      </p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        If you're looking for someone who codes with purpose, learns fast, and thrives in a collaborative, problem-solving environment—I'm your guy.
      </p>
    </div>
    <div className="order-1 lg:order-2 flex justify-center">
      <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
        <img
          src="/images/profile.jpg"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</Section>

  );
};

export default About;