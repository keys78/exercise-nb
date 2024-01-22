// product
export interface Product {
  image: any
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

export interface ProductsState {
  loading: boolean
  payload: {
    total?: number
    products: Product[]
  }
  singleProductPayload: Product
  error: any
}

// cart
export interface CartItem {
  id: string
  quantity: number
}

export interface CartState {
  cart: CartItem[]
}

// wishlist
export interface initialStateType {
  wishlist: any
}
