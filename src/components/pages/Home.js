import React from 'react'
import Button from '@mui/material/Button'
import { Box } from '@mui/material'
import Faq from '../Faq'
import { ServicesItems } from '../otherSection'
import PartnerSlider from './Home/PartnerSlider'
import ViewWork from './Home/ViewWork'
import TestimonialSlider from './Home/TestimonialSlider'
 
const Home = () => {
  return (
 <Box>
  <PartnerSlider/>
  <ServicesItems/>
  <ViewWork/>
  <TestimonialSlider/>
  <Faq/>
 </Box>
  )
}

export default Home
