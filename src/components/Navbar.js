import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";


const Navbar = () => {
  return (
    <>
      <div className="headerMain">
      <div className="header-col1">
      <Link to="/"><img src="images/logo.png" alt="logo" className="logo" /></Link>
      <input type="checkbox" id="openNavMenu" />
      <label for="openNavMenu" className="NavMenuIcon">
        <i className="fa-solid fa-bars"></i>
      </label>
      <nav id="navMenu">
        <ul className="menuItems">
          <li><Link to="/">Summary</Link></li>
          <li><Link to="wallchart">Wallchart</Link></li>
          <li><Link to="myleaves">My Leaves</Link></li>
          <li><Link to="submit">Submit</Link></li>
        </ul>
      </nav>
    </div>

    <div className="header-col2">
      <select name="org-name" id="org-name">
        <option selected value="none">Select Organization</option>
        <option value="Pseudosquare">Pseudosquare</option>
        <option value="RankYard">RankYard</option>
      </select>
      <i className="fa-solid fa-gear iconSetting"></i>
      <i className="fa-regular fa-bell iconBell"></i>
      <div className="user-account-toggle">
        <img src="images/currentuser.png" alt="" />
        <select name="current-user" id="">
          <option value="">Momcilo</option>
        <option value="">Faisal</option>
        </select>
      </div>
    </div>
  </div>
    </>
  )
}

export default Navbar