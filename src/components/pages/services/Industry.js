import React from 'react'
import Grid from '@mui/material/Grid2'
import { SectionTitle } from '../../otherSection'
import Typography from '@mui/material/Typography'
import { industryData } from '../../api/serviceApi'
import { useMediaQuery } from '@mui/material'
const Industry = () => {
  const isTab = useMediaQuery("(max-width: 1223px)");
  const isMobile = useMediaQuery("(max-width: 787px)");

  return (
    <Grid container padding={isTab ? '50px 10px' : '140px 106px'} spacing={'100px'}>
        <SectionTitle title={'Our Diverse Industry Expertise'} />
        <Grid container spacing={'40px'} justifyContent={'space-between'}>
            {
                industryData.map((item,index)=>(
                    <Grid container key={index} size={isTab ? 12 : 3} direction={'column'} justifyContent={'space-between'} padding={'40px'}>
                    <Typography variant="h5" color="initial">{item.title}</Typography>
                    <img src={item.icon } alt="" />
                </Grid>
                ))
            }
           
        </Grid>
    </Grid>
  )
}

export default Industry