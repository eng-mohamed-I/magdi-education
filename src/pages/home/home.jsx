import style from "./home.module.css";
import Footer from "../../component/footer/footer";
import Navbar from "../../component/navbar/navbar";

const Home = () => {
  return (
    <div className={style.home}>
      <div className={style.navbar}>
        <Navbar />
      </div>
      <div className={style.main}> Main </div>
      <div className={style.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
