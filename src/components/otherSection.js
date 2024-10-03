import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

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
            <Typography variant="h2" sx={{ color: "#EA5A0B", fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" } }}>
              Ready to start a project?
            </Typography>
            <Typography variant="body" color="gray" sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" } }}>
              Let’s craft brilliance together.
            </Typography>
          </Box>
          <Button component={Link} variant="secondary" to="/contact" disableRipple>
            <Typography variant="linkLight">Contact</Typography>
          </Button>
        </Box>
      )}
    </>
  );
};

export default StartProject;
