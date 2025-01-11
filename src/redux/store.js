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
  createTransform,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { userReducer } from './user/slice';
import { eventsReducer } from './events/slice';
import { newsReducer } from './news/slice';
import { validateLang } from 'data/helpers';

const SetTransform = createTransform(
  (inboundState, key) => {
    return inboundState;
  },

  (outboundState, key) => {
    const lang = validateLang(outboundState);
    return lang;
  },
  { whitelist: ['lang'] }
);

const userPersistConfig = {
  key: 'user',
  storage,
  transforms: [SetTransform],
  whitelist: ['lang'],
};

export const store = configureStore({
  reducer: {
    user: persistReducer(userPersistConfig, userReducer),
    events: eventsReducer,
    news: newsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
