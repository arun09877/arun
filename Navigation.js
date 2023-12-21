// Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const navbarBackgroundColor = '#6a77a8';
const hoverBackgroundColor = '#ccc'; 
const Navbar = styled(AppBar)({
  background: navbarBackgroundColor,
  position: 'fixed', // Set position to 'fixed'
  top: 0, // Make it stick to the top
  width: '100%', // Cover the entire width of the page
});

const NavItem = styled(Typography)({
  color: '#fff',
  textDecoration: 'none',
  margin: '0 15px',
  fontSize: '1.2rem',
  fontFamily: 'Arial, sans-serif',
  transition: 'background-color 0.3s ease', // Add a smooth transition for the background color
  '&:hover': {
    borderBottom: '2px solid #fff',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});

const Navigation = () => {
  return (
    <Navbar>
      <Toolbar>
        <NavItem component={Link} to="/" variant="h6">
          Home
        </NavItem>
        <NavItem component={Link} to="/BusList" variant="h6">
          Explore
        </NavItem>
        <NavItem component={Link} to="/signup" variant="h6">
          Signup
        </NavItem>
        <NavItem component={Link} to="/login" variant="h6">
          Login
        </NavItem>
      </Toolbar>
    </Navbar>
  );
};

export default Navigation;