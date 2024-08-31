import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Import the Auth context
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../Assets/logohh.jpg'; // Import the logo image

const Navbar = () => {
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const { isLoggedIn, user } = useAuth(); // Use the Auth context

  const handleMoreDropdownToggle = () => {
    setIsMoreDropdownOpen((prevState) => !prevState);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo-image" />
        </Link>
      </div>
      <ul className="navbar-links">
      {isLoggedIn ? (
  <>
    <li><Link to="/soil"><i className="fas fa-leaf"></i> Soil</Link></li> 
    <li><Link to="/crops"><i className="fas fa-seedling"></i> Crops</Link></li>
    <li><Link to="/agri"><i className="fas fa-user-tie"></i> Experts</Link></li>
    <li><Link to="/fertilizer"><i className="fas fa-flask"></i> Fertilizer</Link></li>
  
    <Link to="/schemes"><i className="fas fa-hand-holding-usd"></i> Schemes</Link>

    <li 
      className="dropdown" 
      onMouseEnter={handleMoreDropdownToggle}
      onMouseLeave={handleMoreDropdownToggle}
    >
      <span className="dropbtn"><i className="fas fa-ellipsis-h"></i> More</span>
      {isMoreDropdownOpen && (
        <div className="dropdown-content">
          
          <li><Link to="/seeds"><i className="fas fa-seedling"></i> Seeds</Link></li>
    <Link to="/fertilizers"><i className="fas fa-box"></i> Fertilizers</Link>
          
        </div>
      )}
    </li>
    <li><Link to="/cart"><i className="fas fa-shopping-cart"></i> Cart</Link></li>
    <li className="user-profile">
      <i className="fas fa-user"></i> {user?.name}
    </li>
  </>
) : (
          <>
            <li><Link to="/"><i className="fas fa-home"></i> Home</Link></li>
            <li><Link to="/about"><i className="fas fa-info-circle"></i> About</Link></li>
            <li><Link to="/mission"><i className="fas fa-bullseye"></i> Mission</Link></li>
            <li><Link to="/register"><i className="fas fa-user-plus"></i> SignUp</Link></li>
            <li><Link to="/login"><i className="fas fa-sign-in-alt"></i> Login</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
