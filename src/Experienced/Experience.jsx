import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import "../Experienced/Experienced.css";
import { Box } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Experience = () => {
      useEffect(() => {
        AOS.init();
      }, []);
  return (
    <>
      <div className="experience-main" id="about">
        <div
          className="exp-main-1"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <Timeline position="right">
            <TimelineItem className="exp-timeline">
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="success" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Box className="exp-card">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                    className="exp-card-h-p"
                  >
                    <h3>Store Manager</h3>
                    <h5>From</h5>
                    <h4>2019 - 2022</h4>
                  </Box>
                  <Box className="exp-card-1">
                    <p>
                      During the period from 2019 to 2022, I embarked on an
                      exciting and rewarding entrepreneurial journey as the
                      owner and manager of my very own jewelry shop. This
                      venture allowed me to combine my passion for creativity,
                      business acumen, and customer service, enabling me to
                      learn and grow in various aspects of running a successful
                      retail establishment.My experience managing my own jewelry
                      shop from 2019 to 2022 was a transformative and fulfilling
                      journey.It provided me with invaluable insights into the
                      intricate world of jewelry retail, honed my
                      entrepreneurial skills, and allowed me to build lasting
                      connections with customers.This venture not only enhanced
                      my knowledge of the industry but also fostered personal
                      and professional growth, ultimately shaping me into a
                      resilient and resourceful business owner ready to tackle
                      new challenges and opportunities.
                    </p>
                  </Box>
                </Box>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
        <div
          className="exp-main-1"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <Timeline position="right">
            <TimelineItem className="exp-timeline1">
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="success" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Box className="exp-card">
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    className="exp-card-h-p"
                  >
                    <h3>FrontEnd Developer Intern At AimForTech</h3>
                    <h5>From</h5>
                    <h4>Jan-2023 - Present</h4>
                  </Box>
                  <Box className="exp-card-1">
                    <p>
                      During my professional journey, I had the privilege of
                      joining AimForTech as a Frontend Developer Intern. I
                      actively participated in various projects that involved
                      designing and developing user interfaces for web
                      applications. Under the guidance of experienced mentors, I
                      gained proficiency in front-end technologies such as HTML,
                      CSS, and JavaScript, as well as frameworks like React.My
                      Frontend Developer Internship at AimForTech was a
                      rewarding and enriching experience that allowed me to
                      apply my theoretical knowledge to practical projects. It
                      not only enhanced my technical skills but also provided me
                      with valuable insights into the professional world of web
                      development. I am grateful for the opportunity to have
                      contributed to real-world projects and collaborated with a
                      supportive team. This internship has further solidified my
                      passion for frontend development and prepared me for
                      future challenges in the field.
                    </p>
                  </Box>
                </Box>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </>
  );
};

export default Experience;
