'use client'
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'
import {  useState } from 'react';

interface ProductState {
  name: string;
  image: string;
  price: string;
  description: string;
  category: string;
  cpu: string;
  ram: string;
  gpu: string;
  hard: string;
}

const initialState: ProductState[] = [];
const [products, setProducts] = useState<ProductState[]>([]);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductState>) => {
      state.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.splice(action.payload, 1);
    },
    clearProducts: (state) => {
      return [];
    }
  }
});

export const { addProduct, removeProduct, clearProducts } = productSlice.actions;

export const store = configureStore({
  reducer: {
    products: productSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
