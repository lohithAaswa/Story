import React from 'react';
import { motion } from 'framer-motion';
import Sidebar from './Sidebar';
import ThemeSettings from './ThemeSettings';
import { useTheme } from '../context/ThemeContext';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useTheme();

  const getLayoutClasses = () => {
    switch (theme.layout) {
      case 'modern':
        return 'bg-gray-50';
      case 'classic':
        return 'bg-white';
      case 'minimal':
        return 'bg-gray-100';
      case 'compact':
        return 'bg-gray-50';
      case 'professional':
        return 'bg-slate-50';
      case 'creative':
        return 'bg-gradient-to-br from-gray-50 to-gray-100';
      default:
        return 'bg-gray-50';
    }
  };

  return (
    <div className={`min-h-screen ${getLayoutClasses()} ${theme.font}`}>
      <Sidebar />
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className={`${theme.layout === 'compact' ? 'lg:ml-16' : 'lg:ml-64'} transition-all duration-300`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className={`
              ${theme.layout === 'modern' ? 'rounded-xl bg-white shadow-sm p-6' : ''}
              ${theme.layout === 'classic' ? 'bg-white shadow-md rounded-lg p-8' : ''}
              ${theme.layout === 'minimal' ? 'bg-transparent' : ''}
              ${theme.layout === 'compact' ? 'bg-white rounded-lg shadow-lg p-4' : ''}
              ${theme.layout === 'professional' ? 'bg-white rounded-xl shadow-xl p-6' : ''}
              ${theme.layout === 'creative' ? 'bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg p-8' : ''}
            `}
          >
            {children}
          </motion.div>
        </div>
      </motion.div>
      <ThemeSettings />
    </div>
  );
};

export default Layout