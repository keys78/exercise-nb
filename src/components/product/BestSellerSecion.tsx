import { Box, Typography } from '@mui/material'
import ProductsDisplay from '../shared/ProductsDisplay'
import Sponsors from './Sponsors'

function BestSellerSecion() {
  return (
    <Box
      sx={{
        padding: { xs: '8px 14px', md: '8px 100px' },
        backgroundColor: '#FAFAFA',
      }}
    >
      <Box
        sx={{
          padding: { xs: '8px 14px', md: '8px 60px' },
          backgroundColor: '#FAFAFA',
          marginTop: '48px',
          marginBottom: '-72px',
        }}
      >
        <Typography
          variant="h2"
          fontWeight={700}
          color="#252B42"
          fontSize="24px"
          marginBottom={'24px'}
        >
          BESTSELLER PRODUCTS
        </Typography>
        <hr />
      </Box>
      <ProductsDisplay showLoadmoreBtn={false} />
      <Sponsors />
    </Box>
  )
}

export default BestSellerSecion
