/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { ProductsState, Product } from '../../types/all'

const initialState: ProductsState = {
  loading: false,
  payload: {
    total: undefined,
    products: [],
  },
  singleProductPayload: {
    id: 0,
    title: '',
    description: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: '',
    category: '',
    thumbnail: '',
    image: '',
    images: [],
  },
  error: {},
}

export const getProducts = createAsyncThunk(
  'product/productsData',
  async (data: { limit?: number; skip?: number }) => {
    const { limit = 10, skip = 0 } = data
    const response = await axios.get<{ total?: number; products: Product[] }>(
      `${`${process.env.NEXT_PUBLIC_BASE_API_URL}products/?limit=${limit}&skip=${skip}`}`,
    )
    return response.data
  },
)

export const getMoreProducts = createAsyncThunk(
  'product/moreProductsData',
  async (data: { limit?: number; skip?: number }) => {
    const { limit = 10, skip = 0 } = data
    const response = await axios.get<{ total?: number; products: Product[] }>(
      `${`${process.env.NEXT_PUBLIC_BASE_API_URL}products/?limit=${limit}&skip=${skip}`}`,
    )
    return response.data
  },
)

export const getSingleProduct = createAsyncThunk(
  'product/singleProductData',
  async (data: { id: number }) => {
    const { id } = data
    const response = await axios.get<Product>(
      `${`${process.env.NEXT_PUBLIC_BASE_API_URL}products/${id}`}`,
    )
    return response.data
  },
)

export const productsSlice = createSlice({
  name: 'productsData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true
      })
      .addCase(
        getProducts.fulfilled,
        (
          state,
          action: PayloadAction<{ total?: number; products: Product[] }>,
        ) => {
          state.loading = false
          state.payload.total = action.payload.total
          state.payload.products = action.payload.products
        },
      )
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false
        state.payload = { total: undefined, products: [] }
        state.error = action.error
      })
      .addCase(getMoreProducts.pending, (state) => {
        state.loading = true
      })
      .addCase(
        getMoreProducts.fulfilled,
        (
          state,
          action: PayloadAction<{ total?: number; products: Product[] }>,
        ) => {
          state.loading = false
          state.payload.total = action.payload.total
          state.payload.products = [
            ...state.payload.products,
            ...action.payload.products,
          ]
        },
      )
      .addCase(getMoreProducts.rejected, (state, action) => {
        state.loading = false
        state.payload = { total: undefined, products: [] }
        state.error = action.error
      })
      .addCase(getSingleProduct.pending, (state) => {
        state.loading = true
      })
      .addCase(
        getSingleProduct.fulfilled,
        (state, action: PayloadAction<Product>) => {
          state.loading = false
          state.singleProductPayload = action.payload
        },
      )
      .addCase(getSingleProduct.rejected, (state, action) => {
        state.loading = false
        state.singleProductPayload = {
          id: 0,
          title: '',
          description: '',
          price: 0,
          discountPercentage: 0,
          rating: 0,
          stock: 0,
          brand: '',
          category: '',
          thumbnail: '',
          image: '',
          images: [],
        }
        state.error = action.error
      })
  },
})

export default productsSlice.reducer
