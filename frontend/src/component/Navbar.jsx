import React from "react";
import { useAuth } from "../hooks/useAuth";
import { useCart } from "../CartContext";

function Navbar() {
  const { user } = useAuth();
  return (
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light"
      style={{ padding: "0 2rem" }}
    >
      <a class="navbar-brand" href="/">
        <img
          src="../logo.webp"
          style={{ maxWidth: "4rem", borderRadius: "2rem" }}
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="/">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">
              Account
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">
              Menu
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/checkout">
              Cart
            </a>
          </li>
          {user ? (
            <>
              <li class="nav-item">
                <a class="nav-link" href="/login">
                  Log in
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/createprofile">
                  Sign Up
                </a>
              </li>
            </>
          ) : (
            <>
              <li class="nav-item">
                <a class="nav-link" href="/login">
                  Log in
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/createprofile">
                  Sign Up
                </a>
              </li>
            </>
          )}

          {/* <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown link
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
