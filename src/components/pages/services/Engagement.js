import React from "react";
import Grid from "@mui/material/Grid2";
import { SectionTitle } from "../../otherSection";
import { EngagementModels } from "../../api/serviceApi";
import Typography from "@mui/material/Typography";
import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";

const Engagement = () => {
  const isTab = useMediaQuery("(max-width: 1223px)");
  return (
    <Grid
      container
      padding={isTab ? "50px 0px" : "140px 106px"}
      spacing={"100px"}
    >
      <SectionTitle title={" Our Engagement Model"} />
      <Grid container spacing={"64px"}>
        {EngagementModels.map((model, index) => (
          <Grid
            container
            padding={"40px"}
            key={index}
            spacing={"40px"}
            border={"1px solid #E3E3E3"}
            borderRadius={"20px"}
          >
            <Grid container size={isTab ? 12 : 5}>
              <Grid container direction={"column"}>
                <Typography variant="h4" color="initial">
                  {model.title}
                </Typography>
                <Typography variant="body" color="gray">
                  {model.description}
                </Typography>
                <Grid container direction={"column"} spacing={1}>
                  <Typography variant="body" color="gray">
                    Some of the client we are engaged with
                  </Typography>
                  <Grid container spacing={3}>
                    {model.Logos.map((logos,index) => (
                      <img key={index} src={logos.src} width={85.45} />
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              size={isTab ? 12 : 7}
              sx={{ overflow: "hidden", borderRadius: "20px" }}
            >
              <Box
                sx={{
                  transform: "scale(1.1)", // Use transform for scaling
                  transition: "0.3s ease, transform 0.1s ease",
                  "&:hover": {
                    transform: "scale(1.2)", // Scaling on hover
                  },
                }}
              >
                <img
                  src={model.CoverImg}
                  alt="Model Cover"
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Engagement;
