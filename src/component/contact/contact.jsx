import style from "./contact.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div>
        <ul className="d-flex justify-content-center flex-column list-inline">
          <li className="list-inline-item">
            <a
              target="_blank"
              href="https://web.facebook.com/magdiyy"
              className="text-light"
            >
              <FaFacebookSquare />
              <span className={style.links}>Facebook</span>
            </a>
          </li>
          <li className="list-inline-item">
            <a
              target="_blank"
              href="https://www.instagram.com/mohamed._.magdiy?igsh=MTRqbngzODl0aDlr"
              className="text-light"
            >
              <FaInstagram />
              <span className={style.links}>Instagram</span>
            </a>
          </li>
          <li className="list-inline-item">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/mohammed-magdiy/"
              className="text-light"
            >
              <FaLinkedin />
              <span className={style.links}>LinkedIn</span>
            </a>
          </li>
          <li className="list-inline-item">
            <a
              target="_blank"
              href="https://www.youtube.com/@mohamedmagdy3362"
              className="text-light"
            >
              <FaYoutube />
              <span className={style.links}>Youtube</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Contact;
