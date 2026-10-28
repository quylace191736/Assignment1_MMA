/**
 * Assignment 1 - MMA301
 * Author: Lâm Anh Quý - CE191736
 * File: App.js
 * Description: Main application entry point with navigation setup and providers.
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ThemeProvider, ThemeContext } from './src/context/ThemeContext';
import { ProfileProvider } from './src/context/ProfileContext';

import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import EditProfileScreen from './src/screens/EditProfileScreen';
import ActivityScreen from './src/screens/ActivityScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Stack = createNativeStackNavigator();

function AppNavigator() {
    const { themeColors } = React.useContext(ThemeContext);

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: themeColors.card },
                    headerTintColor: themeColors.text,
                    contentStyle: { backgroundColor: themeColors.background },
                }}
            >
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
                <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
                <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{ title: 'Edit Profile' }} />
                <Stack.Screen name="Activity" component={ActivityScreen} options={{ title: 'Activities & Interests' }} />
                <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default function App() {
    return (
        <ThemeProvider>
            <ProfileProvider>
                <AppNavigator />
            </ProfileProvider>
        </ThemeProvider>
    );
}