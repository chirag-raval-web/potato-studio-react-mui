import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF', // Primary color
    },
    secondary: {
      main: '#522076', 
    },
    gray:{
      main: '#B0B0B0',
    },
    common:{
      main: '#000',
    },
    black50:{
      main:'#636363'
    }
  },
  typography: {
    fontFamily: [
      'Inter',
      'Sora',
      'Inter Tight',
      'sans-serif'
    ].join(','),
    h1: {
      fontFamily: 'Sora',
      fontSize: '5.0rem',
      fontWeight: 600,
      lineHeight: '6.5rem',
      letterSpacing: '-0.04em',
      // textAlign: 'center',
      color:'#161616',
    },
    h2: {
      fontFamily: 'Sora',
      fontSize: '3.375rem',
      fontWeight: 600,
      lineHeight: '4.3875rem',
      letterSpacing: '-0.04em',
      color:'#161618'
    },
    h3: {
      fontFamily: 'Sora',
      fontSize: '2.6875rem',
      fontWeight: 600,
      lineHeight: '3.4937rem',
      letterSpacing: '-0.04em',
      textAlign: 'left',
    },
    h4: {
      fontFamily: 'Sora',
      fontSize: '2.1875rem',
      fontWeight: 600,
      lineHeight: '2.8438rem',
      letterSpacing: '-0.04em',
      textAlign: 'left',
    },
    h5: {
      fontFamily: 'Sora',
      fontSize: '1.625rem',
      fontWeight: 600,
      lineHeight: ' 2.1125rem',
      letterSpacing: '-0.04em',
    },
    h6: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '1.375rem',
      fontWeight:600,
      lineHeight: '1.925rem',
      textAlign: 'left',
    },
    body: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '1.125rem',
      fontWeight: 500,
      lineHeight: '1.8em',
      letterSpacing: '-0.03em',
  
    },
    linkLight: {
      fontFamily: 'Inter',
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: '1rem',
      letterSpacing: '-0.03em',
      textAlign: 'left',
      cursor: "pointer",
      textDecoration: "none",
    },
    Aeonik:{
      fontFamily: 'Aeonik, Arial, sans-serif',
      fontSize: '16px', // Set the font size for body text
      fontWeight:600,  // Font weight
      lineHeight: '17.68px', // Set the line height
      textAlign: 'left', // Default text alignment
      border:'1px solid #E1E1E1',
      padding:'10px',
      textAlign:'center',
      }
 
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '100px',
          '&:active': {
            transform: 'scale(0.95)',
          },
        },
        primary: {
          width: 'auto',
          height: '56px',
          padding: '1rem 26px 1rem 32px',
          backgroundColor: '#FFFFFF',
          border: '1px solid #E3E3E3',
          gap: '8px',
        },
        secondary: {
          height: '56px',
          padding: '1rem 32px',
          backgroundColor: '#522076',
          color:'white',
          transition: 'background-color 0.3s ease, transform 0.1s ease',
          gap: '6px',
        },
      },
    },
  },


});

export default theme;
