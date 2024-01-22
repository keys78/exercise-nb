import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { CardActionArea } from '@mui/material'
import IconComponent from '../../assets/svg/IconComponent'

interface ServiceCardProps {
  iconName: string
  title: string
  description: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  iconName,
  title,
  description,
}) => (
  <Box
    gridColumn="span 4"
    sx={{ height: '100%', margin: '8px', px: { md: '40px', xs: '0px' } }}
  >
    <Card
      sx={{
        maxWidth: { md: '200%', xs: '100%' },
        height: '100%',
        boxShadow: 'none',
      }}
    >
      <IconComponent
        name={iconName}
        style={{ margin: 'auto', display: 'block' }}
      />
      <CardActionArea>
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
            fontSize="24px"
          >
            {title}
          </Typography>
          <Typography
            variant="subtitle2"
            fontWeight={400}
            textAlign="center"
            color="#737373"
            fontSize="14px"
            marginTop="8px"
            marginBottom="8px"
            maxWidth="230px"
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Box>
)

function Services() {
  return (
    <Box sx={{ mt: '80px', mb: '24px', mx: { md: '56px', xs: '16px' } }}>
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
        whiteSpace="nowrap"
      >
        THE BEST SERVICES
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

      <Box
        sx={{ display: { xs: 'block', md: 'grid' }, mt: '80px' }}
        gridTemplateColumns="repeat(12, 1fr)"
        gap={1}
      >
        <ServiceCard
          iconName="easy-wins"
          title="Easy Wins"
          description="Get your best-looking smile now!"
        />
        <ServiceCard
          iconName="concrete"
          title="Concrete"
          description="Defalcate is most focused on helping you discover your most beautiful smile"
        />
        <ServiceCard
          iconName="hack-growth"
          title="Hack Growth"
          description="Overcome any hurdle or any other problem."
        />
      </Box>
    </Box>
  )
}

export default Services
