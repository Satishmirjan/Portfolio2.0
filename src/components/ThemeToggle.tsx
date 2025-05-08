import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-8 right-8 p-4 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-lg z-50 hover:shadow-xl transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 180 : 0,
          scale: theme === 'dark' ? 1 : 0.8,
        }}
        transition={spring}
      >
        {theme === 'dark' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={spring}
          >
            <Sun className="w-6 h-6" />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={spring}
          >
            <Moon className="w-6 h-6" />
          </motion.div>
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle; 