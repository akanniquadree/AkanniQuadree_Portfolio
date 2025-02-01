import React from "react";
import "./contact.css";
import { Box, Button, Stack, TextField } from "@mui/material";
import { Email, Facebook, GitHub, Instagram, LinkedIn, Phone, WhatsApp } from "@mui/icons-material";

export default function Contact() {
  return (
    <div className="contactContainer">
      <div className="contactWrapper">
        <div className="aboutTitle">
          <h1 className="aboutTitleMark">Contact</h1>
          <div className="aboutTitlePara">
            <h4 className="aboutTitleParaH">Get In Touch</h4>
            <span></span>
          </div>
        </div>
        <div className="contactStack">
          <div className="contactLeft">
            {contact.map((item, index) => (
              <Stack
                direction={"row"}
                spacing={4}
                sx={{ alignItems: "center", marginBottom: "15px" }}
                key={index}
              >
                {item.icon}
                <div className="ServiceListItemDesc" s>
                  <h5>{item.question}</h5>
                  <p>{item.answer}</p>
                </div>
              </Stack>
            ))}
            <h4 className="contactSend" style={{margin:'15px 0'}}>Follow Me</h4>
            <Box sx={{display:'flex', gap:'10px'}}>
              <Facebook />
              <Instagram />
              <LinkedIn />
              <GitHub />
            </Box>
          </div>
          <div className="contactRight">
            <h4 className="contactSend">Send us a note</h4>
            <Box
              component="form"
              sx={{
                marginTop: "20px",
                "& .MuiTextField-root": { width: "100%", mb: 1 },
                display: "flex",
                gap: "20px",
              }}
              noValidate
              autoComplete="on"
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "column", md: "row" },
                  width: "100%",
                  gap: "5px",
                }}
              >
                <TextField
                  id="outlined-error"
                  label="Name"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "rgba(49, 56, 80, 0.8)", // Change the outline color on focus
                      },
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "rgba(49, 56, 80, 0.8)", // Change the label color on focus
                    },
                  }}
                />
                <TextField
                  id="outlined-error-helper-text"
                  label="Email"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "rgba(49, 56, 80, 0.8)", // Change the outline color on focus
                      },
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "rgba(49, 56, 80, 0.8)", // Change the label color on focus
                    },
                  }}
                />
              </Box>
            </Box>
            <TextField
              sx={{
                mb: 1,
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "rgba(49, 56, 80, 0.8)", // Change the outline color on focus
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "rgba(49, 56, 80, 0.8)", // Change the label color on focus
                },
              }}
              id="filled-multiline-static"
              fullWidth
              label="Message"
              multiline
              rows={5}
              variant="outlined"
            />
            <div style={{ textAlign: "center" }}>
              <Button variant="contained" sx={{ backgroundColor: "#80db66" }}>
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const contact = [
  {
    icon: <Phone />,
    question: "Phone",
    answer: "+ (234) 8175460683 ",
  },
  {
    icon: <WhatsApp />,
    question: "Chat",
    answer: "+ (234) 8175460683",
  },
  {
    icon: <Email />,
    question: "Email",
    answer: "akanniquadree@gmail.com",
  },
];
