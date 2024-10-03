import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import QuoteApi from './api/Quote';
import { Box, Typography, Button } from '@mui/material';
import EastIcon from '@mui/icons-material/East'; 

const QuoteItem = () => {
    return (
      <Box justifyContent={'center'} textAlign={'center'} display={'flex'} padding={'140px'} flexDirection={'column'} style={{display:"flex",justifyContent:'center'}}>
         <Box><Typography variant="h1" color="initial" textAlign={'center'}>
              Bridging Innovation & Design Excellence for Your Digital Needs
            </Typography></Box>
            <Box  width={'604px'}> <Typography variant="body"  color="gray" textAlign={'center'}>
              The Potato Studio is a global UX/UI agency based in India crafting research-driven and user-friendly digital products.
            </Typography></Box>
      </Box>
    );
  };


const QuoteSection = () => {
    const location = useLocation();
    const [quoteData] = useState(QuoteApi);
  
    // Determine the current path
    let currentPath = location.pathname === "/" ? "home" : location.pathname.substring(1);
    
    // Filter quotes based on the current path
    const filteredQuotes = quoteData.filter((quote) => quote.page === currentPath);
  
    return (
      <>
        <QuoteItem quoteData={filteredQuotes} />
      </>
    );
  };

export default QuoteSection;