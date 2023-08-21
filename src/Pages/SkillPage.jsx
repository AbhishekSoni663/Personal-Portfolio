import { Box, Grid } from "@mui/material";
import Skill from "../Skill/Skill";
import "../Skill/Skill.css";

import NavbarComp from "../NavBarComponent/NavbarComp";
import Herosection from "../HeroSection/Herosection";
import Intro from "../Pages/Intro"
import ProjectPage from "./ProjectPage";
import Client from "../Testimonial/Client";
import ThirdNav from "../ThirdNav/ThirdNav";
const SkillPage = () => {
  return (
    <>
      <div className="main-home">
        <NavbarComp />
        <Grid container className="home-hero">
          <Herosection />
        </Grid>
      </div>
      <Intro/>
      <ThirdNav />
      <div className="skill-home-main">
        <Box className="skill-home-h4">
          <h4>Technical Skill</h4>
        </Box>
        <Grid
          container
          className="skill-main"
          justifyContent={"center"}
          gap={2}
          id="about"
        >
          <Skill />
        </Grid>
      </div>
      <ProjectPage/>
      <Client/>
    </>
  );
};

export default SkillPage;
