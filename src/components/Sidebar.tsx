import React from 'react';
import { Link } from 'react-router-dom';
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
    <div className={`fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out 
      ${theme.layout === 'compact' ? 'lg:translate-x-0 -translate-x-full' : 'translate-x-0'}
      ${theme.layout === 'minimal' ? 'bg-white/80 backdrop-blur-xl' : 'bg-white'}
      border-r border-gray-200`}>
      <div className="flex h-16 items-center justify-center px-4 border-b border-gray-200">
        <h1 className={`text-xl font-bold text-${theme.color}-600`}>Modern CRM</h1>
      </div>
      
      <nav className="mt-6 px-4 space-y-2">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg
              ${theme.layout === 'creative' ? 'hover:bg-gradient-to-r hover:from-${theme.color}-500 hover:to-${theme.color}-600 hover:text-white' :
              `hover:bg-${theme.color}-50 hover:text-${theme.color}-600`}
              transition-colors duration-200`}
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;