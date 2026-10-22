/**
 * Assignment 1 - MMA301
 * Author: Lâm Anh Quý - CE191736
 * File: HomeScreen.js
 * Description: Home screen featuring welcome message and navigation buttons.
 */

import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { ProfileContext } from '../context/ProfileContext';

export default function HomeScreen({ navigation }) {
    const { themeColors } = useContext(ThemeContext);
    const { profile } = useContext(ProfileContext);

    return (
        <View style={[styles.container, { backgroundColor: themeColors.background }]}>
            <Text style={[styles.welcome, { color: themeColors.text }]}>
                Welcome, {profile.name}!
            </Text>
            <Text style={[styles.subtitle, { color: themeColors.subText }]}>
                Personal Profile & Activity Management App
            </Text>

            <TouchableOpacity
                style={[styles.btn, { backgroundColor: themeColors.primary }]}
                onPress={() => navigation.navigate('Profile')}
            >
                <Text style={styles.btnText}>View Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.btn, { backgroundColor: themeColors.primary }]}
                onPress={() => navigation.navigate('Activity')}
            >
                <Text style={styles.btnText}>Activities & Interests</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.btn, { backgroundColor: '#8E8E93' }]}
                onPress={() => navigation.navigate('Settings')}
            >
                <Text style={styles.btnText}>Settings</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 24, justifyContent: 'center' },
    welcome: { fontSize: 24, fontWeight: 'bold', marginBottom: 8, textAlign: 'center' },
    subtitle: { fontSize: 14, textAlign: 'center', marginBottom: 32 },
    btn: { padding: 14, borderRadius: 10, alignItems: 'center', marginBottom: 12 },
    btnText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
});