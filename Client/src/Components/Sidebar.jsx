import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/Css/Sidebar.css";

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="row">
      <div className="col-sm-3">
        <div className="sidebar">
          <h2 className="sidebar__main__heading">Dashboard</h2>
          <div className="sidebar__content">
            <ul>
              <h3>Main</h3>
              <li className={location.pathname == "/" ? "active" : ""}>
                <i className="fa-solid fa-house"></i>
                <Link to="/">Home</Link>
              </li>
              <li className={location.pathname == "/standing" ? "active" : ""}>
                <i className="fa-solid fa-trophy"></i>
                <Link to="/standing">Standing</Link>
              </li>
              <li>
                <i className="fa-solid fa-magnifying-glass"></i>
                <Link to="/search">Search</Link>
              </li>
              <li>
                <i className="fa-solid fa-message"></i>
                <Link to={"/message"}>Message</Link>
              </li>
            </ul>
          </div>
          <div className="sidebar__content bottom">
            <ul>
              <h3>User</h3>
              <li>
                <i className="fa-solid fa-user"></i>
                <a href="">Profile</a>
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
