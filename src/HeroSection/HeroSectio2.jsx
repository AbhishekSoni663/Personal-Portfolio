import { Box, Typography } from "@mui/material";
import "../HeroSection/Hero.css";
import WhatImg from "../assets/Hero-img/whatsapp.png";
import LinkDImg from "../assets/Hero-img/linkedin.png";
import GitImg from "../assets/Hero-img/github.png";

import { Fade } from "react-awesome-reveal";

const HeroSectio2 = () => {
 
  return (
    <>
      <Box className="hero-box3">
        <Box className="hero-box3-1">
          <Fade delay={1e3} direction="center" cascade damping={1e-1}>
            <Typography
              padding={"5px"}
              style={{
                fontFamily: "Niramit, sans-serif",
                textAlign: "center",
                fontSize: "1.4em",
                fontWeight: "500",
              }}
            >
              Follow Me
            </Typography>
            <Box className="hero-box-3-link">
              <Fade delay={1e3} direction="center" cascade damping={1e-1}>
                <a
                  href="https://wa.me/7869407389"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={WhatImg} width={"40px"} />
                </a>
              </Fade>
              <Fade delay={1e3} direction="center" cascade damping={1e-1}>
                <a
                  href="https://www.linkedin.com/in/abhisheksoni63"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={LinkDImg} width={"40px"} />
                </a>
              </Fade>
              <Fade delay={1e3} direction="center" cascade damping={1e-1}>
                <a
                  href="https://github.com/AbhishekSoni663"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={GitImg} width={"40px"} />
                </a>
              </Fade>
            </Box>
          </Fade>
        </Box>
        <Box className="hero-box-3-2">
          <Fade cascade delay={1e3} damping={1e-1}>
            <Typography
              padding={"5px"}
              style={{
                fontFamily: "Niramit, sans-serif",
                fontSize: "1.4em",
                fontWeight: "500",
                textAlign: "center",
              }}
            >
              My Work Space
            </Typography>
            <span className="hero-box3-vid">
              <button className="button3">
                <svg
                  viewBox="0 0 448 512"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  width="26px"
                >
                  <path
                    d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </span>
          </Fade>
        </Box>
      </Box>
    </>
  );
};

export default HeroSectio2;
