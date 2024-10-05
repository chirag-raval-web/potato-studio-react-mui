import React from 'react'
import Faq from '../Faq'
import { Box } from '@mui/material'
import { ServicesItems } from '../otherSection'
import Engagement from './services/Engagement'
import Approach from './services/Approach'
const Services = () => {
  return (
    <Box>
      <ServicesItems/>
      <Engagement />
      <Approach />
      <Faq/>
    </Box>
  )
}

export default Services
