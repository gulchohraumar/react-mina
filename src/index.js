import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Provider } from 'react-redux';
import allReducers from './store-slices/all-reducers';
import {createStore} from 'redux'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import sellItem from './store-slices/sell-item';
import { PersistGate } from 'redux-persist/integration/react';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, sellItem)

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(persistedReducer)
const persistor = persistStore(store)

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
  </Provider> 
);

reportWebVitals();
