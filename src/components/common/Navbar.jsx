import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { retrieveRockets } from '../../redux/rockets/activities';
import style from './Navbar.module.scss';

function Navbar() {
  const links = [];

  const {
    nav,
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

  return (
    <div className={nav}>
      <div className={logoContainer}>
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
