// Store.js

import {combineReducers } from 'redux';
import { legacy_createStore as createStore} from 'redux'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { tokenReducer, userIDReducer } from './Reducers';

const rootReducer = combineReducers({
  token: tokenReducer,
  userID: userIDReducer
});

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
