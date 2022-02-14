import React from "react";
import "./NavBar.scss";
import Logo from "../../media/Logo/logo.svg";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import OutsideClickHandler from "react-outside-click-handler";
import { Button } from "@mui/material";

// Creating navbar

const NavBar = (props) => {
  const [menu, setMenu] = React.useState(1);

  return (
    <nav>
      <div className="nav-bar-container">
        <div className="nav-bar-logo">
          <Link
            to="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={Logo} alt="logo" />
            <div className="nav-logo-name">Hardcore Shippers</div>
          </Link>
        </div>

        <div className="window-navigation nav-bar-links">
          <NavLink
            to={`/${props.identity}/home`}
            className="nav-bar-link-items"
            activeClassName="active-link-items"
          >
            Home
          </NavLink>
          <NavLink
            to={`/${props.identity}/history`}
            className="nav-bar-link-items"
            activeClassName="active-link-items"
          >
            History
          </NavLink>
          <NavLink
            to={`/${props.identity}/profile`}
            className="nav-bar-link-items"
            activeClassName="active-link-items"
          >
            Profile
          </NavLink>
          <Button
            variant="outlined"
            color="error"
            className="nav-bar-link-items logout-window"
          >
            Logout
          </Button>
        </div>

        <div className="mobile-navigation">
          <div className="hamburger">
            {menu === 1 ? (
              <MenuIcon onClick={() => setMenu(2)} />
            ) : (
              <CloseIcon onClick={() => setMenu(1)} />
            )}
          </div>

          <OutsideClickHandler onOutsideClick={() => setMenu(1)}>
            {menu === 2 ? (
              <div className="mobile-nav-links">
                <NavLink
                  to={`/${props.identity}/home`}
                  className="mobile-link-items"
                  activeClassName="active-link-items-mobile"
                >
                  Home
                </NavLink>

                <NavLink
                  to={`/${props.identity}/history`}
                  className="mobile-link-items"
                  activeClassName="active-link-items-mobile"
                >
                  History
                </NavLink>
                <NavLink
                  to={`/${props.identity}/profile`}
                  className="mobile-link-items"
                  activeClassName="active-link-items-mobile"
                >
                  Profile
                </NavLink>

                <Button color="error" className=" logout-mobile">
                  Logout
                </Button>
              </div>
            ) : null}
          </OutsideClickHandler>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
