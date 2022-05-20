import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
// import Crypto from "../../assets/CryptoHubLogo.png"

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row logout">
          <li className="mx-1">
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="signlog flex-row">
          <li className="mx-1 px-2">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="mx-1 px-2">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header
      className="flex-row px-1 justify-content space-between navbar"
      style={{ position: "relative", top: "-20px" }}
    >
      <Link className="navbarLink"  to="/">
        {/* <img src={require('../../assets/CryptoHubLogo.png')} className="navbarLink"></img> */}
        {/* <section className="navbarLink" /> */}
        CryptoHub
      </Link>
      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
