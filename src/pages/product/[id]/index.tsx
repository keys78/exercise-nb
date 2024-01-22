/* eslint-disable import/no-named-default */

'use client'

import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'
import { default as MUILink } from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import IconButton from '@mui/material/IconButton'
import Snackbar from '@mui/material/Snackbar'
import CloseIcon from '@mui/icons-material/Close'
import Rating from '@mui/material/Rating'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '../../../redux/network/hooks'
import { RootState } from '../../../redux/network/store'
import { addToCart } from '../../../redux/services/cartSlice'
import { getSingleProduct } from '../../../redux/services/productsSlice'
import { addToWishlist } from '../../../redux/services/wishlistSlice'
import BestSellerSecion from '../../../components/product/BestSellerSecion'
import AboutProduct from '../../../components/product/AboutProduct'
import ProductCTA from '../../../components/product/ProductCTA'
import ImageCarousel from '../../../components/product/ImageCarousel'
import { Product } from '../../../types/all'

function ProductDetails() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const product = useAppSelector(
    (state: RootState) => state.products.singleProductPayload,
  )

  useEffect(() => {
    const getProductDetails = async () => {
      dispatch(getSingleProduct({ id: Number(router.query.id) }))
    }

    if (router.query.id) {
      getProductDetails()
    }
  }, [dispatch, router.query.id])

  const [openSnackBar, setOpenSnackBar] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')

  const breadcrumbs = [
    <MUILink href={`/`} key="1">
      <Typography color="text.primary">Home</Typography>
    </MUILink>,
    <Typography key="2" color="text.primary">
      Shop
    </Typography>,
  ]

  const handleCloseSnackBar = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return
    }
    setOpenSnackBar(false)
  }

  const handleAddToCart = async (item: Product, message: string) => {
    dispatch(
      addToCart({
        id: item.id,
        title: item.title,
        image: item.image,
        price: item.price,
      }),
    )

    setOpenSnackBar(true)
    setSnackbarMessage(message)
  }

  const handleAddToWishlist = async (item: Product, message: string) => {
    dispatch(
      addToWishlist({
        id: item.id,
        title: item.title,
        image: item.image,
        price: item.price,
      }),
    )

    setOpenSnackBar(true)
    setSnackbarMessage(message)
  }

  const snackBarAction = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseSnackBar}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  )
  return (
    <>
      <Box
        sx={{
          padding: { xs: '8px 14px', md: '8px 147px' },
          backgroundColor: '#FAFAFA',
        }}
      >
        <Stack spacing={2}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </Box>
      <Box
        sx={{
          padding: { xs: '8px 14px', md: '8px 147px' },
          backgroundColor: '#FAFAFA',
        }}
      >
        <Box
          sx={{
            display: { xs: 'block', md: 'grid' },
          }}
          gridTemplateColumns="repeat(10, 1fr)"
          gap={1}
        >
          <ImageCarousel product={product} />
          <Box
            gridColumn="span 5"
            sx={{ height: '100%', margin: '8px', padding: '16px' }}
            key={product.title}
          >
            <Typography
              variant="subtitle2"
              fontWeight={400}
              color="#252B42"
              fontSize="16px"
              marginBottom={'14px'}
            >
              {product.title}
            </Typography>
            <Box>
              <Rating
                name="read-only"
                value={product.rating}
                readOnly
                sx={{ marginTop: '-4px' }}
              />
              <Typography
                variant="subtitle2"
                fontWeight={700}
                color="#737373"
                fontSize="14px"
                marginBottom={'14px'}
                marginLeft={'10px'}
              >
                10 Reviews
              </Typography>
            </Box>
            <Typography
              variant="subtitle2"
              fontWeight={700}
              color="#252B42"
              fontSize="24px"
              marginBottom={'14px'}
            >
              ${product.price}
            </Typography>
            <Typography
              variant="subtitle2"
              fontWeight={700}
              color="#737373"
              fontSize="14px"
              marginBottom={'14px'}
            >
              Availability:{' '}
              {product.stock > 0 ? (
                <span style={{ color: '#23A6F0' }}>In Stock</span>
              ) : (
                <span style={{ color: '#23A6F0' }}>Not Available</span>
              )}
            </Typography>
            <Box
              display="flex"
              borderTop="1px solid #212121"
              paddingTop="29px"
              marginTop="140px"
            >
              <div className="ellipse bg-blue"></div>
              <div className="ellipse bg-green"></div>
              <div className="ellipse bg-orange"></div>
              <div className="ellipse bg-black"></div>
            </Box>
            <ProductCTA
              handleAddToCart={handleAddToCart}
              handleAddToWishlist={handleAddToWishlist}
              product={product}
            />
          </Box>
        </Box>
      </Box>
      <AboutProduct />
      <BestSellerSecion />
      <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={handleCloseSnackBar}
        message={snackbarMessage}
        action={snackBarAction}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      />
    </>
  )
}

export default ProductDetails
