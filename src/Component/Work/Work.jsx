import React, { useState } from "react";
import "./work.css";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Modal,
  Paper,
  Stack,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import { GitHub, Language } from "@mui/icons-material";

const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100vw",
  height: "100vh",
  bgcolor: "rgba(0,0,0 ,0.6)",
  boxShadow: 24,
  p: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

export default function Work() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="workContainer">
      <div className="workWrapper">
        <div className="aboutTitle">
          <h1 className="aboutTitleMark">Portfolio</h1>
          <div className="aboutTitlePara">
            <h4 className="aboutTitleParaH">My Works</h4>
            <span></span>
          </div>
        </div>
        <div className="workStack">
          <Paper
            onClick={() => handleOpen()}
            className="workLists"
            elevation={2}
          >
            <div className="workListImage">
              <img src="/Images/intro-bg.jpg" alt="" />
            </div>
            <h3>Church Website</h3>
          </Paper>
        </div>
      </div>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          {/* Close Button */}
          <IconButton
            htmlColor="white"
            size="large"
            onClick={handleClose}
            style={{ zIndex: 3, position: "absolute", top: 10, right: 10 }}
          >
            <CloseIcon htmlColor="white" />
          </IconButton>
          <div
            style={{
              backgroundColor: "white",
              width: "80%",
              height: "90%",
              padding: "20px",
            }}
          >
            <h3
              style={{
                textAlign: "center",
                fontSize: "20px",
                marginBottom: "10px",
              }}
            >
              My Works
            </h3>
            <div className="workStack">
              <div className="modalList">
                <img src="/Images/intro-bg.jpg" alt="" />
              </div>
              <div className="modalList">
                <div className="modalitem">
                  <h5 className="modalitemH">Project Info:</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae magnam eum in impedit hic sapiente enim iure dolore,
                    placeat, mollitia expedita vero temporibus natus quod odit
                    perferendis unde non recusandae.
                  </p>
                </div>
                <div className="modalitem">
                  <h5 className="modalitemH">Project Details:</h5>
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ marginTop: "2px", alignItems: "start" }}
                  >
                    <Box sx={{ width: "100px", fontWeight: "bold" }}>
                      {" "}
                      {/* Fixed width for alignment */}
                      <h5>Client:</h5>
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      {" "}
                      {/* Takes the remaining space */}
                      <p>Mr Quadree</p>
                    </Box>
                  </Stack>
                  <Divider sx={{ marginBottom: "7px" }} />
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ marginTop: "2px", alignItems: "start" }}
                  >
                    <Box sx={{ width: "100px", fontWeight: "bold" }}>
                      {" "}
                      {/* Fixed width for alignment */}
                      <h5>Industry:</h5>
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      {" "}
                      {/* Takes the remaining space */}
                      <p>Church</p>
                    </Box>
                  </Stack>
                  <Divider sx={{ marginBottom: "7px" }} />

                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ marginTop: "2px", alignItems: "start" }}
                  >
                    <Box sx={{ width: "100px", fontWeight: "bold" }}>
                      {" "}
                      {/* Fixed width for alignment */}
                      <h5>Technologies:</h5>
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      {" "}
                      {/* Takes the remaining space */}
                      <p>Html, css, javaScript</p>
                    </Box>
                  </Stack>
                  <Divider sx={{ marginBottom: "7px" }} />

                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ marginTop: "2px", alignItems: "start" }}
                  >
                    <Box sx={{ width: "100px", fontWeight: "bold" }}>
                      {" "}
                      {/* Fixed width for alignment */}
                      <h5>Website type:</h5>
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      {" "}
                      {/* Takes the remaining space */}
                      <p>Full Stack</p>
                    </Box>
                  </Stack>
                  <Divider sx={{ marginBottom: "7px" }} />

                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ marginTop: "2px", alignItems: "start" }}
                  >
                    <Box sx={{ width: "100px", fontWeight: "bold" }}>
                      {" "}
                      {/* Fixed width for alignment */}
                      <h5>Date:</h5>
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      {" "}
                      {/* Takes the remaining space */}
                      <p>20 March 2021</p>
                    </Box>
                  </Stack>
                  <Divider sx={{ marginBottom: "7px" }} />

                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ marginTop: "2px", alignItems: "center" }}
                  >
                    <Language/>
                    <Button sx={{color:'#80db66'}}>View Live</Button>
                  </Stack>
                  <Divider sx={{ marginBottom: "7px" }} />

                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ marginTop: "2px", alignItems: "center" }}
                  >
                    <GitHub />
                    <Button sx={{ color: "#80db66" }}>View Source code</Button>
                  </Stack>
                </div>
              </div>
            </div>
          </div>
          {/* Navigation Buttons */}
          <Box
            display="flex"
            justifyContent="space-between"
            width="100%"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <IconButton
            // onClick={handlePrev}
            >
              <ArrowBackIosNewIcon htmlColor="white" />
            </IconButton>
            <IconButton
            // onClick={handleNext}
            >
              <ArrowForwardIosIcon htmlColor="white" />
            </IconButton>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}



const workData  = [
  {

  },
]
