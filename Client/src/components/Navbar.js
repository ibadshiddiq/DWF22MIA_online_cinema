import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "./context/userContext";

import Default from "../components/pictures/default.png";
import Logo from "../components/pictures/logo.svg";
import Profile from "../components/pictures/profile.svg";
import Movie from "../components/pictures/movie.svg";
import Logout from "../components/pictures/logout.svg";

import Modal from "./modal/Modal";
import Login from "./modal/Login";
import Register from "./modal/Register";

const Navbar = () => {
  const [state] = useContext(UserContext);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleShowRegister = () => {
    setShowRegister(true);
  };
  const handleCloseRegister = () => {
    setShowRegister(false);
  };

  const handleShowLogin = () => {
    setShowLogin(true);
  };
  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const toggleToRegister = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const toggleToLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  return (
    <>
      <Modal show={showLogin} handleClose={handleCloseLogin}>
        <Login toggle={toggleToRegister} handleClose={handleCloseLogin} />
      </Modal>
      <Modal show={showRegister} handleClose={handleCloseRegister}>
        <Register toggle={toggleToLogin} handleClose={handleCloseLogin} />
      </Modal>

      <nav className="navbar1">
        <div>
          <Link to="/">
            <img className="logo" src={Logo} alt="#" />
          </Link>
        </div>
        <div className="nav-link1">
          {state.login ? (
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  className="img-profile"
                  src={
                    `http://localhost:5000/${state?.user?.avatar}` ===
                    "http://localhost:5000/null"
                      ? Default
                      : `http://localhost:5000/${state?.user?.avatar}`
                  }
                  alt=""
                />
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <Link
                    className="dropdown-item"
                    to={`/profile/${state?.user?.id}`}
                  >
                    <img className="drop-img" src={Profile} alt="" />
                    Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/fund">
                    <img className="drop-img" src={Movie} alt="" />
                    My List Film
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/logout">
                    <img className="drop-img" src={Logout} alt="" />
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <ul className="navbar-ul">
              <label onClick={handleShowLogin} className="link-login">
                Login
              </label>
              <label onClick={handleShowRegister} className="link-register">
                Register
              </label>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
