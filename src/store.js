import { configureStore } from '@reduxjs/toolkit';
import sellItem from './store-slices/sell-item';

export default configureStore({
  reducer: {
    sellItem: sellItem,
  },
});
