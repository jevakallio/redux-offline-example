import React from 'react';
import { Text, ScrollView, View, Button, StyleSheet } from 'react-native';

const users = [
  '@FormidableLabs',
  '@jevakallio',
  '@ken_wheeler',
  '@divmain',
  '@alexlande'
].map((name, i) => ({ id: i + 1, name }));

const Users = ({ following, followUser, unfollowUser }) => (
  <ScrollView style={styles.list} contentContainerStyle={{ flex: 1 }}>
    {users.map(({ id, name }) => (
      <View style={styles.row} key={`user-${id}`}>
        <Text>{name}</Text>
        <Button
          onPress={() => following[id] ? unfollowUser(id) : followUser(id)}
          title={following[id] ? 'Unfollow' : 'Follow'}
        />
      </View>
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  list: {
    flex: 1
  },
  row: {
    height: 60,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 24
  }
});

export default Users;
