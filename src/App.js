// App.js
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/theme';
import { Home, Services, Work, About, Blog, Career, Contact, Navbar,Footer,QuoteSection,StartProject } from './components/import';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 
 
 
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
         <QuoteSection/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <StartProject/>
        <Footer/>
      </Router>
 </ThemeProvider>
  );
};

export default App;
