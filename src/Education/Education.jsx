
import "../Education/Education.css";
import { Box } from "@mui/material";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";

const Education = () => {
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
                      flexDirection: "column",
                    }}
                    className="exp-card-2"
                  >
                    <h3>Higher Secondary Studies</h3>
                    <h5>From School For Excellence</h5>
                    <h4>Year - 2011 - 2014</h4>
                  </Box>
                  <Box className="exp-card-1">
                    <p>
                      In 2012, I successfully completed my Higher Secondary
                      studies from School for Excellence in Dewas, Madhya
                      Pradesh, achieving an impressive 79% in my 10th grade.
                      Building upon that achievement, in 2014, I completed my
                      12th grade with a commendable 69%. These academic
                      accomplishments demonstrate my dedication and commitment
                      to excellence. As I ventured into the professional world,
                      my passion for technology led me to pursue a career in web
                      development.I constantly strive to stay updated with the
                      latest industry trends and technologies to deliver
                      high-quality results.
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
                    }}
                    className="exp-card-2"
                  >
                    <h3>Web Desginer At AimForTech</h3>
                    <h5>From</h5>
                    <h4>Jan-2023 - Aug-2023</h4>
                  </Box>
                  <Box className="exp-card-1">
                    <p>
                      After successfully completing my Higher Secondary studies,
                      I pursued my passion for computer science by enrolling in
                      the Bachelor of Engineering program at Astral Institute of
                      Technology. In 2019, I proudly graduated from the program
                      with a commendable CGPA of 6.49.During my time at Astral
                      Institute of Technology, I had the opportunity to
                      collaborate with talented peers and engage in diverse
                      extracurricular activities, expanding my knowledge and
                      enhancing my interpersonal skills.I am excited to embark
                      on new opportunities, contribute to impactful projects,
                      and continue my growth as a dedicated professional.
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

export default Education;
