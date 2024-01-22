import { Box, Tabs, Tab, Typography } from '@mui/material'
import Image from 'next/image'
import unsplash from '../../assets/img/unsplash.png'

function AboutProduct() {
  return (
    <Box
      sx={{
        padding: { xs: '8px 14px', md: '8px 147px' },
      }}
    >
      <Box sx={{ padding: '24px' }}>
        <Tabs aria-label="product info tabs" centered>
          <Tab label="Descriptions" />
          <Tab label="Additional Information" />
          <Tab label="Reviews (0)" />
        </Tabs>
      </Box>
      <Box
        sx={{
          display: { xs: 'block', md: 'grid' },
        }}
        gridTemplateColumns="repeat(10, 1fr)"
        gap={1}
        paddingTop={'44px'}
        borderTop={'1px solid #ECECEC'}
      >
        <Box gridColumn="span 6" sx={{ height: '100%', margin: '8px' }}>
          <Typography
            variant="h2"
            fontWeight={700}
            color="#252B42"
            fontSize="24px"
            marginBottom={'14px'}
          >
            the quick fox jumps over
          </Typography>

          <Typography
            variant="subtitle2"
            fontWeight={400}
            color="#737373"
            fontSize="14px"
            marginBottom={'30px'}
            paddingRight={'150px'}
          >
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </Typography>
          <Typography
            variant="subtitle2"
            fontWeight={400}
            color="#737373"
            fontSize="14px"
            marginBottom={'30px'}
            paddingRight={'160px'}
            paddingLeft={'16px'}
            borderLeft={'3px solid #23856D'}
          >
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </Typography>
          <Typography
            variant="subtitle2"
            fontWeight={400}
            color="#737373"
            fontSize="14px"
            marginBottom={'30px'}
            paddingRight={'150px'}
          >
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </Typography>
        </Box>
        <Box gridColumn="span 4" sx={{ height: '100%', margin: '8px' }}>
          <Image
            src={unsplash}
            alt="Some text"
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default AboutProduct
