
import ProjectsSection from "../MainProjects/ProjectsSection";
import FourthNavbar from "../FourthNav/FourthNavbar";
import "../MainProjects/Projects.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Box, Grid } from "@mui/material";
// import { Zoom } from "react-awesome-reveal";
const ProjectPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="project-home">
        <div
          className="project-portfolio">
          <Box className="pro-port-h5" >
            <h5>PortFolio</h5>
          </Box>
          <Box className="pro-port-h5">
            <h3>Selected Work</h3>
          </Box>
        </div>
        <FourthNavbar />
        <Grid container className="project-main" gap={1.9} id="project">
          <ProjectsSection />
        </Grid>
      </div>
    </>
  );
};

export default ProjectPage;
