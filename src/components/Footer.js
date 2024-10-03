import {
  Box,
  Typography,
  Button,
  Divider,
  Icon,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import EastIcon from "@mui/icons-material/East";
import { Link } from "react-router-dom";

const flexBox = (direction = "row", gap = "0px", spaceBetween = false) => ({
  display: "flex",
  flexDirection: direction,
  gap: gap,
  ...(spaceBetween && { justifyContent: "space-between" }),
});

const LetsTalk = () => {
  const isMobile = useMediaQuery("(max-width: 787px)");

  return (
    <Box sx={flexBox("column", "64px")}>
      <Box
        sx={flexBox(isMobile ? "column" : "row", isMobile ? "24px" : "0", true)} // Use space-between for mobile
      >
        <Typography variant="h2" color="primary">
          Let's Talk!
        </Typography>
        <Button
          variant="primary"
          sx={{
            width: isMobile ? "100%" : "auto", // Full width on mobile
            alignSelf: isMobile ? "center" : "flex-start", // Center it on mobile
          }}
          disableRipple
          endIcon={<EastIcon style={{ color: "#EA5A0B" }} />}
        >
          Get in touch
        </Button>
      </Box>
      <Divider variant="middle" style={{ border: "1px solid white" }} />
    </Box>
  );
};

const FooterData = () => {
  const isMobile = useMediaQuery("(max-width: 787px)");
  const FooterMenu = ["Home", "Services", "Work", "About us", "Blog", "Career"];
  
  const getUrl = (item) => {
    if (item === "Home") return "/";
    return `/${item.toLowerCase().replace(/\s+/g, "-")}`; // Replace spaces with hyphens for URL
  };

  return (
    <Box 
      sx={{ 
        ...flexBox(isMobile ? 'column' : 'row', 0, true), 
        gap: { xl: '124px', lg: '40px', md: '40px', sm: '30px', xs: '30px' } // Adjusted gaps for better responsiveness
      }}
    >
      <Box 
        sx={{ 
          ...flexBox("column", 0, true),
          width: '100%', // Full width on mobile
          maxWidth: { xs: '100%', md: '200px', lg: '396px', xl: '396px' },
          order: isMobile ? 1 : 1
        }}
      >
        <img src="media/logo/footer-logo.svg" alt="Footer Logo" width={200} />
        {!isMobile && <PrivacySection />}
      </Box>

      <Box 
        sx={{ 
          ...flexBox("column", '20px', true), 
          width: '100%', // Full width on mobile
          maxWidth: { xs: '100%', sm: '100%', md: '200px', lg: '200px', xl: '292px' }, 
          order: isMobile ? 3 : 2 
        }}
      >
        <Box sx={flexBox("column", "24px")}>
          <Typography variant="h5" color="primary">
            Contact Us
          </Typography>
          <Typography variant="body" color="primary">
            hello@thepotatostudio.co.in
          </Typography>
        </Box>
        
        <Box sx={flexBox("column", "24px")}>
          <Typography variant="h5" color="primary">
            Office
          </Typography>
          <Typography variant="body" color="primary">
            1st floor/ 938, Sri Krsna Fortitude, BTM 4th Stage, Vijaya Bank Layout, Bengaluru, Karnataka 560076
          </Typography>
        </Box>
        {isMobile && <PrivacySection />}
      </Box>

      <Box 
        sx={{ 
          ...flexBox('column', '32px', true),
          width: '100%', // Full width on mobile
          maxWidth: { xs: '100%', sm: '189px', md: '189px', lg: '189px', xl: '189px' },
          order: isMobile ? 2 : 3
        }}
      >
        {FooterMenu.map((item, index) => (
          <Typography
            variant="linkLight"
            color="primary"
            component={Link}
            key={index}
            to={getUrl(item)}
          >
            {item}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

const PrivacySection = () => {
  const socialIcons = [
    { src: "/media/socialIcon/behance.svg", alt: "Behance Icon" },
    { src: "/media/socialIcon/dribbble.svg", alt: "Dribbble Icon" },
    { src: "/media/socialIcon/instagram.svg", alt: "Instagram Icon" },
    { src: "/media/socialIcon/linkedin.svg", alt: "LinkedIn Icon" },
  ];
  return (
    <Box sx={flexBox("column", "32px")}>
      <Box sx={flexBox("row", "30px")}>
        {socialIcons.map((icon) => (
          <img key={icon.alt} src={icon.src} alt={icon.alt} />
        ))}
      </Box>
      <Box sx={flexBox("column", "8px")}>
        <Typography variant="linkLight" color="primary">
          © The Potato Studio 2024. All rights reserved.
        </Typography>
        <Typography
          variant="linkLight"
          color="gray"
          sx={{
            ...flexBox("row", "4px"),
            alignContent: "center",
          }}
        >
          Our Privacy Policy
          <EastIcon style={{ color: "#B0B0B0", fontSize: "18px" }} />
        </Typography>
      </Box>
    </Box>
  );
};
 
const Footer = () => {
  const isMobile = useMediaQuery("(max-width: 787px)");
  return (
    <Box
      sx={{
        background: "#522076",
        m: 0,  
        display: "flex",
        flexDirection: "column",
        maxHeight: "1440px",
        height: "auto",
        padding:{ xs: '40px 20px', sm: '60px 30px', md: '100px 70px', lg: '120px 90px', xl: '140px 106px' },

        gap: "104px",
      }}
    >
      <LetsTalk />
      <FooterData />
    </Box>
  );
};

export default Footer;

 
