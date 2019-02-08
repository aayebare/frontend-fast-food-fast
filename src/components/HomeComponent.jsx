import React from 'react';
// import "./App.css";
import "../Assets/home.css";

const Home = () => {
  return (
    <div className="home-page">
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Fast-Food-Fast</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/signup">SignUp</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>
      </nav>
      <div className="container home-body">
      </div>
    </div>
  );
};

export default Home;