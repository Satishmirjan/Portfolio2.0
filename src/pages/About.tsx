import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-8 text-center"
          >
            About Me
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 mb-12"
          >
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">
              Who am I?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              I'm Satish Naik, a full-stack developer and Computer Science student from Karnataka, India.
              I’m passionate about leveraging technology to solve real-world problems—whether it's
              building AI-driven educational tools, smart travel planners, or streamlining student utilities.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              I've built GenAI tools that generate MCQs and learning content from textbooks, and also
              developed an AI-powered trip planner to help users design personalized itineraries in seconds.
              Beyond building, I actively organize technical seminars, hackathons, and developer meetups
              to foster collaboration and innovation in my community.
            </p>
            <p className="text-gray-300 leading-relaxed">
            I’m currently looking for remote/internship opportunities where I can contribute meaningfully,
              collaborate with passionate minds, and continue growing as a developer.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">
                Profile
              </h2>
              <ul className="space-y-4 text-gray-300">
                <li>
                  <span className="font-medium">Name:</span> Satish Naik
                </li>
                <li>
                  <span className="font-medium">Education:</span> B.E. in Computer
                  Science, JSS Science and Technology University, Mysore
                </li>
                <li>
                  <span className="font-medium">Email:</span>{' '}
                  <a
                    href="mailto:satishnda3576@gmail.com"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    satishnda3576@gmail.com
                  </a>
                </li>
                <li>
                  <span className="font-medium">Phone:</span>{' '}
                  <a
                    href="tel:+917483160556"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    +91 74831 60556
                  </a>
                </li>
                <li>
                  <span className="font-medium">Location:</span> Mysore, India
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">
                Interests
              </h2>
              <ul className="space-y-4 text-gray-300">
                <li>• Building GenAI tools for education</li>
                <li>• Developing AI-based travel and utility apps</li>
                <li>• Organizing tech fests, seminars & hackathons</li>
                <li>• Solving local and civic challenges through code</li>
                <li>• Collaborating with passionate developers</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
