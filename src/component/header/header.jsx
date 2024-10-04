import React from "react";
import style from "./header.module.css";

const Header = () => {
  const name = "Mr. Mohamed Magdi";
  const title = "Passionate English Teacher & Learn With Me";
  const discription = `My name is Mohamed Magdi, and I am an enthusiastic English teacher. I graduated from Tanta University in 2022 with a very good degree, and I’m currently pursuing a Master's in Teaching. I’m passionate about fostering a love for English literature and helping my students develop effective communication skills.
Creating an engaging and inclusive classroom environment is very important to me, and I strive to inspire my students to reach their full potential while appreciating the beauty of the English language. Outside of teaching, I love reading, exploring new literature, and keeping up with the latest trends in education.`;
  const photo = "profile.jpg";

  return (
    <div className="container-fulid">
      <div
        className={`${style.detail} mt-2 mb-2 container d-flex align-items-center p-3 rounded shadow-md`}
      >
        <div>
          <img
            src={photo}
            alt={name}
            className="rounded-circle me-3"
            style={{ width: "100px", height: "100px" }}
          />
        </div>

        <div>
          <h1 className="h4 mb-0 text-light">{name}</h1>
          <h2 className="h6 text-primary">{title}</h2>
          <p>{discription}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
