import { Link, NavLink } from "react-router-dom";
import style from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav class=" position-fixed w-100 navbar navbar-expand-lg">
      <div class="container-fluid">
        <Link to="/" class="navbar-brand text-primary">
          Magdi
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a
                class="nav-link text-light"
                aria-current="page"
                href="#youtube"
              >
                Youtube
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
