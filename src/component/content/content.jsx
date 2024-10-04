import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "./content.module.css";

const Content = () => {
  let content = [
    {
      link: "https://www.youtube.com/shorts/CctaDhh1_80",
      img: "https://i.ytimg.com/vi/CctaDhh1_80/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBh-geTcmxdDFmf62LO2qzdFxT3FQ",
    },
    {
      link: "https://www.youtube.com/shorts/AQdoXMn1dZc",
      img: "https://i.ytimg.com/vi/AQdoXMn1dZc/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLDdOSOIga3sZBPg5kgNRqUAVwIQjg",
    },
    {
      link: "https://www.youtube.com/watch?v=poFBM73sdu8",
      img: "https://i.ytimg.com/vi/poFBM73sdu8/hqdefault.jpg?sqp=-oaymwE2CPYBEIoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARh_IBkoFDAP&rs=AOn4CLBa0TCX-c3SnC7EPlSw1gT3WVmZaw",
    },
    {
      link: "https://www.youtube.com/watch?v=jxPdvl8mCzY",
      img: "https://i.ytimg.com/an_webp/jxPdvl8mCzY/mqdefault_6s.webp?du=3000&sqp=CKjY_7cG&rs=AOn4CLDM7IVDMKwyf7oZnhoN_2kkDseB-w",
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {content.map((item) => {
        return (
          <SwiperSlide>
            <a
              role="button"
              href={item.link}
              target="_blank"
              className={`${styles.cCard}  text-center`}
            >
              <div className="">
                <img src={item.img} class={`${styles.cImg}`} alt="" />
              </div>
            </a>
          </SwiperSlide>
        );
      })}
      ...
    </Swiper>
  );
};

export default Content;
