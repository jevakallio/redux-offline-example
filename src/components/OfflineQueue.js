import React from 'react';
import { Text, ScrollView, View, Button, StyleSheet } from 'react-native';

const OfflineQueue = ({ actions, isOnline }) => (
  <ScrollView style={styles.list}>
    <Text style={styles.title}>{isOnline ? 'online' : 'offline'} ({actions.length} queued)</Text>
    {actions.map(action => (
    // @TODO Fix
      <Text key={`action-${action.type}-${action.meta.transaction}`}>
        Message: {action.type} {action.payload.userId}
      </Text>
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#eee',
    flex: 1
  },
  title: {
    fontSize: 24,
    textAlign: 'center'
  }
});

export default OfflineQueue;
