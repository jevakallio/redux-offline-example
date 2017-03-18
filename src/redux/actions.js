export const followUser = userId => ({
  type: 'FOLLOW_USER_REQUEST',
  payload: { userId },
  meta: {
    offline: {
      // passed to network sink
      effect: {
        url: 'https://jsonplaceholder.typicode.com/users',
        method: 'POST',
        body: { userId }
      },
      // dispatched when effect succeeds
      commit: {
        type: 'FOLLOW_USER_COMMIT',
        payload: null,
        meta: { userId }
      },
      // dispatched if effect fails
      rollback: {
        type: 'FOLLOW_USER_ROLLBACK',
        payload: null,
        error: true,
        meta: { userId }
      }
    }
  }
});

export const unfollowUser = userId => ({
  type: 'UNFOLLOW_USER_REQUEST',
  payload: { userId },
  meta: {
    offline: {
      // passed to network sink
      effect: {
        url: 'https://jsonplaceholder.typicode.com/users',
        method: 'POST',
        body: { userId }
      },
      // dispatched when effect succeeds
      commit: {
        type: 'UNFOLLOW_USER_COMMIT',
        payload: null,
        meta: { userId }
      },
      // dispatched if effect fails
      rollback: {
        type: 'UNFOLLOW_USER_ROLLBACK',
        payload: null,
        error: true,
        meta: { userId }
      }
    }
  }
});
