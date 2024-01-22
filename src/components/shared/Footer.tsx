import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import { Button, TextField } from '@mui/material'
import IconComponent from '../../assets/svg/IconComponent'

function Footer({ bgColor }: { bgColor?: '#FAFAFA' | '#FFFFFF' }) {
  const footerStyle = {
    minHeight: '120px',
    display: 'flex',
    // backgroundColor: '#FAFAFA',
    backgroundColor: bgColor === '#FAFAFA' ? '#FAFAFA' : '#FFFFFF', // Adjust colors accordingly
    justifyContent: { xs: 'center', md: 'space-between' },
    flexFlow: { xs: 'column', md: 'row' },
    alignItems: { xs: 'start', md: 'center' },
    paddingX: { xs: '20px', md: '140px' },
    borderBottom: '1px solid #efebeb',
  }

  const links = [
    {
      title: 'Company Info',
      items: ['About Us', 'Carrier', 'We are hiring', 'Blog'],
    },
    { title: 'Legal', items: ['About Us', 'Carrier', 'We are hiring', 'Blog'] },
    {
      title: 'Features',
      items: [
        'Business Marketing',
        'User Analytic',
        'Live Chat',
        'Unlimited Support',
      ],
    },
    {
      title: 'Resources',
      items: ['IOS & Android', 'Watch a Demo', 'Customers', 'API'],
    },
  ]

  return (
    <>
      <Box sx={footerStyle}>
        <Typography
          variant="subtitle2"
          fontWeight={700}
          textAlign="left"
          color="#252B42"
          fontSize="24px"
        >
          Bandage
        </Typography>
        <Box>
          {['facebook', 'instagram', 'twitter'].map((name) => (
            <IconButton
              key={name}
              color="primary"
              aria-label="add to shopping cart"
            >
              <IconComponent name={name} />
            </IconButton>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          display: { xs: 'block', md: 'grid' },
          mt: '50px',
          paddingX: { xs: '20px', md: '140px' },
          marginBottom: '50px',
        }}
        gridTemplateColumns={{
          xs: 'repeat(6, 1fr)',
          md: 'repeate(1. 1fr)',
          lg: 'repeat(12, 1fr)',
        }}
        gap={1}
      >
        {links.map(({ title, items }) => (
          <Box key={title} gridColumn="span 2" sx={{ height: '100%' }}>
            <Typography
              variant="subtitle2"
              fontWeight={700}
              textAlign="left"
              color="#252B42"
              fontSize="16px"
            >
              {title}
            </Typography>
            <List dense={false}>
              {items.map((item) => (
                <ListItem key={item} sx={{ paddingLeft: 0 }}>
                  <a href={'#'}>
                    <Typography
                      variant="subtitle2"
                      fontWeight={700}
                      textAlign="left"
                      color="#737373"
                      fontSize="14px"
                    >
                      {item}
                    </Typography>
                  </a>
                </ListItem>
              ))}
            </List>
          </Box>
        ))}

        <Box gridColumn="span 4" sx={{ height: '100%' }}>
          <Typography
            variant="subtitle2"
            fontWeight={700}
            textAlign="left"
            color="#252B42"
            fontSize="16px"
          >
            Get In Touch
          </Typography>
          <Box
            sx={{
              display: 'flex',
              marginTop: '20px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              overflow: 'hidden',
              width: { md: '300px', xs: '100%' },
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Your Email"
              sx={{
                flexGrow: 1,
                border: 'none',
                '& fieldset': { border: 'none' },
              }}
            />
            <Button
              sx={{
                backgroundColor: '#23a6f0',
                color: 'white',
                borderTopLeftRadius: '0',
                borderBottomLeftRadius: '0',
              }}
              variant="contained"
              disableElevation
            >
              Subscribe
            </Button>
          </Box>

          <Typography
            variant="subtitle2"
            fontWeight={400}
            textAlign="left"
            color="#737373"
            fontSize="12px"
            marginTop={'8px'}
          >
            Lore imp sum dolor Amit
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          minHeight: '74px',
          display: 'flex',
          backgroundColor: '#FAFAFA',
          justifyContent: { xs: 'center', md: 'space-between' },
          flexFlow: { xs: 'column', md: 'row' },
          alignItems: { xs: 'start', md: 'center' },
          paddingX: { xs: '20px', md: '140px' },
        }}
      >
        <Typography
          variant="subtitle2"
          fontWeight={700}
          textAlign="left"
          color="#737373"
          fontSize="14px"
        >
          Made With Love By Finland All Right Reserved.
        </Typography>
      </Box>
    </>
  )
}

export default Footer
