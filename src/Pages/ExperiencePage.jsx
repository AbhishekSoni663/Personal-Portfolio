import { Grid } from "@mui/material"
import Experience from "../Experienced/Experience"
import Herosection from "../HeroSection/Herosection"
import NavbarComp from "../NavBarComponent/NavbarComp"
import ThirdNav from "../ThirdNav/thirdNav"
import Intro from "../Pages/Intro"
import ProjectPage from "./ProjectPage"
import Client from "../Testimonial/Client"

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
