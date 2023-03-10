import './sidebar.scss';
import React from 'react'
import Subtitle from '../../assets/images/myLogo.PNG';
import Logo from '../../assets/images/logo-s.png';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
} from '@fortawesome/free-brands-svg-icons';
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';

function SideBar() {

    const [showNav, setShowNav] = useState(true);

    return (
        <div className="nav-bar">
        <Link 
            className="logo"
            to="/"
            onClick={() => setShowNav(false)}>
            <img src={Logo} alt="Logo" />
            <img className="sub-logo" src={Subtitle} alt="slobodan" />
        </Link>

        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink 
            exact="true"
            to="/"
            onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink 
            activeclassname="active"
            className="about-link"
            to="/about"
            onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink
            activeclassname="active"
            className="portfolio-link"
            to="/portfolio"
            onClick={() => setShowNav(false)}
            >
            <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
            </NavLink>
            <NavLink
            activeclassname="active"
            className="contact-link"
            to="/contact"
            onClick={() => setShowNav(false)}
            >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            <FontAwesomeIcon 
            onClick={() => setShowNav(false)}
            icon={faClose}
            color="#ffd700"
            size="3x"
            className='close-icon' />
        </nav>

        <ul>
            <li>
            <a
                href="https://www.linkedin.com/in/slobodan-gaji%C4%87-006bb8b8/"
                target="_blank"
                rel="noreferrer"
            >
                <FontAwesomeIcon
                icon={faLinkedin}
                color="#4d4d4e"
                className="anchor-icon"
                />
            </a>
            </li>
            <li>
            <a
                href="https://github.com/bobangajicsm"
                target="_blank"
                rel="noreferrer"
            >
                <FontAwesomeIcon
                icon={faGithub}
                color="#4d4d4e"
                className="anchor-icon"
                />
            </a>
            </li>
            <li>
            <a
                href="https://www.youtube.com/channel/UCBu5ulO4d-d47lAVybpRTkw"
                rel="noreferrer"
                target="_blank"
            >
                <FontAwesomeIcon
                icon={faYoutube}
                color="#4d4d4e"
                className="anchor-icon"
                />
            </a>
            </li>
            <li>
            <a href="skype:live:bobangajicsm" rel="noreferrer" target="_blank">
                <FontAwesomeIcon
                icon={faSkype}
                color="#4d4d4e"
                className="anchor-icon"
                />
            </a>
            </li>
        </ul>
        <FontAwesomeIcon 
            onClick={() => setShowNav(true)}
            icon={faBars}
            color="#ffd700"
            size="3x"
            className='hamburger-icon' />
    </div>
    )
}

export default SideBar
