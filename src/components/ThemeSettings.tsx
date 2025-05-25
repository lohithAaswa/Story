import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeSettings: React.FC = () => {
  const { theme, setTheme, layouts, colors, fonts } = useTheme();

  return (
    <div className="fixed right-4 top-4 bg-white p-4 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-4">Theme Settings</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Layout</label>
          <select
            value={theme.layout}
            onChange={(e) => setTheme({ ...theme, layout: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            {layouts.map((layout) => (
              <option key={layout} value={layout}>
                {layout.charAt(0).toUpperCase() + layout.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Color Theme</label>
          <div className="mt-2 grid grid-cols-6 gap-2">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => setTheme({ ...theme, color })}
                className={`w-6 h-6 rounded-full bg-${color}-500 ${
                  theme.color === color ? 'ring-2 ring-offset-2 ring-gray-400' : ''
                }`}
              />
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Font</label>
          <select
            value={theme.font}
            onChange={(e) => setTheme({ ...theme, font: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            {fonts.map((font) => (
              <option key={font} value={font}>
                {font}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings