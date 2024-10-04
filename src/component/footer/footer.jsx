import { Link } from "react-router-dom";
import style from "./footer.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useEffect } from "react";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  useEffect(() => {
    console.log(year);
  }, []);
  return (
    <footer className={`text-light py-4`}>
      <div className="container text-center">
        <ul className="list-inline">
          <li className="list-inline-item">
            <a
              target="_blank"
              href="https://web.facebook.com/magdiyy"
              className="text-light"
            >
              <FaFacebookSquare />
            </a>
          </li>
          <li className="list-inline-item">
            <a
              target="_blank"
              href="https://www.instagram.com/mohamed._.magdiy?igsh=MTRqbngzODl0aDlr"
              className="text-light"
            >
              <FaInstagram />
            </a>
          </li>
          <li className="list-inline-item">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/mohammed-magdiy/"
              className="text-light"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="list-inline-item">
            <a
              target="_blank"
              href="https://www.youtube.com/@mohamedmagdy3362"
              className="text-light"
            >
              <FaYoutube />
            </a>
          </li>
        </ul>
        <p>&copy; {year} All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
