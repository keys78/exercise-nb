'use client'

import React, { useEffect, useState } from 'react'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Box from '@mui/material/Box'
import { CardActionArea, CircularProgress } from '@mui/material'
import {
  getMoreProducts,
  getProducts,
} from '../../redux/services/productsSlice'
import { RootState } from '../../redux/network/store'
import { useAppDispatch, useAppSelector } from '../../redux/network/hooks'

interface Product {
  id: string
  title: string
  description: string
  images: string[]
  brand: string
  price: number
  discountPercentage: number
}

function ProductCard({ product }: { product: Product }) {
  const getDiscountPrice = (price: number, discountPercent: number) => {
    const discountDecimal = discountPercent / 100.0
    const total = price - price * discountDecimal
    return total.toFixed(2)
  }

  return (
    <Box
      gridColumn="span 2"
      sx={{ height: '100%', margin: '8px' }}
      key={product.title}
    >
      <Link href={`/product/${product.id}`} underline="none">
        <Card
          sx={{
            maxWidth: 390,
            height: '100%',
            boxShadow: 'none',
            margin: 'auto',
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image={product.images[0]}
              alt={product.description}
            />
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}
            >
              <Typography
                variant="subtitle2"
                fontWeight={700}
                textAlign="center"
                color="#252B42"
                fontSize="15px"
              >
                {product.title}
              </Typography>
              <Typography
                variant="subtitle2"
                fontWeight={700}
                textAlign="center"
                color="#737373"
                fontSize="14px"
                marginTop="8px"
                marginBottom="8px"
              >
                {product?.brand}
              </Typography>
              <Box sx={{ display: 'flex' }}>
                <Typography
                  variant="subtitle2"
                  fontWeight={700}
                  textAlign="center"
                  color="#BDBDBD"
                  fontSize="13px"
                  marginRight="4px"
                >
                  ${product?.price}
                </Typography>
                <Typography
                  variant="subtitle2"
                  fontWeight={700}
                  textAlign="center"
                  color="#23856D"
                  fontSize="14px"
                >
                  $
                  {getDiscountPrice(
                    product?.price,
                    product?.discountPercentage,
                  )}
                </Typography>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Box>
  )
}

function ProductsDisplay({
  showLoadmoreBtn = true,
}: {
  showLoadmoreBtn?: boolean
}) {
  const dispatch = useAppDispatch()
  const products = useAppSelector((state: RootState) => state.products)
  const [loadingMore, setLoadingMore] = useState(false)

  useEffect(() => {
    dispatch(getProducts({ skip: 0 }))
  }, [dispatch])

  const handleLoadMore = async () => {
    if (loadingMore) {
      return
    }

    setLoadingMore(true)
    const skip = products.payload?.products.length
    await dispatch(getMoreProducts({ skip }))
    setLoadingMore(false)
  }

  return (
    <Box sx={{ mt: '90px', mb: '24px', mx: { xs: '0', md: '56px' } }}>
      <Box
        sx={{
          display: 'grid',
          mt: '80px',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            md: 'repeat(10, 1fr)',
          },
          gap: { xs: 5, md: 1 },
        }}
      >
        {products.payload?.products?.map((product: Product) => (
          <ProductCard key={product.title} product={product} />
        ))}
      </Box>
      {showLoadmoreBtn &&
        products.payload?.products?.length < products?.payload?.total && (
          <Button
            variant="outlined"
            onClick={handleLoadMore}
            disabled={loadingMore}
            sx={{
              margin: 'auto',
              display: 'block',
              mt: '40px',
              color: '#23a6f0',
              borderColor: '#23a6f0',
              position: 'relative',
            }}
          >
            {loadingMore && (
              <CircularProgress
                size={24}
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: '#23a6f0',
                }}
              />
            )}
            {loadingMore ? 'LOADING...' : 'LOAD MORE PRODUCTS'}
          </Button>
        )}
    </Box>
  )
}

export default ProductsDisplay
