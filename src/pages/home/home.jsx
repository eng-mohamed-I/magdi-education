import style from "./home.module.css";
import Footer from "../../component/footer/footer";
import Navbar from "../../component/navbar/navbar";
import Header from "../../component/header/header";

const Home = () => {
  return (
    <div className={style.home}>
      {/* <img src="background.jpg" alt="" /> */}
      <div className={style.navbar}>
        <Navbar />
      </div>
      <div className={style.main}>
        <Header />
      </div>
      <div className={style.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
