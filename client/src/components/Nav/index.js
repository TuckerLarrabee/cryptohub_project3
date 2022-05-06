import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
// import crypto from '../../assets/CryptoHubLogo.png'

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-2">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-2">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1 justify-content space-between navbar">
      
        <Link to="/">
          <section  className="navbarLink"/>
          {/* <span role="img" aria-label="shopping bag" className="cryptotext">CryptoHub</span> */}
          {/* <img src="/CryptoHubLogo.png" alt="cryptohub logo"/> */}
        </Link>
      

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
