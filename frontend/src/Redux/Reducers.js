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



// initial state
const isLoggedIn = false;
const role = null;
 

// reducer
export const authReducer = (state = isLoggedIn, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export const roleReducer = (state = role, action) => {
  switch (action.type) {
    case 'SET_ROLE':
      return {
        ...state,
        role: action.payload
      }
    default:
      return state;
  }
}