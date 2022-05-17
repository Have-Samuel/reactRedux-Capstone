import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo192.png';
import { retrieveMissions } from '../../redux/missions/actions';
import { retrieveRockets } from '../../redux/rockets/activities';
import style from './Navbar.module.scss';

function Navbar() {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/myprofiles',
      text: 'Myprofile',
    },
  ];

  const {
    nav,
    logoImg,
    logoText,
    navItems,
    item,
    itemLink,
    logoContainer,
    selectedItem,
  } = style;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveRockets());
  }, []);

  useEffect(() => {
    dispatch(retrieveMissions());
  }, []);

  return (
    <div className={nav}>
      <div className={logoContainer}>
        <img src={logo} alt="Logo" className={logoImg} />
        <h1 className={logoText}>Space Traveler&apos;s Hub</h1>
      </div>
      <ul className={navItems}>
        {links.map((link) => (
          <li key={link.id} className={item}>
            <NavLink to={link.path} className={({ isActive }) => (isActive ? `${itemLink} ${selectedItem}` : itemLink)}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
