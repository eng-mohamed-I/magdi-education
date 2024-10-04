import React from "react";
import style from "./header.module.css";

const Header = () => {
  const name = "Mr. Mohamed Magdi";
  const title = "Passionate English Teacher & Learn With Me";
  const photo = "profile.jpg";

  return (
    <div className="container-fulid">
      <div
        className={`${style.detail} mt-2 mb-2 container d-flex align-items-center p-3 rounded shadow-md`}
      >
        <img
          src={photo}
          alt={name}
          className="rounded-circle me-3"
          style={{ width: "100px", height: "100px" }}
        />
        <div>
          <h1 className="h4 mb-0 text-light">{name}</h1>
          <h2 className="h6 text-primary">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
