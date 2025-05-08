import React from 'react';
import Section from './UI/Section';

interface Skill {
  category: string;
  items: string[];
}

const skills: Skill[] = [
  {
    category: 'Development',
    items: ['HTML/CSS', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Django'],
  },
  {
    category: 'Programming Languages',
    items: ['C', 'C++', 'Java', 'Python', 'Bash'],
  },
  {
    category: 'Design',
    items: ['UI/UX Design', 'Figma', 'Responsive Design', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Other',
    items: ['Git', 'Firebase', 'Docker', 'JWT Auth', 'Context API', 'Linux', 'REST APIs'],
  },
];


const Skills: React.FC = () => {
  return (
    <Section
      id="skills"
      title="My Skills"
      subtitle="Technologies and tools I work with"
      className="bg-gray-50 dark:bg-gray-800"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="text-xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">
              {skill.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;