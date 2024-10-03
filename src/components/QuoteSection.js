import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import QuoteApi from "./api/Quote";
import { Box, Typography, Button, Fade } from "@mui/material";
import EastIcon from "@mui/icons-material/East";

const QuoteItem = ({ quoteData }) => {
  const location = useLocation();
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true); // Triggers the transition
  }, [quoteData]);

  const nodeRef = useRef(null);

  return (
    <>
      {quoteData.map((elm, index) => {
        return (
           
            <Box
              key={index}
              padding={{
                xs: "20px",
                sm: "40px",
                md: "60px ",
                lg: "80px 209px",
                xl: "140px 209px",
              }}
              display={"flex"}
              justifyContent={"center"}
              flexDirection={"column"}
              gap={{
                xs: "20px",
                sm: "30px",
                md: "40px",
                lg: "60px",
                xl: "120px",
              }}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                gap={"64px"}
              >
                <Box
                  gap={{ xs: "20px", sm: "32px", md: "32px" }}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  textAlign={"center"}
                >
                  <Typography
                    variant="h1"
                    color="initial"
                    fontSize={{
                      xs: "2rem",
                      sm: "3rem",
                      md: "4rem",
                      lg: "4.5rem",
                      xl: "5rem",
                    }} // Responsive font size
                    lineHeight={{
                      xs: "3rem",
                      sm: "4rem",
                      md: "5rem",
                      lg: "5.5rem",
                      xl: "6.5rem",
                    }} // Responsive line height
                  >
                    {location.pathname === "/" && (
                      <Box
                        sx={{
                          display: { xs: "none", sm: "none", xl: "block" },
                        }}
                      >
                        <img
                          src="media/smalll-icons/harsha.webp"
                          alt="harsha"
                          style={{ float: "left" }}
                        />
                        <img
                          src="media/smalll-icons/amruta.webp"
                          alt="amruta"
                          style={{ float: "right" }}
                        />
                      </Box>
                    )}
                    {elm.quote}
                  </Typography>
                  <Typography
                    variant="body"
                    color="gray"
                    sx={{ mx: "auto" }}
                    width={{
                      xs: "100%",
                      sm: "90%",
                      md: "80%",
                      lg: "70%",
                      xl: "604px",
                    }} // Responsive width
                  >
                    {elm.description}
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  flexDirection={{ xs: "column", md: "row" }} // Column on xs and row on md and above
                  justifyContent="center"
                  gap={{ xs: "16px", sm: "24px" }} // Responsive gap for buttons
                >
                  <Button variant="secondary" disableRipple>
                    {location.pathname === "/career"
                      ? "Explore jobs"
                      : "Get in Touch"}
                  </Button>

                  {location.pathname === "/" && (
                    <Button
                      variant="primary"
                      disableRipple
                      endIcon={<EastIcon sx={{ color: "orange" }} />}
                    >
                      View our work
                    </Button>
                  )}
                </Box>
              </Box>
            </Box>
         
        );
      })}
    </>
  );
};

const QuoteSection = () => {
  const location = useLocation();
  const [quoteData] = useState(QuoteApi);

  // Determine the current path
  let currentPath =
    location.pathname === "/" ? "home" : location.pathname.substring(1);

  // Filter quotes based on the current path
  const filteredQuotes = quoteData.filter(
    (quote) => quote.page === currentPath
  );
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true); // Trigger the transition when the component mounts
  }, []);

  return (
    <>
      <QuoteItem quoteData={filteredQuotes} />
    </>
  );
};

export default QuoteSection;
