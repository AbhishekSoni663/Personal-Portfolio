import { Grid } from "@mui/material"
import Education from "../Education/Education"
import Herosection from "../HeroSection/Herosection"
import NavbarComp from "../NavBarComponent/NavbarComp"
import ThirdNav from "../ThirdNav/thirdNav"
import Intro from "../Pages/Intro"
import ProjectPage from "./ProjectPage"
import Client from "../Testimonial/Client"
const EducationPages = () => {
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
   <Education/>
   <ProjectPage/>
   <Client/>
    </>
  )
}

export default EducationPages
