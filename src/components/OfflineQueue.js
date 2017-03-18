import React from 'react';
import { Text, ScrollView, View, Button, StyleSheet } from 'react-native';

const OfflineQueue = ({ messages, isOnline }) => (
  <ScrollView style={styles.list}>
    <Text style={styles.title}>{isOnline ? 'online' : 'offline'} ({messages.length} queued)</Text>
    {messages.map(message => (
    // @TODO Fix
      <Text key={`message-${message.commit.type}-${message.commit.meta.userId}`}>
        Message: {message.commit.type} {message.commit.meta.userId}
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
