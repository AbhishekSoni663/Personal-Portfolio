
import FourthNavbar from "../FourthNav/FourthNavbar";
import ReactPro from "../ReactProject/ReactPro";
import Experience from "../Experienced/Experience";

import Herosection from "../HeroSection/Herosection";
import NavbarComp from "../NavBarComponent/NavbarComp";
import Client from "../Testimonial/Client";
import ThirdNav from "../ThirdNav/ThirdNav";
import { Box, Grid } from "@mui/material";

const ReactPages = () => {
  return (
    <div>
      <div className="main-home">
        <NavbarComp />
        <Grid container className="home-hero">
          <Herosection />
        </Grid>
      </div>
      <ThirdNav />
      <Experience />
      <div className="project-home">
        <div className="project-portfolio">
          <Box className="pro-port-h5">
            <h5>PortFolio</h5>
          </Box>
          <Box className="pro-port-h5">
            <h3>Selected Work</h3>
          </Box>
        </div>
        <FourthNavbar />
        <Grid container className="project-main" gap={2} id="project">
          <ReactPro />
        </Grid>
      </div>
      <Client/>
    </div>
  );
};

export default ReactPages;
