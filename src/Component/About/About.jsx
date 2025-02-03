import React from "react";
import "./about.css";
import { Box, Button, Divider, Stack } from "@mui/material";

const desc = [
    {
        question:'Name',
        answer: 'Akanni Q.O'
    },
    {
        question:'Occupation',
        answer: 'Web Developer'
    },
    {
        question:'Phone',
        answer: '+ (234) 8175460683, + (234) 8175460683 '
    },
    {
        question:'Email',
        answer: 'akanniquadree@gmail.com'
    },
    {
        question:'Nationality',
        answer: 'Nigeria'
    },
]

export default function About() {
  return (
    <div className="aboutContainer">
      <div className="aboutWrapper">
        <div className="aboutTitle">
          <h1 className="aboutTitleMark">About Me</h1>
          <div className="aboutTitlePara">
            <h4 className="aboutTitleParaH">Know More About Me</h4>
            <span></span>
          </div>
        </div>
        <Stack
          direction={{ sm: "column", md: "row" }}
          spacing={4}
          sx={{ marginTop: "30px" }}
        >
          <div className="aboutDetail">
            <img src="/Images/intro-bg.jpg" alt=''/>
          </div>
          <div className="aboutDetail">
            <div className="aboutDetailWrap">
              <h3>I'm Akanni Quadree Oluwatosin, a Web Developer</h3>
              <p>
                I help you build brand for your business at an affordable price.
                Thousands of clients have procured exceptional results while
                working with our dedicated team. when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
              </p>
              <Divider/>
              {
                desc.map((item, index)=>(
                    <Stack 
                    direction="row" 
                    spacing={2} 
                    sx={{ marginTop: "2px", alignItems: "start" }} 
                    key={index}
                  >
                    <Box sx={{ width: "100px", fontWeight: "bold" }}> {/* Fixed width for alignment */}
                      <h5>{item.question}</h5>
                    </Box>
                    <Box sx={{ flex: 1 }}> {/* Takes the remaining space */}
                      <p>{item.answer}</p>
                    </Box>
                  </Stack>  
                ))
              }
              <Divider/>
              <Button variant="contained" sx={{alignSelf:'center', backgroundColor:'#80db66'}}>Download CV</Button>
            </div>
          </div>
        </Stack>
      </div>
    </div>
  );
}
