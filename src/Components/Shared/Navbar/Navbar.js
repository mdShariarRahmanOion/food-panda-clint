import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <div class="collapse navbar-collapse" className="navBar" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto ">
        <li class="nav-item">
          <a class="nav-link ms-5 "  aria-current="page" href="home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5" href="about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5" href="order">Order</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5 " href="admin">Admin</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5 " href="dashboard">Dashboard</a>
         
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5 " href="contact">Contact Us</a>
          
        </li>
        <li class="nav-item">
          
          <Link className="btn btn-primary" to="/login">Log In</Link>
          
        </li>
     
      
      </ul>    
  </div>
  </div>
</nav>
    );
};

export default Navbar;