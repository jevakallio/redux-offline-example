const initialState = {
  users: {}
};
export default (state = initialState, action) => {
  console.log('userland', action.type, state);
  switch (action.type) {
    case 'FOLLOW_USER_REQUEST':
      return {
        ...state,
        users: { ...state.users, [action.payload.userId]: true, error: null }
      };
    case 'FOLLOW_USER_ROLLBACK':
      return {
        ...state,
        users: { ...state.users, [action.payload.userId]: false, error: action.payload }
      };
    case 'UNFOLLOW_USER_REQUEST':
      return {
        ...state,
        users: { ...state.users, [action.payload.userId]: false, error: null }
      };
    case 'UNFOLLOW_USER_ROLLBACK':
      return {
        ...state,
        users: { ...state.users, [action.payload.userId]: true, error: action.payload }
      };
    default:
      return state;
  }
};
