import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import {
  UserGroupIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

const Dashboard: React.FC = () => {
  const { theme } = useTheme();

  const stats = [
    { name: 'Total Customers', value: '1,234', icon: UserGroupIcon },
    { name: 'Active Deals', value: '56', icon: ChartBarIcon },
    { name: 'Revenue', value: '$45,678', icon: CurrencyDollarIcon },
    { name: 'Documents', value: '89', icon: DocumentTextIcon },
  ];

  const getCardClasses = () => {
    switch (theme.layout) {
      case 'modern':
        return 'bg-white rounded-lg shadow-sm p-6';
      case 'classic':
        return 'bg-white rounded-md shadow p-6';
      case 'minimal':
        return 'bg-white/80 backdrop-blur-sm rounded-lg p-6';
      case 'compact':
        return 'bg-white rounded-lg shadow-md p-4';
      case 'professional':
        return 'bg-white rounded-xl shadow-lg p-6';
      case 'creative':
        return 'bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8';
      default:
        return 'bg-white rounded-lg shadow-sm p-6';
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-8"
    >
      <motion.div variants={item} className={`${getCardClasses()}`}>
        <h2 className={`text-2xl font-semibold text-${theme.color}-600 mb-4`}>
          Welcome back!
        </h2>
        <p className="text-gray-600">
          Track your CRM metrics and manage customer relationships efficiently.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <motion.div
            key={stat.name}
            variants={item}
            whileHover={{ scale: 1.02 }}
            className={`${getCardClasses()} transform transition-all duration-200`}
          >
            <div className="flex items-center">
              <div className={`p-3 rounded-lg bg-${theme.color}-100`}>
                <stat.icon className={`h-6 w-6 text-${theme.color}-600`} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className={`text-2xl font-semibold text-${theme.color}-600`}>
                  {stat.value}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div variants={item} className={`${getCardClasses()}`}>
          <h3 className={`text-lg font-semibold text-${theme.color}-600 mb-4`}>
            Recent Activities
          </h3>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: item * 0.1 }}
                className="flex items-center py-2 border-b border-gray-100"
              >
                <div className={`w-2 h-2 rounded-full bg-${theme.color}-500 mr-3`} />
                <div>
                  <p className="text-sm font-medium">New customer signed up</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={item} className={`${getCardClasses()}`}>
          <h3 className={`text-lg font-semibold text-${theme.color}-600 mb-4`}>
            Upcoming Tasks
          </h3>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: item * 0.1 }}
                className="flex items-center justify-between py-2 border-b border-gray-100"
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className={`rounded border-gray-300 text-${theme.color}-600 focus:ring-${theme.color}-500`}
                  />
                  <span className="ml-3 text-sm">Follow up with Client #{item}</span>
                </div>
                <span className="text-xs text-gray-500">Tomorrow</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Dashboard;