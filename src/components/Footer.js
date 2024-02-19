import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <Container className={`${styles.container} p-4 mt-2`}>
      <div className={`${styles.container} p-4 mt-2`}>
        <div className={styles.contactAndIconsContainer}>
          <span>Contact us:</span>
          <div className={styles.iconContainer}>
            <NavLink
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/contact"
              aria-label="Contact"
            >
              <i className="fas fa-envelope"></i>
            </NavLink>
            <a
              className={styles.NavLink}
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
            
            <a
              className={styles.NavLink}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              className={styles.NavLink}
              href="https://twitter.com/home"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className={styles.copyright}>
          <span >© 2023 Copyright • Artistery Avenue •{" "}</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
