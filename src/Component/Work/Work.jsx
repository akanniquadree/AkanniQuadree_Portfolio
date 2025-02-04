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
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = (index) => {
    setOpen(true);
    setCurrentIndex(index)
  };
  const handleNext = () =>[
    setCurrentIndex((prev)=>(prev + 1) % workData.length)
  ]
  const handlePrev = () =>[
    setCurrentIndex((prev)=>(prev - 1 + workData.length) % workData.length)
  ]

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
          {workData.map((item, index) => (
            <Paper
              onClick={() => handleOpen(index)}
              className="workLists"
              elevation={2}
              key={index}
            >
              <div className="workListImage">
                <img src="/Images/church/03.png" alt="" />
              </div>
              <h3>{item.name}</h3>
            </Paper>
          ))}
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
              {workData[currentIndex].name}
            </h3>
            <div className="workStack">
              <div className="modalList">
                <img src="/Images/intro-bg.jpg" alt="" />
              </div>
              <div className="modalList">
                <div className="modalitem">
                  <h5 className="modalitemH">Project Info:</h5>
                  <p>
                  {workData[currentIndex].desc}
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
                      <p> {workData[currentIndex].client}</p>
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
                      <p> {workData[currentIndex].org}</p>
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
                      <p> {workData[currentIndex].tech}</p>
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
                      <p> {workData[currentIndex].date}</p>
                    </Box>
                  </Stack>
                  <Divider sx={{ marginBottom: "7px" }} />

                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ marginTop: "2px", alignItems: "center" }}
                  >
                    <Language />
                    <a href= {workData[currentIndex].link}>
                    <Button sx={{ color: "#80db66" }}>View Live</Button></a>
                  </Stack>
                  <Divider sx={{ marginBottom: "7px" }} />

                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ marginTop: "2px", alignItems: "center" }}
                  >
                    <GitHub />
                    <a href= {workData[currentIndex].code}>
                    <Button sx={{ color: "#80db66" }}>View Source code</Button></a>
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
            onClick={handlePrev}
            >
              <ArrowBackIosNewIcon htmlColor="white" />
            </IconButton>
            <IconButton
            onClick={handleNext}
            >
              <ArrowForwardIosIcon htmlColor="white" />
            </IconButton>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

const workData = [
  {
    name: "The Great Impact Foundation",
    link: "https://grtimpactfoundation.netlify.app",
    code: "https://github.com/akanniquadree/ImpactFoundation_Client.git",
    client: "The Great Impact Foundation",
    org: "N.G.O",
    tech: "Reactjs, Material-Ui, Css, Nodejs, MongoDb. ",
    date: "Sep 21, 2024.",
    type: "Full Stack Web Development",
    desc: "",
  },
  {
    name: "Mandy Kitchen",
    link: "https://mandykitchen.netlify.app/",
    code: "https://github.com/akanniquadree/Restaurant_Management_Client.git",
    client: "Personal Project",
    org: "Resturant",
    tech: "Reactjs, Material-Ui, Css, Nodejs, MongoDb. ",
    date: "Apr 20, 2024.",
    type: "Full Stack Web Development",
    desc: "",
  },
  {
    name: "QuadGram",
    link: "quadgram.netlify.app",
    code: "https://github.com/akanniquadree/Quadgram.git",
    client: "Personal Project",
    org: "Social Media",
    tech: "Reactjs, Material-Ui, Css, Nodejs, MongoDb. ",
    date: "Feb 14, 2022.",
    type: "Full Stack Web Development",
    desc: "QuadGram is an imitation of instagram, having all the features of intagram such as like, unlikes, comment, post, follow and unfollow. It is a full stack website (MERN) Stack",
  },
  {
    name: "Facebook Clone",
    link: "facebuksclone.netlify.app",
    code: "https://github.com/akanniquadree/Quad_Socail_App.git",
    client: "Personal Project",
    org: "Social Media",
    tech: "Reactjs, Material-Ui, Css. ",
    date: "Feb 14, 2022.",
    type: "Frontend Development",
    desc: "Facebook Clone is an imitation of Facebook, having all the features of intagram such as like, unlikes, comment, post, follow and unfollow. It is a full stack website (MERN) Stack",
  },
  {
    img:'',
    name: "Church Website",
    link: "quadweb.netlify.app",
    code: "https://github.com/akanniquadree/ChurchWebsite.git",
    client: "Personal Project",
    org: "Church",
    tech: "Reactjs, Material-Ui, Css. ",
    date: "Sep 5, 2022.",
    type: "Frontend Development",
    desc: "A classic website design for a church that wants to showcase their activity for their congregrations and others",
  },
];
