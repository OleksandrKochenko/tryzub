import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { contactsReducer } from './contacts/slice';
// import { filterReducer } from './filterSlice';
import { userReducer } from './user/slice';

const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['lang'],
};

export const store = configureStore({
  reducer: {
    user: persistReducer(userPersistConfig, userReducer),
    // contacts: contactsReducer,
    // filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
