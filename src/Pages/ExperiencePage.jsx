
import Experience from "../Experienced/Experience"
import Herosection from "../HeroSection/Herosection"
import NavbarComp from "../NavBarComponent/NavbarComp"

import Intro from "../Pages/Intro"
import ProjectPage from "./ProjectPage"
import Client from "../Testimonial/Client"
import ThirdNav from "../ThirdNav/ThirdNav"
import { Grid } from "@mui/material"

const ExperiencePage = () => {
  return (
    <>
    <div className="main-home">
      <NavbarComp/>
      <Grid container className="home-hero">
        <Herosection/>
      </Grid>
      </div>
      <Intro/>
      <ThirdNav/>
      <Experience/>
      <ProjectPage/>
      <Client/>
    </>
  )
}

export default ExperiencePage
