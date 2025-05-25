import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Dashboard: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`space-y-6 ${theme.color}`}>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Welcome back!</h2>
        <p className="text-gray-600">Your CRM dashboard content will appear here.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sample Cards */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium text-gray-900">Total Customers</h3>
          <p className="text-3xl font-bold mt-2">1,234</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium text-gray-900">Active Deals</h3>
          <p className="text-3xl font-bold mt-2">56</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium text-gray-900">Revenue</h3>
          <p className="text-3xl font-bold mt-2">$45,678</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard