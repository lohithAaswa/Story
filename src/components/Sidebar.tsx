import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  HomeIcon,
  UsersIcon,
  ChartBarIcon,
  DocumentTextIcon,
  CogIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';
import { useTheme } from '../context/ThemeContext';

const navigation = [
  { name: 'Dashboard', icon: HomeIcon, href: '/' },
  { name: 'Customers', icon: UsersIcon, href: '/customers' },
  { name: 'Analytics', icon: ChartBarIcon, href: '/analytics' },
  { name: 'Documents', icon: DocumentTextIcon, href: '/documents' },
  { name: 'Calendar', icon: CalendarIcon, href: '/calendar' },
  { name: 'Settings', icon: CogIcon, href: '/settings' },
];

const Sidebar = () => {
  const { theme } = useTheme();
  
  return (
    <motion.div
      initial={{ x: -280 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out 
        ${theme.layout === 'compact' ? 'lg:w-16' : 'lg:w-64'}
        ${theme.layout === 'minimal' ? 'bg-white/80 backdrop-blur-xl' : 'bg-white'}
        border-r border-gray-200`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex h-16 items-center justify-center px-4 border-b border-gray-200"
      >
        <h1 className={`text-xl font-bold text-${theme.color}-600 ${theme.layout === 'compact' ? 'lg:hidden' : ''}`}>
          Modern CRM
        </h1>
        {theme.layout === 'compact' && (
          <h1 className={`hidden lg:block text-xl font-bold text-${theme.color}-600`}>
            M
          </h1>
        )}
      </motion.div>
      
      <nav className="mt-6 px-4 space-y-2">
        {navigation.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <Link
              to={item.href}
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg
                ${theme.layout === 'creative' 
                  ? `hover:bg-gradient-to-r hover:from-${theme.color}-500 hover:to-${theme.color}-600 hover:text-white` 
                  : `hover:bg-${theme.color}-50 hover:text-${theme.color}-600`}
                transition-colors duration-200`}
            >
              <item.icon className={`${theme.layout === 'compact' ? 'w-6 h-6' : 'w-5 h-5 mr-3'}`} />
              {theme.layout !== 'compact' && item.name}
            </Link>
          </motion.div>
        ))}
      </nav>
    </motion.div>
  );
};

export default Sidebar;