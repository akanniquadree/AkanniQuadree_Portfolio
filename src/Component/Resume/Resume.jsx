import React, { useState } from "react";
import "./resume.css";
import {
  Box,
  LinearProgress,
  linearProgressClasses,
  Paper,
  styled,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PropTypes from "prop-types";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#80db66",
    ...theme.applyStyles("dark", {
      backgroundColor: "#308fe8",
    }),
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ marginTop: "50px" }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function Resume() {
  const [value, setValue] = useState(1);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="resumeContainer">
      <div className="resumeWrapper">
        <div className="aboutTitle">
          <h1 className="aboutTitleMark">Summary</h1>
          <div className="aboutTitlePara">
            <h4 className="aboutTitleParaH">Resume</h4>
            <span></span>
          </div>

          {/* <div className="resumeDetail">
            <div className="resumeDetailLists"></div>
            <div className="resumeDetailLists"></div>
          </div> */}
        </div>
        <Box sx={{ width: "100%", marginTop: "20px" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            sx={{
              "& .MuiTab-root": {
                color: "inherit", // Set default text color to black for all tabs
              },
              "& .MuiTab-root.Mui-selected": {
                color: "#80db66", // Change the active tab text color to #80db66
              },
              "& .MuiTabs-indicator": {
                backgroundColor: "#80db66", // Change the indicator color
              },
            }}
            variant={isSmallScreen ? "scrollable" : "standard"} // Set to scrollable on small screens, standard on larger
            scrollButtons={isSmallScreen ? "auto" : "off"} // Show scroll buttons on small screens, hide on larger
            aria-label="scrollable auto tabs example"
            centered={!isSmallScreen} // Center the tabs on larger screens
          >
            <Tab label="Education" />
            <Tab label="Proffessional Skills" />
            <Tab label="Experience" />
          </Tabs>
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="resumeDetail">
              <h4 className="resumeTitle"> My Education</h4>
              <div className="resumeDetailItems">
                <div className="resumeDetailLists">
                  {degree.map((item, index) => (
                    <Paper className="resumeDetailList" key={index}>
                      <div className="resumeDate">
                        <p>{item.date}</p>
                      </div>
                      <h5>{item.degree}</h5>
                      <span>{item.school}</span>
                      <p>{item.desc}</p>
                    </Paper>
                  ))}
                </div>
              </div>
              <h4 className="resumeTitle"> Professional Courses</h4>
              <div className="resumeDetailItems">
                <div className="resumeDetailLists">
                  {Courses.map((item, index) => (
                    <Paper className="resumeDetailList" key={index}>
                      <div className="resumeDate">
                        <p>{item.date}</p>
                      </div>
                      <h5>{item.degree}</h5>
                      <span>{item.school}</span>
                      <p>{item.desc}</p>
                    </Paper>
                  ))}
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="resumeDetail">
              <h4 className="resumeTitle">My Skills</h4>
              <div className="resumeDetailItems">
                <div className="resumeDetailLists">
                  {Skills.map((item, index) => (
                    <div
                      className="resumeDetailList"
                      sx={{ position: "relative" }}
                      key={index}
                    >
                      <div className="resumeValue">
                        <h5>{item.name}</h5>
                        <span>{`${item.garde}%`}</span>
                      </div>
                      <BorderLinearProgress
                        variant="determinate"
                        value={item.garde}
                        sx={{ width: "100%" }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="resumeDetail">
              <h4 className="resumeTitle">My Experience</h4>
              <div className="resumeDetailItems">
                <div className="resumeDetailLists">
                  {Experience.map((item, index) => (
                    <Paper className="resumeDetailList" key={index}>
                      <div className="resumeDate">
                        <p>{item.date}</p>
                      </div>
                      <h5>{item.name}</h5>
                      <span>{item.job}</span>
                      <p>{item.desc}</p>
                    </Paper>
                  ))}
                </div>
              </div>
            </div>
          </TabPanel>
        </Box>
      </div>
    </div>
  );
}

const degree = [
  {
    school: "Federal University, Oye-Ekiti, Ekiti state, Nigeria",
    degree: "Bachelor in Geology",
    date: "2022 - 2024",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum at consequuntur molestias porro non blanditiis perferendis nihil, impedit suscipit eaque consequatur. Earum, iste quaerat iure repudiandae aut eaque quis dolorum!",
  },
  {
    school: "The Polytechnic, Ibadan, Oyo state, Nigeria",
    degree: "Higher National Diploma in Geology",
    date: "2016 - 2018",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum at consequuntur molestias porro non blanditiis perferendis nihil, impedit suscipit eaque consequatur. Earum, iste quaerat iure repudiandae aut eaque quis dolorum!",
  },
  {
    school: "The Polytechnic, Ibadan, Oyo state, Nigeria",
    degree: "National Diploma in Geology",
    date: "2013 - 2015",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum at consequuntur molestias porro non blanditiis perferendis nihil, impedit suscipit eaque consequatur. Earum, iste quaerat iure repudiandae aut eaque quis dolorum!",
  },
];
const Courses = [
  {
    school: "New Horizon Nigeria Ltd., Nigeria",
    degree: "Diploma in Web Design and Development",
    date: "2019",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum at consequuntur molestias porro non blanditiis perferendis nihil, impedit suscipit eaque consequatur. Earum, iste quaerat iure repudiandae aut eaque quis dolorum!",
  },
  {
    school: "Geo-Infotech Nigeria Limited, Nigeria",
    degree: "Diploma in Geographic Information System",
    date: "2020",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum at consequuntur molestias porro non blanditiis perferendis nihil, impedit suscipit eaque consequatur. Earum, iste quaerat iure repudiandae aut eaque quis dolorum!",
  },
  {
    school: "Central University of Karnataka",
    degree: "INTERNSHIP ON GIS TRAINING PROGRAM",
    date: "2020",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum at consequuntur molestias porro non blanditiis perferendis nihil, impedit suscipit eaque consequatur. Earum, iste quaerat iure repudiandae aut eaque quis dolorum!",
  },
  {
    school: "SideHustle., Nigeria",
    degree: "Diploma in Frontend Development (Reactjs)",
    date: "2021",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum at consequuntur molestias porro non blanditiis perferendis nihil, impedit suscipit eaque consequatur. Earum, iste quaerat iure repudiandae aut eaque quis dolorum!",
  },
  {
    school: "SideHustle., Nigeria",
    degree: "Diploma in Backend Development (Nodejs)",
    date: "2021",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum at consequuntur molestias porro non blanditiis perferendis nihil, impedit suscipit eaque consequatur. Earum, iste quaerat iure repudiandae aut eaque quis dolorum!",
  },
  {
    school: "!4NoCode, Nigeria",
    degree: "Diploma in FlutterFlow.io",
    date: "2023",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum at consequuntur molestias porro non blanditiis perferendis nihil, impedit suscipit eaque consequatur. Earum, iste quaerat iure repudiandae aut eaque quis dolorum!",
  },

  {
    school: "Pantech Solution, India",
    degree: "INTERNSHIP ON MACHINE LEARNING",
    date: "2023",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum at consequuntur molestias porro non blanditiis perferendis nihil, impedit suscipit eaque consequatur. Earum, iste quaerat iure repudiandae aut eaque quis dolorum!",
  },
];

const Experience = [
  {
    name: "Team Astratech Ng",
    job: "Full-Stack Engineer (Intern)",
    date: "2021-2023",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum at consequuntur molestias porro non blanditiis perferendis nihil, impedit suscipit eaque consequatur. Earum, iste quaerat iure repudiandae aut eaque quis dolorum!",
  },
];

const Skills = [
  {
    name: "Web Design",
    garde: 65,
  },
  {
    name: "Graphics Design",
    garde: 71,
  },
  {
    name: "Reactjs",
    garde: 75,
  },
  {
    name: "Html/Css",
    garde: 90,
  },
  {
    name: "Nodejs",
    garde: 60,
  },
  {
    name: "JavaScript",
    garde: 74,
  },
  {
    name: "Marchine Learning",
    garde: 55,
  },
  {
    name: "Material UI",
    garde: 70,
  },
  {
    name: "GIS",
    garde: 70,
  },
  {
    name: "Database",
    garde: 50,
  },
  {
    name: "React Native",
    garde: 40,
  },
];
