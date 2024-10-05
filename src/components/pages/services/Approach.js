import React from 'react'
import { ApproachData } from '../../api/serviceApi'
import Grid from "@mui/material/Grid2"
import { SectionTitle } from '../../otherSection'
import { useMediaQuery, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { Box } from '@mui/system'

const Approach = () => {
  const isTab = useMediaQuery("(max-width: 1223px)");

  return (
    <Grid
      container
      spacing={"100px"}
    >
        <Box padding={isTab ? "50px 0px" : "140px 106px"} >
      <SectionTitle title={"Our Approach"} />
        </Box>
    <Grid container spacing={3} padding={'0 40px'}>
        {
            ApproachData.map((apr,index)=>(
                <Grid container direction={'column'} size={isTab ? 12 : 4} spacing={4} padding={'40px'}  key={index}>
                    <Grid container direction={'column'} spacing={'64px'}>
                        <img src={apr.img} width={302.67} />
                        <Grid container direction={'column'} spacing={1} >
                        <Typography variant="h5" color="initial">{apr.title}</Typography>
                        <Typography variant="Body" color="black50">{apr.description}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction={'column'} spacing={3}>
                        {apr.link.map((links,index)=>(
                            <Typography  key={index} variant="linkLight" component={Link} sx={{cursor:'default'}}  color="secondary">{links.text}</Typography>
                        ))}
                    </Grid>
                </Grid>
            ))
        }
    </Grid>
      </Grid>
  )
}

export default Approach