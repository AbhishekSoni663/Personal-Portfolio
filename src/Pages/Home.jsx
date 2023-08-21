
import NavbarComp from "../NavBarComponent/NavbarComp"
import Herosection from "../HeroSection/Herosection"
import "../Pages/Home.css"
import About from "./Intro"
import AboutMe from "./AboutMe"
import ProjectPage from "./ProjectPage"
import Client from "../Testimonial/Client"
import { Grid } from "@mui/material"

const Home = () => {
  return (
    <>
    <div className="main-home">
      <NavbarComp/>
      <Grid container className="home-hero">
        <Herosection/>
      </Grid>
      </div>
      <About/>
      <AboutMe/>
      <ProjectPage/>
      <Client/>
      
    </>

  )
}

export default Home
