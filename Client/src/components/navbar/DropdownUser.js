import { NavDropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { Link } from "react-router-dom";

import Profile from "../pictures/profile.svg";
import Movie from "../pictures/movie.svg";
import Logout from "../pictures/logout.svg";
import Default from "../pictures/default.png";

export const DropdownUser = () => {
  const router = useHistory();
  const [state] = useContext(UserContext);
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
            <img className="img-profile" src={Default} alt="navbarPict" />
          </div>
        }
      >
        <li>
          <NavDropdown.Item>
            <Link to={`/profile/${state?.user?.id}`}>
              <div
                style={{
                  display: "flex",
                }}
              >
                <img className="drop-img" src={Profile} alt="" />
                <p>Profile</p>
              </div>
            </Link>
          </NavDropdown.Item>
        </li>
        <li>
          <NavDropdown.Item onClick={() => router.push("/listfilm")}>
            <div
              style={{
                display: "flex",
              }}
            >
              <img className="drop-img" src={Movie} alt="" />
              <p>My List Film</p>
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
};
