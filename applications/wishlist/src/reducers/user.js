const initialState = {
  name: 'Hello',
  avatar: 'http://digitalspyuk.cdnds.net/17/25/980x490/landscape-1498216547-avatar-neytiri.jpg'
};

function reducer(state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }

  return state;
}

export default reducer;
