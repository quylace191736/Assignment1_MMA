/**
 * Assignment 1 - MMA301
 * Author: Lâm Anh Quý - CE191736
 * File: storage.js
 * Description: Helper functions for loading and saving data to AsyncStorage.
 */

import AsyncStorage from '@react-native-async-storage/async-storage';

const PROFILE_KEY = '@app_profile_data';
const THEME_KEY = '@app_theme_mode';

export const DEFAULT_PROFILE = {
    name: 'Lâm Anh Quý',
    bio: 'MSSV: CE191736 - Software Engineering',
    avatar: 'https://picsum.photos/200',
};

export const saveProfileToStorage = async (profile) => {
    try {
        const jsonValue = JSON.stringify(profile);
        await AsyncStorage.setItem(PROFILE_KEY, jsonValue);
    } catch (e) {
        console.error('Error saving profile data:', e);
    }
};

export const loadProfileFromStorage = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem(PROFILE_KEY);
        return jsonValue != null ? JSON.parse(jsonValue) : DEFAULT_PROFILE;
    } catch (e) {
        console.error('Error loading profile data, using default:', e);
        return DEFAULT_PROFILE;
    }
};

export const saveThemeToStorage = async (isDark) => {
    try {
        await AsyncStorage.setItem(THEME_KEY, JSON.stringify(isDark));
    } catch (e) {
        console.error('Error saving theme preference:', e);
    }
};

export const loadThemeFromStorage = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem(THEME_KEY);
        return jsonValue != null ? JSON.parse(jsonValue) : false;
    } catch (e) {
        console.error('Error loading theme preference:', e);
        return false;
    }
};