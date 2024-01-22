import { Box, Typography } from '@mui/material'
import React from 'react'
import ProductsDisplay from '../shared/ProductsDisplay'

function FeaturedProducts() {
  return (
    <Box>
      <Typography
        variant="subtitle2"
        fontWeight={400}
        textAlign="center"
        color="#737373"
        fontSize="20px"
      >
        Featured Products
      </Typography>
      <Typography
        variant="subtitle2"
        fontWeight={700}
        textAlign="center"
        color="#252B42"
        fontSize="24px"
      >
        BEST SELLERS PRODUCTS
      </Typography>
      <Typography
        variant="subtitle2"
        fontWeight={400}
        textAlign="center"
        color="#737373"
        fontSize="14px"
      >
        Problems trying to resolve the conflict between
      </Typography>
      <ProductsDisplay showLoadmoreBtn={true} />
    </Box>
  )
}

export default FeaturedProducts
