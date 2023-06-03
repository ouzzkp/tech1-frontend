export const setToken = (token) => {
    return {
      type: 'SET_TOKEN',
      payload: token
    };
  };
  export const setUserID = (userID) => {
    return {
      type: 'SET_USER_ID',
      payload: userID
    };
  };