import React from "react";
import PropTypes from 'prop-types';
import ArrowBackIosNewRoundIcon from '@mui/icons-metarial/ArrowBackIosNewRound';
import './Navbar.css';
import { Navlink } from 'react-router-dom';

const Navbar = ({ title, back }) => (
  <nav className="nav">
    {back ? (<Navlink to="/"><ArrowBackIosNewRoundIcon className="back" /></NavLink>) : <img className="nav-icons" src="./images/polar-beer.png" alt="animal" />}
    <h2 className="nav-title">{title}</h2>
    <div className="nav-search">
      <img className="nav-icons mic" src="./images/mic.png" alt="mic" />
      <img className="nav-icons" src="./images/settings-cog.png" alt="mic" />
    </div>
  </nav>
);

Navbar.PropTypes = {
  title: PropTypes.string.isRequired,
  back: PropTypes.bool,
};

Navba.defaultProps = {
  back: false,
};

export default Navbar;