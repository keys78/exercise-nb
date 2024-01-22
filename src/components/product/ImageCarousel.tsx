import { Box, IconButton } from '@mui/material'
import Carousel from 'nuka-carousel'
import { useRouter } from 'next/router'
import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import Image from 'next/image'

interface ImageCarouselProps {
  product: {
    title: string
    images?: string[]
    thumbnail?: string
  }
}

function ImageCarousel({ product }: ImageCarouselProps) {
  const router = useRouter()

  return (
    <Box
      gridColumn="span 5"
      sx={{ height: '100%', margin: '8px' }}
      key={product.title}
    >
      {product?.images && router?.query?.id && (
        <Carousel
          wrapAround={true}
          renderCenterLeftControls={({ previousSlide }) => (
            <IconButton
              onClick={previousSlide}
              sx={{ padding: 4, backgroundColor: '#0000001d' }}
            >
              <ArrowBackIosIcon style={{ color: 'white' }} />
            </IconButton>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <IconButton
              onClick={nextSlide}
              sx={{ padding: 4, backgroundColor: '#0000001c' }}
            >
              <ArrowForwardIosIcon style={{ color: 'white' }} />
            </IconButton>
          )}
        >
          {product?.images?.map((image: string) => (
            <Image
              key={image}
              src={image}
              width={500}
              height={450}
              objectFit="contain"
              alt="Picture of the author"
              style={{ margin: '10px', display: 'block' }}
            />
          ))}
        </Carousel>
      )}
      {product.thumbnail && (
        <Box sx={{ margin: '16px' }}>
          <Image
            src={product.thumbnail}
            width={'100'}
            height={'150'}
            objectFit="contain"
            alt="Picture of the author"
            style={{ height: 'auto' }}
          />
        </Box>
      )}
    </Box>
  )
}

export default ImageCarousel
