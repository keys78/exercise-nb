import type { NextPage } from 'next'
import Head from 'next/head'
import { Box } from '@mui/material'
import Services from '../components/home/Services'
import FeaturedProducts from '../components/home/FeaturedProducts'
import BottomBannerCallout from '../components/home/BottomBannerCallout'
import Ratings from '../components/home/Ratings'
import HeroDisplay from '../components/home/HeroDisplay'
import FeaturedPosts from '../components/home/FeaturedPosts'

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Bondage e-commerce</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
      <html lang="en" />
    </Head>
    <Box sx={{ padding: { xs: '8px 14px', lg: '80px 147px' } }}>
      <HeroDisplay />
      <FeaturedProducts />
      <Services />
      <FeaturedPosts />
      <Ratings />
    </Box>
    <BottomBannerCallout />
  </div>
)

export default Home
