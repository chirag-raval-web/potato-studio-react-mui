// theme.js
import { createTheme } from "@mui/material/styles";

// Custom theme with primary colors and typography settings
const theme = createTheme({
  palette: {
    primary: {
      main: "#522076", // Your custom button color
    },
    secondary: {
      main: "#ff4081", // Example for a secondary color
    },
    text: {
      primary: "#333", // Primary text color
      secondary: "#777", // Secondary text color
    },
    // Add more color options as needed
  },
  typography: {
    fontFamily: "Inter, Arial, sans-serif", // Default font family
    h1: {
      fontFamily: "Sora, sans-serif", // Big text uses Sora
      fontSize: "2rem", // Adjust size as needed
      fontWeight: 700, // Adjust weight as needed
      color: "#522076", // Optional color for h1
    },
    h2: {
      fontFamily: "Sora, sans-serif", // Big text uses Sora
      fontSize: "1.5rem", // Adjust size as needed
      fontWeight: 600,
      color: "#522076",
    },
    body1: {
      fontFamily: "Inter", // Small text uses Inter
      fontSize: "1rem", // Adjust size as needed
      fontWeight: 400,
      "&:hover": {
        color: "black", // Prevent underline on hover as well
      },
    },
    body2: {
      fontFamily: "Inter, sans-serif", // Small text uses Inter
      fontSize: "0.875rem", // Adjust size as needed
      color: "#777", // Optional color for secondary body text
    },
    // Link styles to remove underline
    link: {
      textTransform: "none", // Disable uppercase transformation for links
      color: "#522076", // Link color
      textDecoration: "none", // Remove underline
      "&:hover": {
        textDecoration: "none", // Prevent underline on hover as well
      },
    },
    contact: {
      fontFamily: "Inter, sans-serif", // Small text uses Inter
      fontSize: "1rem", // Adjust size as needed
      color: "#fff", // Optional color for secondary body text
      fontWeight: 400,
      "&:hover": {
        color: "red", // Prevent underline on hover as well
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "16px 32px",
          borderRadius: "100px",
          backgroundColor: "#522076", 
          transition: "background-color 0.3s ease, transform 0.1s ease",
          color: "#fff",
          "&:active": {
            transform: "scale(0.95)", 
            backgroundColor: '#522090', 
          },
        },
      },
    },
  },
});

export default theme;
