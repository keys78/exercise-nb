/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
import { createSlice } from '@reduxjs/toolkit'

type initialStateType = {
  cart: any
}

const initialState: initialStateType = {
  cart: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item: any) => item.id === action.payload.id,
      )
      if (itemInCart) {
        itemInCart.quantity++
      } else {
        state.cart.push({ ...action.payload, quantity: 1 })
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item: any) => item.id === action.payload)
      if (item) {
        item.quantity++
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item: any) => item.id === action.payload)
      if (item) {
        if (item.quantity === 1) {
          item.quantity = 1
        } else {
          item.quantity--
        }
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item: any) => item.id !== action.payload,
      )
      state.cart = removeItem
    },
  },
})

export const cartReducer = cartSlice.reducer
export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions
