import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";
import { ServicesData } from "./api/serviceApi";

export const SectionTitle = ({ title }) => {
  return (
    <Typography display="flex" alignItems="center" variant="h3" color="initial">
      <img
        src="media/smalll-icons/sectionArrow.webp"
        alt="sectionArrow"
        width="24px"
      />{" "}
      {title}
    </Typography>
  );
};

const StartProject = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          gap={{ xs: "32px", sm: "40px", md: "56px" }} // Responsive gap
          padding={{ xs: "80px 20px", sm: "100px 40px", md: "140px 106px" }} // Responsive padding
          sx={{ background: "#FCFCFC" }}
        >
          <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            textAlign="center"
            gap={{ xs: "12px", sm: "16px" }} // Responsive gap
          >
            <Typography
              variant="h2"
              sx={{
                color: "#EA5A0B",
                fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
              }}
            >
              Ready to start a project?
            </Typography>
            <Typography
              variant="body"
              color="gray"
              sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" } }}
            >
              Let’s craft brilliance together.
            </Typography>
          </Box>
          <Button
            component={Link}
            variant="secondary"
            to="/contact"
            disableRipple
          >
            <Typography variant="linkLight">Contact</Typography>
          </Button>
        </Box>
      )}
    </>
  );
};
 
export const ServicesItems = () => {
  const location = useLocation();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      sx={{
        padding: {
          xs: '40px 16px',  // Padding for extra small devices
          sm: '80px 32px',  // Padding for small devices
          md: '100px 64px', // Padding for medium devices
          lg: '140px 106px', // Padding for large and extra-large devices
        },
        gap: {
          xs: '40px', // Smaller gap for mobile
          sm: '60px', // Moderate gap for tablets
          md: '80px', // Larger gap for laptops
          lg: '100px', // Full gap for larger screens
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '24px',
        }}
      >
        {ServicesData.map((service, index) => {
          const serviceSlug = service.title
            .toLowerCase()
            .replace(/[\/]/g, "-") // Replace slashes with hyphens
            .replace(/ /g, "-") // Replace spaces with hyphens
            .replace(/[^\w-]+/g, ""); // Remove any non-word characters

          return (
            <Box
              key={index}
              component={Link}
              to={`/services/${serviceSlug}`}
              sx={{
                width: {
                  xs: '100%', // 1 item per row for mobile
                  sm: 'calc(50% - 12px)', // 2 items per row for small devices
                  md: 'calc(33.33% - 16px)', // 3 items per row for medium devices
                  lg: 'calc(14.2% - 18px)', // 4 items per row for large devices
                },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: {
                  xs: '20px',  // Smaller padding for mobile
                  sm: '30px',  // Moderate padding for tablets
                  md: '40px',  // Larger padding for laptops
                },
                textDecoration: 'none',
                textAlign: 'center',
                borderRadius: '30px',
                border: '1px solid #E3E3E3',
                gap: '20px',
              }}
            >
              <img src={service.src} alt={service.title} width={100} />
              <Typography variant="h5" color="initial">
                {service.title}
              </Typography>
            </Box>
          );
        })}
      </Box>

      <Button
        variant="primary"
        component={Link}
        to="/services"
        sx={{
          alignSelf: 'center', // Center the button for all breakpoints
          padding: '12px 24px', // Adjust button padding
          marginTop: {
            xs: '40px',  // Space between items and button on mobile
            sm: '60px',  // More space on tablets
            md: '80px',  // Larger space on medium screens
          },
        }}
        disableRipple
        endIcon={<EastIcon style={{ color: '#EA5A0B' }} />}
      >
        Learn more
      </Button>
    </Box>
  );
};



export default StartProject;
