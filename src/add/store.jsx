import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../product/productSlice';
import themeReducer from '../theme/themeSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    theme: themeReducer,
  },
});
