import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { COLORS } from '../data/colors';

export default function Header({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title} numberOfLines={1}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56, justifyContent: 'center', alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: COLORS.border,
    backgroundColor: '#fafafa',
    ...Platform.select({ ios: { paddingTop: 0 }, android: {} })
  },
  title: { fontSize: 18, fontWeight: '700', color: COLORS.text }
});