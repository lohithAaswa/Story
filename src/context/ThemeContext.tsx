import React, { createContext, useContext, useState } from 'react';

type Theme = {
  layout: string;
  color: string;
  font: string;
};

const layouts = [
  'modern',
  'classic',
  'minimal',
  'compact',
  'professional',
  'creative'
];

const colors = [
  'blue',
  'purple',
  'teal',
  'green',
  'orange',
  'red'
];

const fonts = [
  'Inter',
  'Manrope',
  'Public Sans',
  'Open Sans',
  'Roboto',
  'Lato',
  'Poppins',
  'SF Pro Display',
  'Helvetica Now',
  'Proxima Nova'
];

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  layouts: string[];
  colors: string[];
  fonts: string[];
};

const ThemeContext = createContext<ThemeContextType>({
  theme: { layout: 'modern', color: 'blue', font: 'Inter' },
  setTheme: () => {},
  layouts,
  colors,
  fonts
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>({
    layout: 'modern',
    color: 'blue',
    font: 'Inter'
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme, layouts, colors, fonts }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);