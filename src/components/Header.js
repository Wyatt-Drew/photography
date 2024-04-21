import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css'; // Importing CSS module

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Sask Photography</h1>
      <nav>
        <NavLink className={({ isActive }) => isActive ? styles.activeLink : styles.link} to="/" end>Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? styles.activeLink : styles.link} to="/about-us">About Us</NavLink>
        <NavLink className={({ isActive }) => isActive ? styles.activeLink : styles.link} to="/services">Services</NavLink>
        <NavLink className={({ isActive }) => isActive ? styles.activeLink : styles.link} to="/gallery">Gallery</NavLink>
        <NavLink className={({ isActive }) => isActive ? styles.activeLink : styles.link} to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;
