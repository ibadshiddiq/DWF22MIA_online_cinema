import { NavDropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

import Profile from "../pictures/profile.svg";
import Movie from "../pictures/movie.svg";
import Logout from "../pictures/logout.svg";
import Default from "../pictures/default.png";
import AddFilmAdmin from "../pictures/AddFilmAdmin.svg";

function DropdownAdmin() {
  const router = useHistory();
  const [, dispatch] = useContext(UserContext);
  const handleLogout = () => {
    dispatch({
      type: "logout",
    });
  };
  return (
    <div>
      <NavDropdown
        title={
          <div>
            <img className="img-profile-admin" src={Default} alt="navbarPict" />
          </div>
        }
      >
        <li>
          <NavDropdown.Item onClick={() => router.push("/addfilm")}>
            <div
              style={{
                display: "flex",
              }}
            >
              <img className="drop-img" src={AddFilmAdmin} alt="" />
              <p>Add Film</p>
            </div>
          </NavDropdown.Item>
        </li>
        <li>
          <NavDropdown.Item onClick={() => router.push("/translist")}>
            <div
              style={{
                display: "flex",
              }}
            >
              <img className="drop-img" src={Movie} alt="" />
              <p>List Transaction</p>
            </div>
          </NavDropdown.Item>
        </li>
        <li>
          <NavDropdown.Item onClick={handleLogout}>
            <div
              style={{
                display: "flex",
              }}
            >
              <img className="drop-img" src={Logout} alt="" />
              <p>Logout</p>
            </div>
          </NavDropdown.Item>
        </li>
      </NavDropdown>
    </div>
  );
}

export default DropdownAdmin;
