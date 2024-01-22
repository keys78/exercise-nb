import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { CardActionArea } from '@mui/material'
import Image, { StaticImageData } from 'next/image'
import IconComponent from '../../assets/svg/IconComponent'
import postOne from '../../assets/img/post_one.png'
import postTwo from '../../assets/img/post_two.png'
import postThree from '../../assets/img/post_three.png'

interface PostCardProps {
  imageSrc: StaticImageData
  tags: string[]
  title: string
  description: string
  date: string
  comments: number
}

const PostCard: React.FC<PostCardProps> = ({
  imageSrc,
  tags,
  title,
  description,
  date,
  comments,
}) => (
  <Box gridColumn="span 4" sx={{ height: '100%', margin: '4px' }}>
    <CardActionArea>
      <Card sx={{ maxWidth: '100%', height: '100%' }}>
        <Box sx={{ position: 'relative' }}>
          <Image
            src={imageSrc}
            alt="Featured Post image"
            style={{ margin: 'auto', display: 'block', width: '100%' }}
          />
          <Typography
            variant="subtitle2"
            fontWeight={700}
            textAlign="center"
            color="#fff"
            fontSize="14px"
            mr="15px"
            bgcolor="#E74040"
            position="absolute"
            padding="4px 16px"
            top="20px"
            left="20px"
            borderRadius={'3px'}
          >
            NEW
          </Typography>
        </Box>
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              mb: '16px',
            }}
          >
            {tags.map((tag, index) => (
              <Typography
                key={index}
                variant="subtitle2"
                fontWeight={400}
                textAlign="center"
                color={index === 0 ? '#8EC2F2' : '#737373'}
                fontSize="12px"
                mr="15px"
              >
                {tag}
              </Typography>
            ))}
          </Box>
          <Typography
            variant="subtitle2"
            fontWeight={400}
            color="#252B42"
            fontSize="20px"
          >
            {title}
          </Typography>
          <Typography
            variant="subtitle2"
            fontWeight={400}
            color="#737373"
            fontSize="14px"
            marginTop="8px"
            marginBottom="8px"
          >
            {description}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              my: '20px',
            }}
          >
            <Box sx={{ display: 'flex' }}>
              <IconComponent
                name="clock"
                style={{
                  margin: 'auto',
                  display: 'block',
                  marginRight: '8px',
                }}
              />
              <Typography
                variant="subtitle2"
                fontWeight={400}
                textAlign="center"
                color="#737373"
                fontSize="12px"
                marginTop="8px"
                marginBottom="8px"
              >
                {date}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <IconComponent
                name="comment"
                style={{
                  margin: 'auto',
                  display: 'block',
                  marginRight: '8px',
                }}
              />
              <Typography
                variant="subtitle2"
                fontWeight={400}
                textAlign="center"
                color="#737373"
                fontSize="12px"
                marginTop="8px"
                marginBottom="8px"
              >
                {comments} comments
              </Typography>
            </Box>
          </Box>
          <Box>
            <IconButton aria-label="delete">
              <Typography
                variant="subtitle2"
                fontWeight={700}
                color="#737373"
                fontSize="14px"
                mr="4px"
                p={'20px'}
                borderRadius={'20px'}
              >
                Learn More
              </Typography>
              <ArrowForwardIosIcon style={{ color: '#23A6F0' }} />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </CardActionArea>
  </Box>
)

interface ServicesProps {}

const FeaturedPosts: React.FC<ServicesProps> = () => {
  const posts: PostCardProps[] = [
    {
      imageSrc: postOne,
      tags: ['Trending', 'New'],
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: '22 April 2021',
      comments: 10,
    },
    {
      imageSrc: postTwo,
      tags: ['Google', 'Trending', 'New'],
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: '22 April 2021',
      comments: 10,
    },
    {
      imageSrc: postThree,
      tags: ['Google', 'Trending', 'New'],
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: '22 April 2021',
      comments: 10,
    },
  ]

  return (
    <Box
      sx={{
        mt: '192px',
        mb: '112px',
        // mx: { xs: '0', md: { xs: '0', md: '56px' } },
      }}
    >
      <Typography
        variant="subtitle2"
        fontWeight={700}
        textAlign="center"
        color="#23A6F0"
        fontSize="14px"
      >
        Practice Advice
      </Typography>
      <Typography
        variant="subtitle2"
        fontWeight={700}
        textAlign="center"
        color="#252B42"
        fontSize="40px"
      >
        Featured Post
      </Typography>

      <Box
        sx={{
          display: 'grid',
          mt: '80px',
          mx: { xs: '0', md: '56px' },
        }}
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          md: 'repeat(12, 1fr)',
        }}
        gap={{
          xs: 3,
          md: 1,
        }}
      >
        {posts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </Box>
    </Box>
  )
}

export default FeaturedPosts
