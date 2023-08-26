import { Box, Grid } from "@mui/material";
import "../ReactProject/ReactPro.css";
// import { Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import ReactVideoA from "/src/assets/Project3/Expense Manager.webm";
import ReactVideoB from "/src/assets/Project3/Todo.webm";
import ReactVideoC from "/src/assets/Project3/News App.webm";
import ReactVideoD from "/src/assets/Project3/Food App.webm";
import ReactVideoE from "/src/assets/Project3/Qr & Quote.webm";
import AOS from "aos";
import "aos/dist/aos.css";

import { Autoplay, Pagination, EffectCoverflow } from "swiper";
import { useEffect } from "react";

const ReactPro = () => {
   useEffect(() => {
     AOS.init();
   }, []);
  return (
    <>
      <Swiper
        effect={"coverflow"}
        loop={true}
        spaceBetween={30}
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
          modifier: 3,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, EffectCoverflow]}
        className="react-swiper"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <SwiperSlide className="react-slide">
          <Grid item md={12} sm={6} xs={12} className="project-detail">
            <Box className="project-box">
              <video type="video/webm" src={ReactVideoB} autoPlay loop></video>
              <Box className="all-project-head">
                <Box className="pro-box-head">
                  <h4>Todo App</h4>
                </Box>
                <Box className="pro-box-head1">
                  <button>
                    <a
                      href="https://effulgent-sunflower-f987de.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Go Live
                    </a>
                  </button>
                  <button>
                    <a
                      href="https://github.com/AbhishekSoni663/TodoReact.git"
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
        <SwiperSlide className="react-slide">
          <Grid item md={12} sm={6} xs={12} className="project-detail">
            <Box className="project-box">
              <video type="video/webm" src={ReactVideoE} autoPlay loop></video>
              <Box className="all-project-head">
                <Box className="pro-box-head">
                  <h4>Qr & Quote Gen</h4>
                </Box>
                <Box className="pro-box-head1">
                  <button>
                    <a
                      href="https://new-qr-seven.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Go Live
                    </a>
                  </button>
                  <button>
                    <a
                      href="https://github.com/AbhishekSoni663/NewQr.git"
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
        <SwiperSlide className="react-slide">
          <Grid item md={12} sm={6} xs={12} className="project-detail">
            <Box className="project-box">
              <video type="video/webm" src={ReactVideoA} autoPlay loop></video>
              <Box className="all-project-head">
                <Box className="pro-box-head">
                  <h4>Expense Manager</h4>
                </Box>
                <Box className="pro-box-head1">
                  <button>
                    <a
                      href="https://expense-todo-git-main-abhisheksoni663.vercel.app
"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Go Live
                    </a>
                  </button>
                  <button>
                    <a
                      href="https://github.com/AbhishekSoni663/ExpenseTodo.git"
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
        <SwiperSlide className="react-slide">
          <Grid item md={12} sm={6} xs={12} className="project-detail">
            <Box className="project-box">
              <video type="video/webm" src={ReactVideoC} autoPlay loop></video>
              <Box className="all-project-head">
                <Box className="pro-box-head">
                  <h4>News App</h4>
                </Box>
                <Box className="pro-box-head1">
                  <button>
                    <a
                      href="https://khabar-git-main-abhisheksoni663.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Go Live
                    </a>
                  </button>
                  <button>
                    <a
                      href="https://github.com/AbhishekSoni663/Khabar.git"
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
        <SwiperSlide className="react-slide">
          <Grid item md={12} sm={6} xs={12} className="project-detail">
            <Box className="project-box">
              <video type="video/webm" src={ReactVideoD} autoPlay loop></video>
              <Box className="all-project-head">
                <Box className="pro-box-head">
                  <h4>Food Store</h4>
                </Box>
                <Box className="pro-box-head1">
                  <button>
                    <a
                      href="https://new-foo-store.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Go Live
                    </a>
                  </button>
                  <button>
                    <a
                      href="https://github.com/AbhishekSoni663/NewFooStore.git"
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

export default ReactPro;
