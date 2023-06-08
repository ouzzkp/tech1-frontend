// Store.js

import {applyMiddleware, combineReducers } from 'redux';
import { legacy_createStore as createStore} from 'redux'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { tokenReducer, userIDReducer, authReducer, roleReducer, employeeReducer, selectedEmployeeIdReducer, } from './Reducers';

const rootReducer = combineReducers({
  token: tokenReducer,
  userID: userIDReducer,
  auth: authReducer,
  role: roleReducer,
  employee: employeeReducer,
  selectedEmployeeId: selectedEmployeeIdReducer,
});

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };
