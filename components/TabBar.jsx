import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { COLORS } from '../data/colors';

const TABS = ['Звички', 'Статистика', 'Профіль'];

export default function TabBar({ activeTab, setActiveTab }) {
  return (
    <View style={styles.container}>
      {TABS.map(tab => (
        <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)} style={styles.item}>
          <Text style={[styles.text, activeTab === tab && styles.active]}>{tab}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 64, flexDirection: 'row', justifyContent: 'space-around',
    borderTopWidth: 1, borderTopColor: COLORS.border, backgroundColor: '#fafafa',
    ...Platform.select({ ios: { paddingBottom: 8 }, android: { } })
  },
  item: { justifyContent: 'center', alignItems: 'center', flex: 1 },
  text: { fontSize: 13, color: COLORS.muted },
  active: { color: COLORS.text, fontWeight: '700' }
});