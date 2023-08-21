import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Testimonial/client.css";
import { Autoplay, Pagination } from "swiper";
import { Rating } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// import { Fade } from "react-awesome-reveal";

const Client = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="main-slide">
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="main-swip"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="slide1">
            <SwiperSlide className="slide-a">
              <div className="slide-box">
                <h3>Sanjay</h3>
                <p>
                  Thrive’s website design team far exceeded my expectations on
                  every front, and I have very high expectations. The end
                  product is a beautiful website
                </p>
                <Rating defaultValue={3.1} precision={0.5} />
              </div>
            </SwiperSlide>
          </div>
          <div className="slide">
            <SwiperSlide className="slide-a">
              <div className="slide-box">
                <h3>Leon</h3>
                <p>
                  Web Designer Express did a great job of not only creating our
                  website how we wanted it to be, but also gave us great insight
                  on what they believed will help boost sales. Their proven
                  experience and excellence is the reason why our company would
                  recommend Web Designer Express to anyone who is looking to
                  create a customized website.
                </p>
                <Rating defaultValue={4.2} precision={0.5} />
              </div>
            </SwiperSlide>
          </div>
          <div className="slide1">
            <SwiperSlide className="slide-a">
              <div className="slide-box">
                <h3>Jerry</h3>
                <p>
                  Excellent, working with web designer express was great. Thanks
                  to their knowledge and determination our website looks great
                  and functions really good. I am recommend anyone that is
                  looking for a custom website to give them a call and speak to
                  Gus, he will guide you to the right direction.
                </p>
                <Rating defaultValue={3.5} precision={0.5} />
              </div>
            </SwiperSlide>
          </div>
          <div className="slide1">
            <SwiperSlide className="slide-a">
              <div className="slide-box">
                <h3>Becky</h3>
                <p>
                  Awesome, Awesome company!!! Thrive has been helping us for
                  years. They created our website and have continually updated
                  it and adjusted to our growing and changing company. They have
                  increased our online presence in every area we take on.
                </p>
                <Rating defaultValue={3.8} precision={0.5} />
              </div>
            </SwiperSlide>
          </div>
          <div className="slide1">
            <SwiperSlide className="slide-a">
              <div className="slide-box">
                <h3>Libby</h3>
                <p>
                  We at Kee Service were very impressed with the all aspects of
                  our new website. We would highly reccomend Thrive to anyone
                  looking to build a new website.
                </p>
                <Rating defaultValue={4.5} precision={0.5} />
              </div>
            </SwiperSlide>
          </div>
          <div className="slide1">
            <SwiperSlide className="slide-a">
              <div className="slide-box">
                <h3>Aron</h3>
                <p>
                  I went to Thrive with a basic “feel” I wanted in a website.
                  They helped flush out the visual layout and content. Thrive’s
                  services are bargain when you weigh the cost versus the
                  product you receive. I will be using them again in future
                  endeavors. Thanks again!
                </p>
                <Rating defaultValue={4} precision={0.5} />
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default Client;
