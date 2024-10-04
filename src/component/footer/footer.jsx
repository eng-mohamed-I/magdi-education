import { Link } from "react-router-dom";
import style from "./footer.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-light py-4">
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
        </ul>
        <p>&copy; 2024 All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
