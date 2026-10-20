/**
 * Assignment 1 - MMA301
 * Author: Lâm Anh Quý - CE191736
 * File: ActivityCard.js
 * Description: Reusable component for rendering individual activity items with like action.
 */

import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

export const ActivityCard = ({ item, onToggleLike }) => {
    const { themeColors } = useContext(ThemeContext);

    return (
        <View style={[styles.card, { backgroundColor: themeColors.card }]}>
            <View style={styles.info}>
                <Text style={[styles.title, { color: themeColors.text }]}>{item.title}</Text>
                <Text style={[styles.category, { color: themeColors.subText }]}>{item.category}</Text>
            </View>
            <TouchableOpacity
                style={[styles.button, item.liked && styles.likedButton]}
                onPress={() => onToggleLike(item.id)}
            >
                <Text style={styles.buttonText}>{item.liked ? '♥ Liked' : '♡ Like'}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    info: { flex: 1 },
    title: { fontSize: 16, fontWeight: 'bold' },
    category: { fontSize: 13, marginTop: 4 },
    button: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        backgroundColor: '#E0E0E0',
    },
    likedButton: { backgroundColor: '#FF3B30' },
    buttonText: { color: '#FFF', fontWeight: 'bold', fontSize: 12 },
});