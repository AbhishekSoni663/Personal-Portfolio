import { Box, Grid, Typography } from "@mui/material";
import "../HeroSection/Hero.css";
import HeroSectio2 from "./HeroSectio2";
import Typewriter from "typewriter-effect";
import StrokImg from "../assets/Hero-img/network.png";
import { Fade } from "react-awesome-reveal";


const Herosection = () => {
 
  return (
    <>
      <Box className="hero-grid-a">
        <Box className="hero-grid-b" >
          <Grid item xs={6} sm={12} md={6} className="hero-grid" >
            <Fade delay={1e3} direction="center" cascade damping={1e-1} >
              <Box className="hero-box">
                <Typography className="hero-box-h1" sx={{ padding: "10px" }}>
                  <p className="hero-style">Hello I Am Abhishek Soni</p>
                </Typography>
                <Typography
                  className="hero-box1-h1"
                  sx={{ padding: "10px", marginTop: "10px" }}
                >
                  Transforming <span className="box-h1-h4">Ideas</span> into{" "}
                  <span className="box-h1-h4">Powerfull Solutions</span>
                </Typography>
                <Typography
                  className="hero-box2-h1"
                  sx={{ padding: "10px", marginTop: "10px" }}
                >
                  <Typewriter
                    options={{
                      autoStart: true,
                      delay: 300,
                      loop: true,
                      cursor: "_",
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("As a Full Stack Developer")
                        .pauseFor(1200)
                        .deleteAll(150)
                        .start();
                    }}
                  />
                </Typography>
              </Box>
            </Fade>
          </Grid>
          <Grid item md={5} xs={6} sm={12} className="hero-grid1">
            <Fade delay={1e3} direction="center" cascade damping={1e-1}>
              <Box className="hero-box1">
                <Box
                  className="hero-box1-1"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100px",
                  }}
                >
                  <img className="box1-img" src={StrokImg} />
                </Box>
                <Typography
                  className="hero-box3-h1"
                  sx={{
                    padding: "10px",
                    marginTop: "10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  As a fresh and enthusiastic Full Stack Developer, I am eager
                  to showcase my skills and passion for crafting exceptional web
                  solutions. With a solid foundation in both front-end and
                  back-end development, I bring a unique blend of creativity,
                  problem-solving, and a hunger for continuous learning.
                </Typography>
              </Box>
            </Fade>
          </Grid>
        </Box>
        <HeroSectio2 />
      </Box>
    </>
  );
};

export default Herosection;
