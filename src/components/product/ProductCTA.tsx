import { Box, Button, IconButton } from '@mui/material'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import React from 'react'
import { Product } from '../../types/all'

interface iProps {
  product: Product
  handleAddToCart: any
  handleAddToWishlist: any
}

function ProductCTA({ handleAddToCart, handleAddToWishlist, product }: iProps) {
  return (
    <Box marginTop="68px">
      <Button variant="contained" sx={{ backgroundColor: '#23a6f0' }}>
        Select Options
      </Button>
      <IconButton
        className="icon-btn-bordered"
        sx={{ mx: '5px' }}
        aria-label="add to shopping cart"
        onClick={() => {
          handleAddToWishlist(
            {
              id: product.id,
              title: product.title,
              image: product.thumbnail,
              price: product.price,
            },
            'Item added to wishlist',
          )
        }}
      >
        <FavoriteBorderOutlinedIcon />
      </IconButton>
      <IconButton
        className="icon-btn-bordered"
        sx={{ mx: '5px' }}
        aria-label="add to shopping cart"
        onClick={() => {
          handleAddToCart(
            {
              id: product.id,
              title: product.title,
              image: product.thumbnail,
              price: product.price,
            },
            'Item added to cart',
          )
        }}
      >
        <ShoppingCartOutlinedIcon />
      </IconButton>
      <IconButton
        className="icon-btn-bordered"
        sx={{ mx: '5px' }}
        aria-label="add to shopping cart"
      >
        <RemoveRedEyeIcon />
      </IconButton>
    </Box>
  )
}

export default ProductCTA
