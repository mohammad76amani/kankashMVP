'use client'
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useEffect, useState } from 'react';

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
});import { configureStore as configureStoreRTK } from '@reduxjs/toolkit'
export const store = configureStoreRTK({
  reducer: {
    products: productSlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const { addProduct, removeProduct, clearProducts } = productSlice.actions;
