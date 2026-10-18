/**
 * Assignment 1 - MMA301
 * Author: Lâm Anh Quý - CE191736
 * File: ThemeContext.js
 * Description: Context provider for handling light/dark theme toggle and color palette.
 */

import React, { createContext, useState, useEffect } from 'react';
import { loadThemeFromStorage, saveThemeToStorage } from '../utils/storage';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        loadThemeFromStorage().then((savedTheme) => setIsDarkMode(savedTheme));
    }, []);

    const toggleTheme = () => {
        setIsDarkMode((prev) => {
            const newTheme = !prev;
            saveThemeToStorage(newTheme);
            return newTheme;
        });
    };

    const themeColors = {
        background: isDarkMode ? '#121212' : '#F5F5F5',
        card: isDarkMode ? '#1E1E1E' : '#FFFFFF',
        text: isDarkMode ? '#FFFFFF' : '#333333',
        subText: isDarkMode ? '#AAAAAA' : '#666666',
        primary: '#007AFF',
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme, themeColors }}>
            {children}
        </ThemeContext.Provider>
    );
};