import { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/ivf-pulse-logo.png';
import { GoArrowRight } from 'react-icons/go';
import { FiMenu, FiX } from 'react-icons/fi'; // FiX is the cross icon

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <div className="navbar-container">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Navbar links */}
      <div className={`navbar-links ${isMenuOpen ? 'show' : ''}`}>
        {['Donor Programme', 'Fertility Preservation', 'Advanced Treatments', 'Infertility Treatments', 'IVF Testing', 'About Us'].map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} className="nav-link">
            {link}
          </a>
        ))}
      </div>

      {/* Button or Hamburger menu */}
      <div className="navbar-button">
        <button className={`button-talk ${isMenuOpen ? 'hide' : ''}`}>
          <span className="talk-to-us">
            Talk to Us <GoArrowRight className="arrow-navbar" />
          </span>
        </button>
        {/* Hamburger Icon / Cross Icon */}
        <div className="hamburger-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FiX className="close" /> : <FiMenu />}
        </div>
      </div>
    </div>


    </>
  );
}

export default Navbar;
