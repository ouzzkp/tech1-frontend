// Reducers.js

// Token reducer'ı
export const tokenReducer = (state = null, action) => {
    switch (action.type) {
      case 'SET_TOKEN':
        return action.payload;
      case 'CLEAR_TOKEN':
        return null;
      default:
        return state;
    }
  };
  
  // UserID reducer'ı
  export const userIDReducer = (state = null, action) => {
    switch (action.type) {
      case 'SET_USER_ID':
        return action.payload;
      case 'CLEAR_USER_ID':
        return null;
      default:
        return state;
    }
  };
  