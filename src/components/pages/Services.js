import React from 'react'
import Faq from '../Faq'
import { Box } from '@mui/material'
import { ServicesItems } from '../otherSection'
import Engagement from './services/Engagement'
import Approach from './services/Approach'
import Industry from './services/Industry'
const Services = () => {
  return (
    <Box>
      <ServicesItems/>
      <Engagement />
      <Approach />
      <Industry/>
      <Faq/>
    </Box>
  )
}

export default Services
