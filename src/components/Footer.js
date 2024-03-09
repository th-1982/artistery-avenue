import React, { useState} from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import styles from '../styles/Footer.module.css';
import TermsOfService from "../components/TermsOfService";

// Footer Component
const Footer = () => {
    // Properties for the modal of TermsOfService inside the Footer
    const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

    const openTermsModal = () => {
        setIsTermsModalOpen(true);
    };

    const closeTermsModal = () => {
        setIsTermsModalOpen(false);
    };
    // Footer Structure
    return (
        <Container className={`${styles.container} p-4 mt-2`}>
            <div className={styles.contactContainer}>
                <div className={styles.contactAndIconsContainer}>
                    <span>Contact us:</span>
                    <div className={styles.iconContainer}>
                        <NavLink
                          className={styles.NavLink}
                          activeClassName={styles.Active}
                          to="/contact"
                          aria-label="Contact"
                        >
                          <i className="fas fa-envelope"></i>{" "}
                          {/* redirects to the Contact component */}
                        </NavLink>
                        <a
                          className={styles.NavLink}
                          href="https://www.linkedin.com/in/theresa-wolff-4a3422265/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Linkedin"
                        >
                          <i className="fa-brands fa-linkedin"></i>
                          {/* Opens a new tab for Linkedin */}
                        </a>
            
                        <a
                          className={styles.NavLink}
                          href="https://github.com/th-1982/artistery-avenue"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Github"
                        >
                          <i className="fab fa-github"></i>{" "}
                          {/* Opens a new tab for Github */}
                        </a>
                    </div>
                </div>
                <div className={styles.copyright}>
                    <span>
                      © 2023 Copyright • Artistery Avenue •{" "}
                      <a
                          href="#"
                          onClick={openTermsModal}
                          aria-label="Open Terms of Service"
                        >
                          Terms of Service
                        </a>
                    </span> 
                </div>
            </div>
            <TermsOfService isOpen={isTermsModalOpen} onRequestClose={closeTermsModal} />
        </Container>
    );
};

export default Footer;
