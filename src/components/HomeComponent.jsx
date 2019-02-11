import React from 'react';
// import "./App.css";
import "../Assets/home.css";

const Home = () => {
  return (
    <div id="home">

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Fast Food Fast</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/get">Home </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/addItem">Add New Item</a>
            </li>
          </ul>
        </div>
      </nav>

    </div>
  );
};

export default Home;