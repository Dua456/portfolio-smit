import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Theme Context
const ThemeContext = createContext();

// Theme Reducer
const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light'
      };
    case 'SET_THEME':
      return {
        ...state,
        theme: action.payload
      };
    default:
      return state;
  }
};

// Theme Provider Component
export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, {
    theme: 'light'
  });

  // Load theme from memory on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('app-theme') || 'light';
    dispatch({ type: 'SET_THEME', payload: savedTheme });
  }, []);

  // Save theme to memory and update document class
  useEffect(() => {
    localStorage.setItem('app-theme', state.theme);
    if (state.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [state.theme]);

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  const setTheme = (theme) => {
    dispatch({ type: 'SET_THEME', payload: theme });
  };

  return (
    <ThemeContext.Provider value={{ theme: state.theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook to use theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};