/**
 * Assignment 1 - MMA301
 * Author: Lâm Anh Quý - CE191736
 * File: ProfileContext.js
 * Description: Context provider for managing user profile state and persistence.
 */

import React, { createContext, useState, useEffect } from 'react';
import { loadProfileFromStorage, saveProfileToStorage, DEFAULT_PROFILE } from '../utils/storage';

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
    const [profile, setProfile] = useState(DEFAULT_PROFILE);

    useEffect(() => {
        loadProfileFromStorage().then((data) => setProfile(data));
    }, []);

    const updateProfile = async (newProfile) => {
        setProfile(newProfile);
        await saveProfileToStorage(newProfile);
    };

    return (
        <ProfileContext.Provider value={{ profile, updateProfile }}>
            {children}
        </ProfileContext.Provider>
    );
};