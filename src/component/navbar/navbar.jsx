import { NavLink } from "react-router-dom";
import style from "./navbar.module.css";

const Navbar = () => {
  return (
    <ul className="nav justify-content-center bg-dark w-100">
      <li className="nav-item">
        <NavLink className="nav-link active" aria-current="page" href="#">
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/lesson" className="nav-link">
          Lesson
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
