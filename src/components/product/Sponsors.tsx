import Box from '@mui/material/Box'
import Image from 'next/image'
import brand1 from '../../assets/img/brand1.png'
import brand2 from '../../assets/img/brand2.png'
import brand3 from '../../assets/img/brand3.png'
import brand4 from '../../assets/img/brand4.png'
import brand5 from '../../assets/img/brand5.png'
import brand6 from '../../assets/img/brand6.png'

const brands = [brand1, brand2, brand3, brand4, brand5, brand6]

function Sponsors() {
  return (
    <Box
      sx={{
        display: { xs: 'block', md: 'flex' },
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginY: '50px',
      }}
    >
      {brands.map((brand, index) => (
        <Box
          key={index}
          sx={{ height: '100%', my: { xs: '70px', md: '24px' } }}
        >
          <Image
            src={brand}
            alt={`Brand ${index + 1}`}
            style={{ margin: 'auto', display: 'block' }}
          />
        </Box>
      ))}
    </Box>
  )
}

export default Sponsors
