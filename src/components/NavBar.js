import React, { useState, useEffect} from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser, } from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import { removeTokenTimestamp } from "../utils/utils";

// Navigation Bar Component
const NavBar = () => {
    const currentUser = useCurrentUser();
    console.log('currentUser :', currentUser);
    const setCurrentUser = useSetCurrentUser();   

    const { expanded, setExpanded, ref } = useClickOutsideToggle();
    const [isMobile, setIsMobile] = useState(false);

    // Handles AUTHentication - Sign Out
    const handleSignOut = async () => {
        try {
            await axios.post("dj-rest-auth/logout/");
            setCurrentUser(null);
            removeTokenTimestamp();
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const addPostIcon = (
        <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/posts/create"
        >
            <i className="fas fa-plus-square"></i>Add post
        </NavLink>
    )

    const loggedInIcons = ( 
        <span className={styles.LoggedInUser}>
            <NavLink
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/feed"
            >
                <i className="fa-solid fa-list-check"></i>Feed
            </NavLink>
            <NavLink
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/artists"
            >
                <i className="fa-solid fa-palette"></i>Artist
            </NavLink>
            <NavLink
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/liked"
            >
                <i className="fas fa-heart"></i>Liked
            </NavLink>
            <NavLink
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/bookmarked"
            >
                <i className="fa-solid fa-bookmark"></i>Bookmark
            </NavLink>
            <NavLink
                className={styles.NavLink}
                to="/" onClick={handleSignOut}>
                <i className="fas fa-sign-out-alt"></i>Sign out
            </NavLink>
            <NavLink
                className={styles.NavLink}
                to={`/profiles/${currentUser?.profile_id}`}
            >
                <Avatar src={currentUser?.profile_image} text="Profile" height={40} />
            </NavLink>
        </span>
    );
    const loggedOutIcons = (
        <>
            <NavLink
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/signin"
            >
                <i className="fas fa-sign-in-alt"></i>Sign in
            </NavLink>
            <NavLink
                to="/signup"
                className={styles.NavLink}
                activeClassName={styles.Active}
            >
                <i className="fas fa-user-plus"></i>Sign up
            </NavLink>
        </>
    );

    return (
        <Navbar expanded={expanded} className={styles.NavBar} expand="md" fixed="top">
            <Container>
                <NavLink to="/">
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="logo" height="45" />
                    </Navbar.Brand>
                </NavLink>
                {currentUser && addPostIcon}
                <Navbar.Toggle 
                    ref={ref}
                    onClick={() => setExpanded(!expanded)} 
                    aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-left">
                        <NavLink 
                            exact 
                            className={styles.NavLink} 
                            activeClassName={styles.Active} 
                            to="/"
                        >
                            <i className="fas fa-home"></i>Home
                        </NavLink>
                        {isMobile && (
                            <NavLink
                                className={styles.NavLink}
                                activeClassName={styles.Active}
                                to="/contact"
                            >
                                <i className="fas fa-envelope"></i>Contact
                            </NavLink>
                        )}
                       
                        {currentUser ? loggedInIcons : loggedOutIcons}  
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;