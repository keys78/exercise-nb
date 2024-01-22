import { ReactNode } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import { useRouter } from 'next/router'
import DiscountCallout from '../shared/DiscountCallout '
import Footer from '../shared/Footer'
import Header from '../shared/Navbar'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter()
  const isProductDetailsPage = router.pathname.includes('/product')

  return (
    <>
      <AppBar position="fixed" sx={{ boxShadow: 'none' }}>
        <DiscountCallout />
        <Header />
      </AppBar>
      <Box
        component="main"
        sx={{
          mt: { xs: '64px', md: '140px' },
        }}
      >
        {children}
      </Box>
      <Footer bgColor={isProductDetailsPage ? '#FFFFFF' : '#FAFAFA'} />
    </>
  )
}
