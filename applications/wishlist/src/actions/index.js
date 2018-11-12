export const DELETE_WISH = 'DELETE_WISH';

export function deleteWish(id) {
  return {
    type: DELETE_WISH,
    id,
  };
}

export function onRequestLogin() {
  return {
    type: 'ON_REQUEST_LOGIN',
  };
}

export function signOut() {
  return {
    type: 'SIGN_OUT'
  };
}

var CLIENT_ID = '503384634348-83ficecm71m58csft9l90mdf2q56kp3d.apps.googleusercontent.com';
var API_KEY = 'AIzaSyCNup2ut-5wMQ-NCtYek5aFQCqj_Dtdzx8';

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = "https://www.googleapis.com/auth/userinfo.profile";

export function onLogin() {
  return function(dispatch) {
    dispatch({type: 'USER_LOADING'})
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
      }).then((...args) => {
        dispatch({
          type: 'USER_LOGIN',
          name: 'Aleksandr',
          avatar: 'https://lh5.googleusercontent.com/-682ZdiWbvDE/AAAAAAAAAAI/AAAAAAAAD-Q/DikQULsDkm4/photo.jpg?sz=64'
        });
      })
    });
  }
}
