import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import { Grid, useMediaQuery } from "@mui/system";
import { SectionTitle } from "../../otherSection";

const testimonialsData = [
  {
    title: "Methodology & process",
    description:
      "They really understand the entire design methodology and process... not just eager to put pixels on the screen. They understand the user’s needs, research options in the market, present different approaches, etc.",
    author: "Head of Product",
    company: "Enterprise Management",
    logo: "../media/partners/realince.svg",
  },
  {
    title: "Methodology & process",
    description:
      "They really understand the entire design methodology and process... not just eager to put pixels on the screen. They understand the user’s needs, research options in the market, present different approaches, etc.",
    author: "Head of Product",
    company: "Enterprise Management",
    logo: "../media/partners/realince.svg",
  },
  {
    title: "Methodology & process",
    description:
      "They really understand the entire design methodology and process... not just eager to put pixels on the screen. They understand the user’s needs, research options in the market, present different approaches, etc.",
    author: "Head of Product",
    company: "Enterprise Management",
    logo: "../media/partners/realince.svg",
  },
];

const TestimonialSlider = () => {
  const isTab = useMediaQuery("(max-width: 1223px)");

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 100,
    autoplay: true,
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1,
    draggable: true, // This allows the slider to be moved with the mouse
    swipeToSlide: true, // Allows swiping through slides
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <Grid
      container
      padding={isTab ? "50px 10px" : "140px 106px"}
      
      spacing={"100px"}
    >
      <SectionTitle title={"Our Client Testimonials"} />
      
        <Grid
         spacing={"40px"}
          component={Slider}
          container
          
          {...settings}
          
        >
          {/* -----------------------grid------------------------- */}
          {testimonialsData.map((testimonial, index) => (
            <Grid container height={'433px'}   key={index}  >
              <Grid container justifyContent={'space-between'} >
              <Grid container direction={'column'}    >
                <img src="../media/smalll-icons/comma.webp" width={34} alt="" />
                <Typography variant="h5">{testimonial.title}</Typography>
                <Typography variant="body" color="gray">{testimonial.description}</Typography>
              </Grid>
              <Grid container justifyContent={'space-between'}>
                  <Grid container spacing={'8px'} direction={'column'}>
                      <Typography variant="body1" color="initial">{testimonial.author}</Typography>
                      <Typography variant="body1" color="initial">{testimonial.company}</Typography>
                  </Grid>
                  <img src={testimonial.logo} alt="" />
              </Grid>
              </Grid>
            </Grid>
          ))}
          {/* -----------------------grid------------------------- */}
        </Grid>
       
    </Grid>
  );
};

export default TestimonialSlider;
