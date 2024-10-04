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

const Home = () => {
  return (
    <div className={style.home}>
      <div className={style.navbar}>
        <Navbar />
      </div>
      <div className={style.main}>
        <Header />
        <div className="container mt-5 mb-5 text-center ">
          <h4
            className="btn btn-primary mb-5 bg-gradient
"
          >
            Videos
          </h4>
          <Content />
        </div>
      </div>
      <div className={style.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
