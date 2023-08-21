import { Box, Grid } from "@mui/material";
import "../MainProjects/Projects.css";
// import { Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import ProVideoA from "../assets/Project/Amazon Prime.webm";
import ProVideoB from "../assets/Project/DashBoard.webm";
import ProVideoC from "../assets/Project/Descente.webm";
import ProVideoD from "../assets/Project/Endgadget.webm";
import ProVideoE from "../assets/Project/Gm2.webm";
import ProVideoF from "../assets/Project/Microsoft.webm";
import ProVideoG from "../assets/Project/Netflix.webm";
import ProVideoH from "../assets/Project/Stellar.webm";
import ProVideoI from "../assets/Project/Wartsy.webm";
import ProVideoJ from "../assets/Project/WhatsApp.webm";
import AOS from "aos";
import "aos/dist/aos.css";

import { Autoplay, Pagination, EffectCoverflow } from "swiper";
import { useEffect } from "react";
const ProjectsSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Swiper
        effect={"coverflow"}
        spaceBetween={0}
        grabCursor:true
        slidesPerView={"auto"}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 80,
          depth: 200,
          modifier: 2,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, EffectCoverflow]}
        className="web-swiper"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <SwiperSlide className="web-swiper-1">
          <Grid item md={3} sm={6} xs={12} className="project-detail">
            <Box className="project-box">
              <video type="video/webm" src={ProVideoA} autoPlay loop></video>
              <Box className="all-project-head">
                <Box className="pro-box-head">
                  <h4>Amazon Prime Clone</h4>
                </Box>
                <Box className="pro-box-head1">
                  <button>
                    <a
                      href=" https://abhisheksoni663.github.io/NewAmazon/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Go Live
                    </a>
                  </button>
                  <button>
                    <a
                      href="https://github.com/AbhishekSoni663/NewAmazon.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Code
                    </a>
                  </button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </SwiperSlide>
        <SwiperSlide className="web-swiper-1">
          <Grid item md={3} sm={6} xs={12} className="project-detail">
            <Box className="project-box">
              <video type="video/webm" src={ProVideoB} autoPlay loop></video>
              <Box className="all-project-head">
                <Box className="pro-box-head">
                  <h4>DashBoard</h4>
                </Box>
                <Box className="pro-box-head1">
                  <button>
                    <a
                      href="https://abhisheksoni663.github.io/Dashboard/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Go Live
                    </a>
                  </button>
                  <button>
                    <a
                      href="https://github.com/AbhishekSoni663/Microsoft.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Code
                    </a>
                  </button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </SwiperSlide>
        <SwiperSlide className="web-swiper-1">
          <Grid item md={3} sm={6} xs={12} className="project-detail">
            <Box className="project-box">
              <video type="video/webm" src={ProVideoC} autoPlay loop></video>
              <Box className="all-project-head">
                <Box className="pro-box-head">
                  <h4>Descente</h4>
                </Box>
                <Box className="pro-box-head1">
                  <button>
                    <a
                      href="https://abhisheksoni663.github.io/Descente/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Go Live
                    </a>
                  </button>
                  <button>
                    <a
                      href="https://github.com/AbhishekSoni663/Descente.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Code
                    </a>
                  </button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </SwiperSlide>
        <SwiperSlide className="web-swiper-1">
          <Grid item md={3} sm={6} xs={12} className="project-detail">
            <Box className="project-box">
              <video type="video/webm" src={ProVideoD} autoPlay loop></video>
              <Box className="all-project-head">
                <Box className="pro-box-head">
                  <h4>Endgadget</h4>
                </Box>
                <Box className="pro-box-head1">
                  <button>
                    <a
                      href=" https://abhisheksoni663.github.io/endgadget/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Go Live
                    </a>
                  </button>
                  <button>
                    <a
                      href="https://github.com/AbhishekSoni663/endgadget.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Code
                    </a>
                  </button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </SwiperSlide>
        <SwiperSlide className="web-swiper-1">
          <Grid item md={3} sm={6} xs={12} className="project-detail">
            <Box className="project-box">
              <video type="video/webm" src={ProVideoE} autoPlay loop></video>
              <Box className="all-project-head">
                <Box className="pro-box-head">
                  <h4>Gm2 Ui</h4>
                </Box>
                <Box className="pro-box-head1">
                  <button>
                    <a
                      href="https://abhisheksoni663.github.io/NewGm2/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Go Live
                    </a>
                  </button>
                  <button>
                    <a
                      href="https://github.com/AbhishekSoni663/NewGm2.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Code
                    </a>
                  </button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </SwiperSlide>
        <SwiperSlide className="web-swiper-1">
          <Grid item md={3} sm={6} xs={12} className="project-detail">
            <Box className="project-box">
              <video type="video/webm" src={ProVideoF} autoPlay loop></video>
              <Box className="all-project-head">
                <Box className="pro-box-head">
                  <h4>MicroSoft Home Page</h4>
                </Box>
                <Box className="pro-box-head1">
                  <button>
                    <a
                      href="https://abhisheksoni663.github.io/NewMicrosoft/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Go Live
                    </a>
                  </button>
                  <button>
                    <a
                      href="https://github.com/AbhishekSoni663/NewMicrosoft.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Code
                    </a>
                  </button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </SwiperSlide>
        <SwiperSlide className="web-swiper-1">
          <Grid item md={3} sm={6} xs={12} className="project-detail">
            <Box className="project-box">
              <video type="video/webm" src={ProVideoG} autoPlay loop></video>
              <Box className="all-project-head">
                <Box className="pro-box-head">
                  <h4>Netflix Clone</h4>
                </Box>
                <Box className="pro-box-head1">
                  <button>
                    <a
                      href=" https://abhisheksoni663.github.io/NewNetFlix/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Go Live
                    </a>
                  </button>
                  <button>
                    <a
                      href="https://github.com/AbhishekSoni663/NewNetFlix.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Code
                    </a>
                  </button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </SwiperSlide>
        <SwiperSlide className="web-swiper-1">
          <Grid item md={3} sm={6} xs={12} className="project-detail">
            <Box className="project-box">
              <video type="video/webm" src={ProVideoH} autoPlay loop></video>
              <Box className="all-project-head">
                <Box className="pro-box-head">
                  <h4>Waartsy Ui</h4>
                </Box>
                <Box className="pro-box-head1">
                  <button>
                    <a
                      href="https://abhisheksoni663.github.io/NewWartsy/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Go Live
                    </a>
                  </button>
                  <button>
                    <a
                      href="https://github.com/AbhishekSoni663/NewWartsy.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Code
                    </a>
                  </button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </SwiperSlide>
        <SwiperSlide className="web-swiper-1">
          <Grid item md={3} sm={6} xs={12} className="project-detail">
            <Box className="project-box">
              <video type="video/webm" src={ProVideoI} autoPlay loop></video>
              <Box className="all-project-head">
                <Box className="pro-box-head">
                  <h4>WhatsApp Web App</h4>
                </Box>
                <Box className="pro-box-head1">
                  <button>
                    <a
                      href="https://abhisheksoni663.github.io/whatsapp/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Go Live
                    </a>
                  </button>
                  <button>
                    <a
                      href="https://github.com/AbhishekSoni663/whatsapp.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Code
                    </a>
                  </button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </SwiperSlide>
        <SwiperSlide className="web-swiper-1">
          <Grid item md={3} sm={6} xs={12} className="project-detail">
            <Box className="project-box">
              <video type="video/webm" src={ProVideoJ} autoPlay loop></video>
              <Box className="all-project-head">
                <Box className="pro-box-head">
                  <h4>Stellar Quest</h4>
                </Box>
                <Box className="pro-box-head1">
                  <button>
                    <a
                      href="https://abhisheksoni663.github.io/NewStellar/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Go Live
                    </a>
                  </button>
                  <button>
                    <a
                      href="https://github.com/AbhishekSoni663/NewStellar.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Code
                    </a>
                  </button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ProjectsSection;
