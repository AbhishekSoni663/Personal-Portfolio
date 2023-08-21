import { Box, Grid } from "@mui/material";
import FourthNavbar from "../FourthNav/FourthNavbar";
import JavaScriptPro from "../JavaScriptProject/JavaScriptPro";
import NavbarComp from "../NavBarComponent/NavbarComp";
import ThirdNav from "../ThirdNav/ThirdNav";
import Experience from "../Experienced/Experience";
import Herosection from "../HeroSection/Herosection";
import Client from "../Testimonial/Client";

const JavaScriptPage = () => {
  return (
    <>
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
        <Grid container className="project-main" gap={1.9} id="project">
          <JavaScriptPro />
        </Grid>
      </div>
      <Client/>
    </>
  );
};

export default JavaScriptPage;
