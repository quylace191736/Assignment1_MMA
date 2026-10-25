/**
 * Assignment 1 - MMA301
 * Author: Lâm Anh Quý - CE191736
 * File: SettingsScreen.js
 * Description: Screen for app settings such as toggling dark/light theme.
 */

import React, { useContext } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

export default function SettingsScreen() {
    const { isDarkMode, toggleTheme, themeColors } = useContext(ThemeContext);

    return (
        <View style={[styles.container, { backgroundColor: themeColors.background }]}>
            <View style={[styles.row, { backgroundColor: themeColors.card }]}>
                <Text style={[styles.text, { color: themeColors.text }]}>Dark Mode</Text>
                <Switch value={isDarkMode} onValueChange={toggleTheme} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderRadius: 12,
    },
    text: { fontSize: 16, fontWeight: '600' },
});