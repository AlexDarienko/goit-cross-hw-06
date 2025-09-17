import React from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';
import { COLORS } from '../data/colors';

export default function HabitCard({ name, streak, reminderTime, iconUrl, onPress }) {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.card, { width: width - 32 }]} onTouchEnd={onPress}>
      <Image source={{ uri: iconUrl }} style={styles.icon} />
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.details}>Серія: {streak} днів · {reminderTime}</Text>
      </View>
      <View style={styles.checkBox}>
        <Text style={styles.checkMark}>✓</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.bg,
    borderRadius: 12,
    padding: 12,
    marginVertical: 6,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#eee',
  },
  icon: { width: 36, height: 36, borderRadius: 18, marginRight: 12, backgroundColor: '#eee' },
  name: { fontSize: 16, fontWeight: '600', color: COLORS.text },
  details: { fontSize: 12, color: COLORS.muted, marginTop: 2 },
  checkBox: {
    width: 32, height: 32, borderRadius: 8,
    backgroundColor: COLORS.secondary, justifyContent: 'center', alignItems: 'center', marginLeft: 8
  },
  checkMark: { fontSize: 16, color: COLORS.text }
});