import { Link } from "react-router-dom";
import style from "./footer.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container text-center">
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#!" className="text-light">
              <FaFacebookSquare />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#!" className="text-light">
              <FaInstagram />
            </a>
          </li>
          <li className="list-inline-item">
            <Link to="/contact" className="text-light">
              <FaLinkedin />
            </Link>
          </li>
        </ul>
        <p>&copy; 2024 All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
