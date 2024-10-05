import Grid from "@mui/material/Grid2";
import React, { useEffect, useState } from "react";
import { SectionTitle } from "../../otherSection";
import Typography from "@mui/material/Typography";
import { Box, Button, useMediaQuery } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import workApi from "../../api/WorkApi";
import { Link } from "react-router-dom";

const ViewWork = () => {
    const isTab = useMediaQuery ("(max-width: 1223px)");
  const [homeData, setHomeData] = useState([]);
  useEffect(() => {
    setHomeData(workApi.homeData); // Set the homeData from workApi
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
      direction={"column"}
      padding={ isTab?'50px 10px':"140px 106px"}
      spacing={"100px"}
    >
      <SectionTitle title={"Our Finest Work"} />
      <Grid
        container
        direction={"column"}
        spacing={"64px"}
       
        borderRight={"20px"}
      >
        {homeData.map((work, index) => (
          <Grid container padding={ isTab ? '0px' : "40px"} spacing={"40px"} key={index}>
            <Grid order={isTab ? 2 : 1}
                size={isTab ? 12 : 5}
              container
              direction={"column"}
              justifyContent={"space-between"}
            >
              <Grid container spacing={3} direction={"column"}>
                <Typography variant="h4" color="initial">
                  {work.title}
                </Typography>
                <Grid container spacing={"10px"}>
                  {work.workDone.map((task, i) => (
                    <Box padding={"10px"} border={"1px solid #E3E3E3"} key={i}>
                      <Typography
                        
                        variant="linkLight"
                        color="black50"
                        sx={{ cursor: "default" }}
                      >
                        {task}
                      </Typography>
                    </Box>
                  ))}
                </Grid>
                <Typography variant="body" color="gray">
                  {work.description}
                </Typography>
              </Grid>

              <Button
                component={Link}
                to={`/work/${workSlug(work.title)}`} // Dynamic URL using the work title
                sx={{ width: "100%" }}
                disableRipple
                variant="primary"
                color="primary"
                endIcon={<EastIcon color="error" />}
              >
                Open Case Study
              </Button>
            </Grid>
            <Grid size={isTab? 12 : 7} order={isTab ? 1 : 2}>
              <Grid
                justifyContent={"center"}
                sx={{ overflow: "hidden" }}
                borderRadius={"20px"}
              >
                <Box
                  sx={{
                    scale: 1.1,
                    transition: "0.3s ease, transform 0.1s ease",
                    "&:hover": {
                      scale: 1.2,
                    },
                  }}
                >
                  <img src={work.img} alt="" width={"100%"} />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        ))}
        <Grid container justifyContent={'center'}>
        <Button
                component={Link}
                to={'/work'}
                 
                disableRipple
                variant="primary"
                color="primary"
                endIcon={<EastIcon color="error" />}
              >
              See all work
              </Button>
        </Grid>
        
      </Grid>
    </Grid>
  );
};

export default ViewWork;
