import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { followUser, unfollowUser } from '../redux/actions';

import OfflineQueue from './OfflineQueue';
import Users from './Users';

const mapStateToProps = state => ({
  following: state.users,
  outbox: state.offline.outbox,
  isOnline: state.offline.online
});

const mapDispatchToProps = dispatch => ({
  goOffline: () => dispatch({ type: 'Offline/STATUS_CHANGED', payload: { online: false } }),
  goOnline: () => dispatch({ type: 'Offline/STATUS_CHANGED', payload: { online: true } }),
  followUser: id => dispatch(followUser(id)),
  unfollowUser: id => dispatch(unfollowUser(id))
});

const Main = props => (
  <View style={styles.page}>
    <Users
      following={props.following}
      followUser={props.followUser}
      unfollowUser={props.unfollowUser}
    />
    <OfflineQueue isOnline={props.isOnline} actions={props.outbox} />
    <View style={styles.buttons}>
      <Button onPress={props.goOffline} title="Go offline" />
      <Button onPress={props.goOnline} title="Go online" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    marginTop: 32
  },
  buttons: {
    justifyContent: 'space-around',
    flexDirection: 'row'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
