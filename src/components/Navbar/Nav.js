import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close"; // Close icon
import { useMediaQuery } from "@mui/material";

// Logo Component
const Logo = () => (
  <Box component={Link} to={"/"} sx={{ display: "flex", alignItems: "center" }}>
    <img src="media/logo/nav-logo.webp" alt="Logo" width={126} height={52} />
  </Box>
);

// NavMenu Component
const NavMenu = ({flexDirection}) => {
  const location = useLocation(); // Get the current location
  const MenuItems = ["Home", "Services", "Work", "About us", "Blog", "Career"];

  // Function to generate URLs dynamically
  const getUrl = (item) => {
    if (item === "Home") return "/";
    return `/${item.toLowerCase().replace(/\s+/g, "-")}`; // Replace spaces with hyphens for URL
  };

  return (
    <Box sx={{ display: "flex", gap: { md: 4, sm: 2, xl: 6 ,xs:2}, flexDirection:flexDirection }}>
      {MenuItems.map((item, index) => (
        <Typography
          variant="body1"
          component={Link}
          key={index}
          to={getUrl(item)}
          sx={{
            cursor: "pointer",
            textDecoration: "none",
            color: location.pathname === getUrl(item) ? "black" : "gray", // Set color based on URL
          }}
        >
          {item}
        </Typography>
      ))}
    </Box>
  );
};
const ContactBtn = () => {
  return (
    <Button
      component={Link}
      variant="contained"
      to="/contact"
      disableRipple
      sx={{
        marginLeft: "20px",
        backgroundColor: "#522076",
        color: "#fff",
      }}
    >
      Contact
    </Button>
  );
};
// Custom Menu Button with SVG
const CustomMenuButton = ({ onClick }) => {
  return (
    <IconButton onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        style={{ width: "24px", height: "24px" }} // Adjust size if needed
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </IconButton>
  );
};

// MenuDrawer Component
const MenuDrawer = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control drawer

  // Function to toggle drawer
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpen(open);
  };

  return (
    <>
      {/* Menu Button */}
      <CustomMenuButton onClick={toggleDrawer(true)} />

      {/* Drawer */}
      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
        {/* Drawer content */}
        <Box
          sx={{ width: 250, padding:3,gap:3 ,display:"flex",flexDirection:'column' ,gap:2 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Box>
          <IconButton
            onClick={toggleDrawer(false)}
            sx={{ margin: "16px", float: "right" }}
          >
            <CloseIcon />
          </IconButton>
          <Logo />
          </Box>
          <NavMenu flexDirection={'column'} />
          
          <ContactBtn />
        </Box>
      </Drawer>
    </>
  );
};

// Navbar Component
const Navbar = () => {
  const isMobile = useMediaQuery("(max-width: 787px)");

  return (
    <AppBar
      sx={{
        padding: {
          xs: "1.875rem  ",
          sm: "1.875rem  0",
          md: "1.875rem 1.625rem",
          lg: "1.875rem 6.625rem",
          xl: "1.875rem 6.625rem",
        },
        background: "white",
        boxShadow: "none",
        borderBottom: 1,
        borderColor: "#E3E3E3",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", color: "black" }}>
        {/* Logo in Navbar */}
        <Logo />

        {isMobile ? (
          <MenuDrawer />
        ) : (
          <>
            <NavMenu />
            <ContactBtn />
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
