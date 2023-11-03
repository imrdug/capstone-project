import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';
import logoImage from '../../assets/logo.png';

const Header = () => {
  const { pathname } = useLocation();
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Book a table', path: '/booking' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header>
      <nav className="container grid nav-bar">
        <Link className="nav-bar-logo" to="/">
          <img src={logoImage} alt="Little Lemon logo" />
        </Link>
        <button
          className="nav-bar-hamburger"
          type="button"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          {isNavExpanded ? (
            <FontAwesomeIcon icon={faXmark} size="2x" />
          ) : (
            <FontAwesomeIcon icon={faBars} size="2x" />
          )}
        </button>
        <ul
          className={isNavExpanded ? 'nav-bar-links expanded' : 'nav-bar-links'}
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          {navLinks.map((navLink, index) => (
            <li key={index}>
              <Link
                className={pathname === navLink.path ? 'current-location' : ''}
                to={navLink.path}
              >
                {navLink.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
