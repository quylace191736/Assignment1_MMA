/**
 * Assignment 1 - MMA301
 * Author: Lâm Anh Quý - CE191736
 * File: ProfileScreen.js
 * Description: Screen displaying user profile details and link to edit.
 */

import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { ProfileContext } from '../context/ProfileContext';

export default function ProfileScreen({ navigation }) {
    const { themeColors } = useContext(ThemeContext);
    const { profile } = useContext(ProfileContext);

    return (
        <View style={[styles.container, { backgroundColor: themeColors.background }]}>
            <View style={[styles.card, { backgroundColor: themeColors.card }]}>
                <Image source={{ uri: profile.avatar }} style={styles.avatar} />
                <Text style={[styles.name, { color: themeColors.text }]}>{profile.name}</Text>
                <Text style={[styles.bio, { color: themeColors.subText }]}>{profile.bio}</Text>

                <TouchableOpacity
                    style={[styles.btn, { backgroundColor: themeColors.primary }]}
                    onPress={() => navigation.navigate('EditProfile')}
                >
                    <Text style={styles.btnText}>Edit Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, justifyContent: 'center' },
    card: { padding: 24, borderRadius: 16, alignItems: 'center', elevation: 3 },
    avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 16 },
    name: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
    bio: { fontSize: 14, textAlign: 'center', marginBottom: 20 },
    btn: { paddingVertical: 10, paddingHorizontal: 20, borderRadius: 8 },
    btnText: { color: '#FFF', fontWeight: 'bold' },
});