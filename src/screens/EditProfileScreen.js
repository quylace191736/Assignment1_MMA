/**
 * Assignment 1 - MMA301
 * Author: Lâm Anh Quý - CE191736
 * File: EditProfileScreen.js
 * Description: Screen allowing users to update their profile name and bio with validation.
 */

import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { ProfileContext } from '../context/ProfileContext';

export default function EditProfileScreen({ navigation }) {
    const { themeColors } = useContext(ThemeContext);
    const { profile, updateProfile } = useContext(ProfileContext);

    const [name, setName] = useState(profile.name);
    const [bio, setBio] = useState(profile.bio);
    const [error, setError] = useState('');

    const handleSave = async () => {
        if (!name.trim()) {
            setError('Name cannot be empty!');
            return;
        }
        if (bio.trim().length < 5) {
            setError('Bio must be at least 5 characters long!');
            return;
        }

        setError('');
        await updateProfile({ ...profile, name: name.trim(), bio: bio.trim() });
        navigation.goBack();
    };

    const handleCancel = () => {
        navigation.goBack();
    };

    return (
        <View style={[styles.container, { backgroundColor: themeColors.background }]}>
            <Text style={[styles.label, { color: themeColors.text }]}>Full Name:</Text>
            <TextInput
                style={[styles.input, { color: themeColors.text, borderColor: themeColors.subText }]}
                value={name}
                onChangeText={setName}
                placeholder="Enter your full name"
                placeholderTextColor={themeColors.subText}
            />

            <Text style={[styles.label, { color: themeColors.text }]}>Bio / Introduction:</Text>
            <TextInput
                style={[styles.input, styles.bioInput, { color: themeColors.text, borderColor: themeColors.subText }]}
                value={bio}
                onChangeText={setBio}
                multiline
                placeholder="Enter your bio..."
                placeholderTextColor={themeColors.subText}
            />

            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <View style={styles.row}>
                <TouchableOpacity style={[styles.btn, styles.cancelBtn]} onPress={handleCancel}>
                    <Text style={styles.btnText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, { backgroundColor: themeColors.primary }]} onPress={handleSave}>
                    <Text style={styles.btnText}>Save Changes</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    label: { fontSize: 16, fontWeight: 'bold', marginTop: 12, marginBottom: 6 },
    input: { borderWidth: 1, borderRadius: 8, padding: 12, fontSize: 16 },
    bioInput: { height: 80, textAlignVertical: 'top' },
    errorText: { color: '#FF3B30', marginTop: 8, fontWeight: '500' },
    row: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 24 },
    btn: { flex: 0.48, padding: 12, borderRadius: 8, alignItems: 'center' },
    cancelBtn: { backgroundColor: '#8E8E93' },
    btnText: { color: '#FFF', fontWeight: 'bold' },
});