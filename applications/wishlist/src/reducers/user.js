const initialState = {
  name: '',
  avatar: '',
  isLogged: false,
  isLoading: false,
};

function reducer(state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }

  if (action.type === 'USER_LOGIN') {
    return {
      name: action.name,
      avatar: action.avatar,
      isLogged: true,
    };
  }

  if (action.type === 'SIGN_OUT') {
    return initialState;
  }

  return state;
}

export default reducer;
