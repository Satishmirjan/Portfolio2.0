import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import About from '../components/Home/About';
import Projects from '../components/Home/Projects';
import Skills from '../components/Skills';
import Gallery from '../components/Home/Gallery';
import Contact from '../components/Home/Contact';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Sphere args={[1, 100, 200]} scale={2.5}>
              <meshStandardMaterial
                color="#3B82F6"
                wireframe
                transparent
                opacity={0.5}
              />
            </Sphere>
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Hello, I'm{' '}
              <span className="text-blue-400">Satish Naik</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              A passionate developer creating impactful digital experiences
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
              >
                <span>View My Work</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg transition-colors"
              >
                Get In Touch
              </Link>
              <a
                href="/SatishNaik.pdf"
                download
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project cards will be added here */}
          </div>
        </div>
      </section>

      <About />
      <Projects />
      <Skills />
      <Gallery />
      <Contact />
    </div>
  );
};

export default Home;