import React from "react";
import "./service.css";
import { Paper, Stack } from "@mui/material";
import {
  BarChart,
  Draw,
  Insights,
  Laptop,
  Person,
  PhonelinkSetup,
} from "@mui/icons-material";

const service = [
  {
    icon: <Laptop fontSize="large"/>,
    title: "Web Design & Development",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum error nobis autem, itaque sed incidunt recusandae suscipit eligendi, odio culpa minus harum fuga voluptatibus distinctio eius! Libero, quisquam impedit.",
  },
  {
    icon: <PhonelinkSetup fontSize="large"/>,
    title: "App Design & Development",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum error nobis autem, itaque sed incidunt recusandae suscipit eligendi, odio culpa minus harum fuga voluptatibus distinctio eius! Libero, quisquam impedit.",
  },
  {
    icon: <Draw fontSize="large"/>,
    title: "Graphic Design",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum error nobis autem, itaque sed incidunt recusandae suscipit eligendi, odio culpa minus harum fuga voluptatibus distinctio eius! Libero, quisquam impedit.",
  },
  {
    icon: <BarChart fontSize="large"/>,
    title: "Data Analysis",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum error nobis autem, itaque sed incidunt recusandae suscipit eligendi, odio culpa minus harum fuga voluptatibus distinctio eius! Libero, quisquam impedit.",
  },
  {
    icon: <Insights fontSize="large"/>,
    title: "Geo-Spatial Analysis",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum error nobis autem, itaque sed incidunt recusandae suscipit eligendi, odio culpa minus harum fuga voluptatibus distinctio eius! Libero, quisquam impedit.",
  },
];

export default function Services() {
  return (
    <div className="serviceContainer">
      <div className="serviceWrapper">
        <div className="aboutTitle">
          <h1 className="aboutTitleMark">Services</h1>
          <div className="aboutTitlePara">
            <h4 className="aboutTitleParaH">What I Do?</h4>
            <span></span>
          </div>
        </div>
        <div className="ServiceLists">
          {service.map((item, index) => (
            <Paper className="ServiceListItem" key={index}>
              <Stack
                direction={{sm:'column',md:"row"}}
                spacing={{sm:2,md:3}}
                sx={{ alignItems: "center" }}
              >
                {item.icon}
                <div className="ServiceListItemDesc">
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Stack>
            </Paper>
          ))}
        </div>
      </div>
    </div>
  );
}
