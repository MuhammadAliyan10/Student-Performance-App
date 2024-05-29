import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/Css/Sidebar.css";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);
  useEffect(() => {
    function checkSmallScreen() {
      if (window.innerWidth < 800) {
        setSmallScreen(true);
        setOpen(true);
      } else {
        setSmallScreen(false);
      }
    }

    checkSmallScreen();
    window.addEventListener("resize", checkSmallScreen);
    return () => {
      window.removeEventListener("resize", checkSmallScreen);
    };
  }, []);
  const handleClickLink = () => {
    if (smallScreen) {
      setOpen(!open);
    }
  };
  const location = useLocation();
  return (
    <div className="row">
      <div className="col-sm-3">
        <div className={open ? "sidebar close" : "sidebar"}>
          <div className="sideBar__btn">
            {smallScreen && (
              <button onClick={() => setOpen(!open)}>
                {!open ? (
                  <i class="fa-solid fa-door-closed"></i>
                ) : (
                  <i class="fa-solid fa-door-open"></i>
                )}
              </button>
            )}
          </div>
          <h2 className="sidebar__main__heading">Dashboard</h2>
          <div className="sidebar__content">
            <ul>
              <h3>Main</h3>
              <li className={location.pathname == "/" ? "active" : ""}>
                <i className="fa-solid fa-house"></i>
                <Link to="/" onClick={handleClickLink}>
                  Home
                </Link>
              </li>
              <li className={location.pathname == "/standing" ? "active" : ""}>
                <i className="fa-solid fa-trophy"></i>
                <Link to="/standing" onClick={handleClickLink}>
                  Standing
                </Link>
              </li>
              <li>
                <i className="fa-solid fa-magnifying-glass"></i>
                <Link to="/search" onClick={handleClickLink}>
                  Search
                </Link>
              </li>
              <li>
                <i className="fa-solid fa-message"></i>
                <Link to={"/message"} onClick={handleClickLink}>
                  Message
                </Link>
              </li>
            </ul>
          </div>
          <div className="sidebar__content bottom">
            <ul>
              <h3>User</h3>
              <li>
                <i className="fa-solid fa-user"></i>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <i className="fa-solid fa-circle-info"></i>
                <a href="">Help</a>
              </li>
              <li>
                <i className="fa-solid fa-right-from-bracket"></i>
                <a href="">Log Out</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
