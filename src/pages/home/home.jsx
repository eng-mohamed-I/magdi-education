import style from "./home.module.css";
import Footer from "../../component/footer/footer";
import Navbar from "../../component/navbar/navbar";
import Header from "../../component/header/header";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Content from "../../component/content/content";
import { Link, NavLink, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className={style.home}>
      <div className={style.navbar}>
        <Navbar />
      </div>
      <div className={style.main}>
        <Header />
        <div className="container mt-5 mb-5 text-center ">
          <div
            class="btn-group mb-5"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio2"
              autocomplete="off"
            />
            <Link to="youtube" class="btn btn-primary" for="btnradio2">
              youtube
            </Link>
            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio3"
              autocomplete="off"
            />
            <Link to="contact" class="btn btn-primary" for="btnradio3">
              Contact me
            </Link>
          </div>
          <Outlet />
        </div>
      </div>
      <div className={style.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
