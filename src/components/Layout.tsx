import React from 'react';
import Sidebar from './Sidebar';
import ThemeSettings from './ThemeSettings';
import { useTheme } from '../context/ThemeContext';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen bg-gray-50 ${theme.font}`}>
      <Sidebar />
      <div className="lg:pl-64">
        <main className="py-8 px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
      <ThemeSettings />
    </div>
  );
};

export default Layout