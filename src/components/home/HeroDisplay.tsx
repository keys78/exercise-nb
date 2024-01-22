import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Image, { StaticImageData } from 'next/image'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { Container } from '@mui/material'
import pdOne from '../../assets/img/pd_one.jpg'
import pdTwo from '../../assets/img/pd_two.jpg'
import pdThree from '../../assets/img/pd_three.jpg'
import pdFour from '../../assets/img/pd_four.jpg'

interface ProductItemProps {
  image: StaticImageData
  title: string
  subtitle: string
}

const Item = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '100%',
  boxShadow: 'none',
  position: 'relative',
}))

function ProductItem({ image, subtitle, title }: ProductItemProps) {
  return (
    <Item>
      <Image
        src={image}
        alt="Some text"
        style={{ width: '100%', height: 'auto' }}
      />
      <Box position="absolute" top="24px" left="24px">
        <Typography
          variant="subtitle2"
          fontWeight={700}
          textAlign="left"
          color="#2DC071"
        >
          {subtitle}
        </Typography>
        <Typography
          variant="h1"
          fontSize="1.5rem"
          fontWeight={700}
          className="color-main"
        >
          {title}
        </Typography>
        <Typography
          variant="subtitle2"
          className="color-main"
          fontWeight={700}
          textAlign="left"
        >
          Read More
        </Typography>
      </Box>
    </Item>
  )
}

function HeroDisplay() {
  return (
    <Container>
      <Box
        sx={{ display: { xs: 'block', md: 'grid' }, mb: '80px' }}
        gridTemplateColumns="repeat(10, 1fr)"
        gap={1}
      >
        <Box gridColumn="span 4" sx={{ height: '100%' }}>
          <ProductItem image={pdOne} subtitle="5 items" title="Furniture" />
        </Box>
        <Box gridColumn="span 6">
          <Box sx={{ width: 1 }}>
            <Box
              gridTemplateColumns="repeat(12, 1fr)"
              gap={1}
              sx={{ display: { xs: 'block', md: 'grid' } }}
            >
              <Box gridColumn="span 12">
                <ProductItem
                  image={pdTwo}
                  subtitle="5 items"
                  title="Furniture"
                />
              </Box>
              <Box gridColumn="span 6">
                <ProductItem
                  image={pdThree}
                  subtitle="5 items"
                  title="Furniture"
                />
              </Box>
              <Box gridColumn="span 6">
                <ProductItem
                  image={pdFour}
                  subtitle="5 items"
                  title="Furniture"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default HeroDisplay
