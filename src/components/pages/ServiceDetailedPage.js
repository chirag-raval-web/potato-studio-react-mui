import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ServiceDetailedPageData } from "../api/serviceApi";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Grid2";
import StartProject from "../otherSection";

const NavigateServices = ({ currentServiceIndex }) => {
  const navigate = useNavigate();
  const navigateToService = (index) => {
    const nextService = ServiceDetailedPageData[index];
    const nextServiceSlug = nextService.title
      .toLowerCase()
      .replace(/[\/]/g, "-")
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, ""); // Normalize the title for URL
    navigate(`/services/${nextServiceSlug}`);
  };
  return (
    <Grid container justifyContent={"space-between"} padding={"100px 106px"}>
      {/* Previous Service */}
      <Grid
        container
        direction={"column"}
        gap={1}
        alignItems={"start"}
        onClick={
          currentServiceIndex > 0
            ? () => navigateToService(currentServiceIndex - 1)
            : null
        }
        sx={{
          cursor: currentServiceIndex > 0 ? "pointer" : "default",
        }}
      >
        <Typography variant="h6" color="black50">
          Previous service
        </Typography>
        <Typography variant="h5">
          {currentServiceIndex > 0
            ? ServiceDetailedPageData[currentServiceIndex - 1].title
            : ""}
        </Typography>
        <img
          src="\media\smalll-icons\leftArrow.svg"
          alt="Previous Service"
          
        />
      </Grid>

      {/* Next Service */}
      <Grid
        container
        direction={"column"}
        gap={1}
        alignItems={"end"}
        onClick={
          currentServiceIndex < ServiceDetailedPageData.length - 1
            ? () => navigateToService(currentServiceIndex + 1)
            : null
        }
        sx={{
          cursor:
            currentServiceIndex < ServiceDetailedPageData.length - 1
              ? "pointer"
              : "default",

          float: "end",
        }}
      >
        <Typography variant="h6" color="gray">
          Next service
        </Typography>
        <Typography variant="h5">
          {currentServiceIndex < ServiceDetailedPageData.length - 1
            ? ServiceDetailedPageData[currentServiceIndex + 1].title
            : ""}
        </Typography>
        <img
          src="\media\smalll-icons\RightSideArrow.svg"
          alt="Next Service"
          style={{
            opacity:
              currentServiceIndex < ServiceDetailedPageData.length - 1
                ? 1
                : 0.5,
          }}
        />
      </Grid>
    </Grid>
  );
};

export const ServiceDetailedPage = () => {
  const isMobile = useMediaQuery("(max-width: 787px)");
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const currentServiceIndex = ServiceDetailedPageData.findIndex((item) => {
    const serviceSlug = item.title
      .toLowerCase()
      .replace(/[\/]/g, "-")
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, ""); // Normalize the title for comparison

    return serviceSlug === serviceId;
  });

  const service = ServiceDetailedPageData[currentServiceIndex];

  const flexBox = (direction = "row", gap = "0px", spaceBetween = false) => ({
    display: "flex",
    flexDirection: direction,
    gap: gap,
    ...(spaceBetween && { justifyContent: "space-between" }),
  });

  return (
    <Box key={service.id}>
      <Box
        padding={isMobile ? "50px 10px" : "140px 105px"}
        boxSizing={"border-box"}
        sx={flexBox("column", "32px")}
      >
        <Typography variant="Aeonik" color="initial" width={"81px"}>
          services
        </Typography>
        <Typography variant="h2" color="initial">
          {service.title}
        </Typography>
      </Box>
      <img
        src={`${process.env.PUBLIC_URL}/media/services/${service.img1}`}
        alt=""
        width={"100%"}
      />

      <Grid
        container
        padding={isMobile ? "50px" : "140px 106px"}
        direction={"column"}
        gap={isMobile ? "50px" : "120px"}
      >
        <Grid container direction={"row"} spacing={2}>
          <Grid size={isMobile ? 12 : 6}>
            <Typography variant="h5" color="initial">
              {service.AboutItem.section1.item1.question}
            </Typography>
          </Grid>
          <Grid size={isMobile ? 12 : 6}>
            <Typography variant="body" color="gray">
              {service.AboutItem.section1.item1.answer}
            </Typography>
          </Grid>
        </Grid>
        <Grid container direction={"row"} spacing={2}>
          <Grid size={isMobile ? 12 : 6}>
            <Typography variant="h5" color="initial">
              {service.AboutItem.section1.item2.question}
            </Typography>
          </Grid>
          <Grid size={isMobile ? 12 : 6}>
            <Grid container direction={"column"} gap={4}>
              {Object.keys(service.AboutItem.section1.item2.answer).map(
                (key, index) => (
                  <Grid
                    size={12}
                    key={index}
                    gap={1}
                    container
                    direction={"column"}
                  >
                    <Typography variant="h6" color="black50">
                      {service.AboutItem.section1.item2.answer[key].title}
                    </Typography>
                    <Typography variant="body" color="gray">
                      {service.AboutItem.section1.item2.answer[key].description}
                    </Typography>
                  </Grid>
                )
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Box padding={{ xs: "10px", md: "0 106px" }}>
        <img
          src={`${process.env.PUBLIC_URL}/media/services/${service.img2}`}
          alt=""
          width={"100%"}
        />
      </Box>

      <Grid container padding="140px 106px" direction={"column"} gap={"120px"}>
        <Grid container direction={"row"} spacing={2}>
          <Grid size={isMobile ? 12 : 6}>
            <Typography variant="h5" color="initial">
              {service.AboutItem.section2.item1.question}
            </Typography>
          </Grid>
          <Grid size={isMobile ? 12 : 6}>
            <Grid container direction={"column"} gap={4}>
              {Object.keys(service.AboutItem.section2.item1.answer).map(
                (key, index) => (
                  <Grid
                    size={12}
                    key={index}
                    gap={1}
                    container
                    direction={"column"}
                  >
                    <Typography variant="h6" color="black50">
                      {service.AboutItem.section2.item1.answer[key].title}
                    </Typography>
                    <Typography variant="body" color="gray">
                      {service.AboutItem.section2.item1.answer[key].description}
                    </Typography>
                  </Grid>
                )
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction={"row"} spacing={2}>
          <Grid size={isMobile ? 12 : 6}>
            <Typography variant="h5" color="initial">
              {service.AboutItem.section2.item2.question}
            </Typography>
          </Grid>
          <Grid size={isMobile ? 12 : 6}>
            <Grid container direction={"column"} gap={4}>
              {Object.keys(service.AboutItem.section2.item2.answer).map(
                (key, index) => (
                  <Grid
                    size={12}
                    key={index}
                    gap={1}
                    container
                    direction={"column"}
                  >
                    <Typography variant="h6" sx={{ color: "#636363" }}>
                      {service.AboutItem.section2.item2.answer[key].title}
                    </Typography>
                    <Typography variant="body" color="gray">
                      {service.AboutItem.section2.item2.answer[key].description}
                    </Typography>
                  </Grid>
                )
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <NavigateServices currentServiceIndex={currentServiceIndex} />
    </Box>
  );
};
