import React from "react";
import "./slide.css";
import { Box, Button, Stack } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";

export default function Slide() {
  return (
    <div className="slideContainer">
      <div className="slideWrapper">
        <Stack
          direction={"column"}
          spacing={3}
          sx={{ color: "white", zIndex: 2, alignItems: "center" }}
        >
          <h6 className="slideIntro">Welcome</h6>
          <h3 className="slideName">
          I'm {" "}
            <Typewriter
              words={["Akanni Quadree Oluwatosin", " a Web Developer", " a Designer"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
            
          </h3>
          <span className="slideLoc">Based in Lagos, Nigeria</span>
          <Button variant="outlined">Hire me</Button>
        </Stack>
      </div>
    </div>
  );
}
