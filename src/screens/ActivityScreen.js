/**
 * Assignment 1 - MMA301
 * Author: Lâm Anh Quý - CE191736
 * File: ActivityScreen.js
 * Description: Activity screen displaying list of interests and activities with like toggle.
 */

import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { ActivityCard } from '../components/ActivityCard';

const INITIAL_ACTIVITIES = [
    { id: '1', title: 'React Native Development', category: 'Education', liked: false },
    { id: '2', title: 'Read Clean Code Book', category: 'Self-Improvement', liked: true },
    { id: '3', title: '5km Morning Run', category: 'Sports', liked: false },
];

export default function ActivityScreen() {
    const { themeColors } = useContext(ThemeContext);
    const [activities, setActivities] = useState(INITIAL_ACTIVITIES);

    const toggleLike = (id) => {
        setActivities((prev) =>
            prev.map((item) => (item.id === id ? { ...item, liked: !item.liked } : item))
        );
    };

    return (
        <View style={[styles.container, { backgroundColor: themeColors.background }]}>
            <FlatList
                data={activities}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ActivityCard item={item} onToggleLike={toggleLike} />
                )}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Text style={{ color: themeColors.subText }}>No activities available!</Text>
                    </View>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    emptyContainer: { alignItems: 'center', marginTop: 50 },
});