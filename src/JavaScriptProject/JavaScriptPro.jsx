import { Box, Grid } from "@mui/material";
import "../JavaScriptProject/JavaScript.css";
// import { Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import newVideoA from "../assets/Project2/customtext.webm"
import newVideoB from "../assets/Project2/gradient.webm"
import newVideoC from "../assets/Project2/modal.webm"
import newVideoD from "../assets/Project2/ProjectGallery.webm"
import newVideoE from "../assets/Project2/RandomQuote.webm"
import newVideoF from "../assets/Project2/Stat.webm"
import newVideoG from "../assets/Project2/Todo.webm"
import newVideoH from "../assets/Project2/Weather.webm"
import newVideoI from "../assets/Project2/height.webm"



import { Autoplay, Pagination, EffectCoverflow } from "swiper";

const JavaScriptPro = () => {
  return (
    <>
    
      <Swiper
        effect={"coverflow"}
        spaceBetween={0}
        grabCursor:true
        loop={true}
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
        className="java-swiper"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <SwiperSlide className="java-slide">
        
            <Grid item md={4} sm={12} xs={12} className="project-detail">
              <Box className="project-box">
                <video type="video/webm" src={newVideoA} autoPlay loop></video>
                <Box className="all-project-head">
                  <Box className="pro-box-head">
                    <h4>Custom Text Gen</h4>
                  </Box>
                  <Box className="pro-box-head1">
                    <button>
                      <a
                        href="https://abhisheksoni663.github.io/CustomText/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Go Live
                      </a>
                    </button>
                    <button>
                      <a
                        href="https://github.com/AbhishekSoni663/CustomText.git"
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
        <SwiperSlide className="java-slide">
         
            <Grid item md={4} sm={12} xs={12} className="project-detail">
              <Box className="project-box">
                <video type="video/webm" src={newVideoB} autoPlay loop></video>
                <Box className="all-project-head">
                  <Box className="pro-box-head">
                    <h4>Gradient Gen</h4>
                  </Box>
                  <Box className="pro-box-head1">
                    <button>
                      <a
                        href=" https://abhisheksoni663.github.io/GadientGen/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Go Live
                      </a>
                    </button>
                    <button>
                      <a
                        href="https://github.com/AbhishekSoni663/GadientGen.git"
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
        <SwiperSlide className="java-slide">
          
            <Grid item md={4} sm={12} xs={12} className="project-detail">
              <Box className="project-box">
                <video type="video/webm" src={newVideoC} autoPlay loop></video>
                <Box className="all-project-head">
                  <Box className="pro-box-head">
                    <h4>Modal</h4>
                  </Box>
                  <Box className="pro-box-head1">
                    <button>
                      <a
                        href="  https://abhisheksoni663.github.io/Modal/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Go Live
                      </a>
                    </button>
                    <button>
                      <a
                        href="https://github.com/AbhishekSoni663/Modal.git"
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
        <SwiperSlide className="java-slide">
          
            <Grid item md={4} sm={12} xs={12} className="project-detail">
              <Box className="project-box">
                <video type="video/webm" src={newVideoD} autoPlay loop></video>
                <Box className="all-project-head">
                  <Box className="pro-box-head">
                    <h4>Project Gallery</h4>
                  </Box>
                  <Box className="pro-box-head1">
                    <button>
                      <a
                        href=" https://abhisheksoni663.github.io/PhotoGallery/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Go Live
                      </a>
                    </button>
                    <button>
                      <a
                        href="https://github.com/AbhishekSoni663/PhotoGallery.git"
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
        <SwiperSlide className="java-slide">
          
            <Grid item md={4} sm={12} xs={12} className="project-detail">
              <Box className="project-box">
                <video type="video/webm" src={newVideoE} autoPlay loop></video>
                <Box className="all-project-head">
                  <Box className="pro-box-head">
                    <h4>Random Quote</h4>
                  </Box>
                  <Box className="pro-box-head1">
                    <button>
                      <a
                        href=" https://abhisheksoni663.github.io/NewQuote-Gen/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Go Live
                      </a>
                    </button>
                    <button>
                      <a
                        href="https://github.com/AbhishekSoni663/NewQuote-Gen.git"
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
        <SwiperSlide className="java-slide">
          ]
            <Grid item md={4} sm={12} xs={12} className="project-detail">
              <Box className="project-box">
                <video type="video/webm" src={newVideoF} autoPlay loop></video>
                <Box className="all-project-head">
                  <Box className="pro-box-head">
                    <h4>Social Stats</h4>
                  </Box>
                  <Box className="pro-box-head1">
                    <button>
                      <a
                        href=" https://abhisheksoni663.github.io/StatusCard/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Go Live
                      </a>
                    </button>
                    <button>
                      <a
                        href="https://github.com/AbhishekSoni663/StatusCard.git"
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
        <SwiperSlide className="java-slide">
        
            <Grid item md={4} sm={12} xs={12} className="project-detail">
              <Box className="project-box">
                <video type="video/webm" src={newVideoG} autoPlay loop></video>
                <Box className="all-project-head">
                  <Box className="pro-box-head">
                    <h4>Todo App</h4>
                  </Box>
                  <Box className="pro-box-head1">
                    <button>
                      <a
                        href="https://abhisheksoni663.github.io/NewTodo/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Go Live
                      </a>
                    </button>
                    <button>
                      <a
                        href="https://github.com/AbhishekSoni663/NewTodo.git"
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
        <SwiperSlide className="java-slide">
          
            <Grid item md={4} sm={12} xs={12} className="project-detail">
              <Box className="project-box">
                <video type="video/webm" src={newVideoH} autoPlay loop></video>
                <Box className="all-project-head">
                  <Box className="pro-box-head">
                    <h4>Weather App</h4>
                  </Box>
                  <Box className="pro-box-head1">
                    <button>
                      <a
                        href="https://abhisheksoni663.github.io/weather-app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Go Live
                      </a>
                    </button>
                    <button>
                      <a
                        href="https://github.com/AbhishekSoni663/weather-app.git"
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
        <SwiperSlide className="java-slide">
          
            <Grid item md={4} sm={12} xs={12} className="project-detail">
              <Box className="project-box">
                <video type="video/webm" src={newVideoI} autoPlay loop></video>
                <Box className="all-project-head">
                  <Box className="pro-box-head">
                    <h4>Height Converter</h4>
                  </Box>
                  <Box className="pro-box-head1">
                    <button>
                      <a
                        href="https://abhisheksoni663.github.io/HeightConverter/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Go Live
                      </a>
                    </button>
                    <button>
                      <a
                        href="https://github.com/AbhishekSoni663/HeightConverter.git"
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

export default JavaScriptPro;
