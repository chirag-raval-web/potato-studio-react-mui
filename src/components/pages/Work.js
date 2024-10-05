import Grid from "@mui/material/Grid2";
import React, { useEffect, useState } from "react";
import { SectionTitle } from "../otherSection";
import EastIcon from "@mui/icons-material/East";
import { Button, Typography, Box, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import workApi from "../api/WorkApi";

const Work = () => {
  const [workData, setWorkData] = useState([]);
  const isTab = useMediaQuery ("(max-width: 1223px)");
  useEffect(() => {
    setWorkData(workApi.workPageData);
  }, []);

  const workSlug = (workTitle) => {
    return workTitle
      .toLowerCase()
      .replace(/[\/]/g, "-")
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, ""); // Removes non-word characters except hyphens
  };

  return (
    <Grid
      container
      spacing={"100px"}
      padding={isTab ?  '40px 10px' : "140px 106px"}
      direction="column"
    >
      <SectionTitle title={"Our Finest Work"} />
      <Grid container spacing={'40px'} >
      {workData.map((work, index) => (
          <Grid  key={index} container alignItems={'center'} component={Link} to={`/work/${workSlug(work.title)}`} sx={{textDecoration:'none'}} size={isTab ? 12:6} spacing={2.5} gap={2.5} direction={'column'} >
            {/* <Grid size={12}
            sx={{overflow:'hidden', scale: 0.9,}}
            justifyContent={"center"}
            borderRadius={"20px"}
            >
              <Box 
              sx={{
                scale: 1,
                transition: "0.3s ease, transform 0.1s ease",
                "&:hover": {
                  scale: 1.2,
                },
              }}
              >
                <img src={work.img} alt="" />
              </Box>
            </Grid> */}
            <Grid
  item
  xs={12}
  sx={{
    overflow: 'hidden',
    scale: 0.9,
    display: 'flex',           
    justifyContent: 'center',
    borderRadius: '20px',
  }}
>
  <Box
    sx={{
      width: '100%',           
      height: 'auto',           
      position: 'relative',    
      maxWidth: '100%',         
      transition: "0.3s ease, transform 0.3s ease",
      "&:hover": {
        transform: "scale(1.2)",  
      },
    }}
  >
    <img
      src={work.img}
      alt={work.title}
      style={{
        width: '100%',         // Responsive width
        height: 'auto',        // Maintain aspect ratio
        display: 'block',      // Ensure the image is block-level to avoid extra spacing
        borderRadius: '20px',  // Apply border radius to the image itself
      }}
    />
  </Box>
</Grid>

            <Grid size={12} >
            <Typography variant="h4" color="initial">
                  {work.title}
                </Typography>
            <Grid container spacing={"10px"}>
                  {work.workDone.map((task, i) => (
                    <Box padding={"10px"} border={"1px solid #E3E3E3"}>
                      <Typography
                        key={i}
                        variant="linkLight"
                        color="black50"
                        sx={{ cursor: "default" }}
                      >
                        {task}
                      </Typography>
                    </Box>
                  ))}
                </Grid>
                
            </Grid>
          </Grid>
      ))}
      </Grid>
    </Grid>
  );
};

export default Work;
