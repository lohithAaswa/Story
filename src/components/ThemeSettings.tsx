import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Cog6ToothIcon } from '@heroicons/react/24/outline';

const ThemeSettings: React.FC = () => {
  const { theme, setTheme, layouts, colors, fonts } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed right-4 top-4 p-2 rounded-lg bg-${theme.color}-500 text-white shadow-lg hover:bg-${theme.color}-600 transition-colors duration-200`}
      >
        <Cog6ToothIcon className="h-6 w-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed right-4 top-16 w-80 bg-white rounded-lg shadow-xl p-6 border border-gray-200"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Theme Settings</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Layout Style
                </label>
                <select
                  value={theme.layout}
                  onChange={(e) => setTheme({ ...theme, layout: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                  {layouts.map((layout) => (
                    <option key={layout} value={layout}>
                      {layout.charAt(0).toUpperCase() + layout.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Color Theme
                </label>
                <div className="grid grid-cols-6 gap-2">
                  {colors.map((color) => (
                    <motion.button
                      key={color}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setTheme({ ...theme, color })}
                      className={`w-8 h-8 rounded-full bg-${color}-500 
                        ${theme.color === color ? 'ring-2 ring-offset-2 ring-gray-400' : ''}
                        hover:ring-2 hover:ring-offset-2 hover:ring-gray-300 transition-all duration-200`}
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Font Family
                </label>
                <select
                  value={theme.font}
                  onChange={(e) => setTheme({ ...theme, font: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                  {fonts.map((font) => (
                    <option key={font} value={font}>
                      {font}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500">
                Changes are applied immediately and saved to your preferences.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};