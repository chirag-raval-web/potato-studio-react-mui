import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  Box,
  Typography,
  AccordionDetails,
} from "@mui/material";
import FaqApi from "./api/faqApi";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close"; // Don't forget to import CloseIcon
import { SectionTitle } from "./otherSection";

const Faq = () => {
  const [faqData] = useState(FaqApi);
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box padding={{ xs: "60px 20px", sm: "80px 40px", md: "100px 60px", lg: "140px 80px", xl: "140px 106px" }} display="flex" flexDirection="column" gap={{ xs: "40px", sm: "60px", md: "80px", lg: "100px" }}>
      <SectionTitle title={'Faq'}/>
      <Box padding={{ xs: "0 20px", sm: "0 40px", md: "0 60px", lg: "0 80px" }}>
        {faqData.map((elm, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index + 1}`} // Check if this panel is expanded
            onChange={handleChange(`panel${index + 1}`)} // Handle the change
            sx={{ boxShadow: "none" }}
          >
            <AccordionSummary
              expandIcon={
                expanded === `panel${index + 1}` ? (
                  <CloseIcon color="common" />
                ) : (
                  <AddIcon color="error" />
                )
              }
              aria-controls={`panel${index + 1}-content`}
              id={`panel${index + 1}-header`}
            >
              <Typography variant="h6" color="initial">
                {elm.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body" color="gray">
                {elm.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default Faq;
