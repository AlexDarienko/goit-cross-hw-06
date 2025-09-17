import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { COLORS } from '../data/colors';

export default function InputField({ placeholder, value, onChangeText }) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor="#999"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 10,
    paddingHorizontal: 12, paddingVertical: 10, marginVertical: 8, backgroundColor: '#fff'
  }
});