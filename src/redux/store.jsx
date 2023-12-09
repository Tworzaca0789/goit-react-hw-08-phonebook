import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contacts/contactsSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  REHYDRATE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filterReducer } from './contacts/filterSlice';
import { authReducer } from './auth/sliceAuth';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['token'],
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  authReducer
);

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
    auth: persistedContactsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
