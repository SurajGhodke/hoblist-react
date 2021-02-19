import React from "react";
import { Link, withRouter } from "react-router-dom";

// const currentTab = (history, path) => {
//   if (history.location.pathname === path) {
//     return { color: "#2ecc72" };
//   } else {
//     return { color: "#FFFFFF" };
//   }
// };
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5 py-8">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            MovieList
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <Link
                // style={currentTab(history, "/")}
                className="nav-link"
                to="/home"
              >
                Home
              </Link>
              <Link
                // style={currentTab(history, "/signup")}
                className="nav-link"
                to="/signup"
              >
                Signup
              </Link>
              <Link className="nav-link" to="/login">
                Login
              </Link>
              <Link className="nav-link" to="/company-info">
                Company Info
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
