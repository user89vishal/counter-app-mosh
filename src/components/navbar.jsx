import React, { Component } from "react";
// stateless functional component

const NavBar = ({ totalCounters }) => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <span className="badge badge-pill badge-secondary">
            Total number of counters : {totalCounters}
          </span>
        </a>
      </nav>
    </div>
  );
};
export default NavBar;
