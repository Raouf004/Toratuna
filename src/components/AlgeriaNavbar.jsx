// components/AlgeriaNavbar.js
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; // Import a hamburger icon for the toggler

const AlgeriaNavbar = () => {
  const location = useLocation(); // Hook to get current path
  const [scrolled, setScrolled] = useState(false); // State to track scroll

  // Effect to add/remove scroll listener for background change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Change background after scrolling 50px
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      variant="dark"
      sticky="top"
      // Apply dynamic classes based on scroll state
      className={`algeria-navbar ${scrolled ? 'scrolled' : ''} ${location.pathname === '/' ? 'on-hero' : ''}`}
      dir="rtl" // Set direction for RTL languages
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4 d-flex align-items-center">
          {/* Optional: Add a subtle logo/icon next to the brand name */}
          <img
            src="/images/logo-icon.png" // Placeholder, replace with actual logo icon if available
            alt="Algeria Logo"
            height="30"
            className="d-inline-block align-top ms-2"
            style={{ filter: 'invert(100%)' }} // Example: make icon white for dark nav
          />
          <span className="text-primary-brand">ثقافة الجزائر</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="algeria-navbar">
          <FaBars className="text-white" /> {/* Custom hamburger icon */}
        </Navbar.Toggle>
        <Navbar.Collapse id="algeria-navbar">
          <Nav className="ms-auto text-center"> {/* Centered nav links for collapsed state */}
            <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'active-link' : ''}>
              الرئيسية
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className={location.pathname === '/about' ? 'active-link' : ''}>
              عن الجزائر
            </Nav.Link>
            <Nav.Link as={Link} to="/clothing" className={location.pathname === '/clothing' ? 'active-link' : ''}>
              اللباس التقليدي
            </Nav.Link>
            <Nav.Link as={Link} to="/food" className={location.pathname === '/food' ? 'active-link' : ''}>
              المأكولات
            </Nav.Link>
            <Nav.Link as={Link} to="/language" className={location.pathname === '/language' ? 'active-link' : ''}>
              اللغة واللهجات
            </Nav.Link>
            <Nav.Link as={Link} to="/music" className={location.pathname === '/music' ? 'active-link' : ''}>
              الموسيقى والفن
            </Nav.Link>
            <Nav.Link as={Link} to="/tourism" className={location.pathname === '/tourism' ? 'active-link' : ''}>
              المناطق السياحية
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className={location.pathname === '/contact' ? 'active-link' : ''}>
              اتصل بنا
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Custom Styles */}
      <style jsx>{`
        .algeria-navbar {
          background-color: transparent !important; /* Transparent by default */
          transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          padding-top: 15px; /* More padding for initial state */
          padding-bottom: 15px;
        }

        .algeria-navbar.scrolled {
          background-color: rgba(33, 37, 41, 0.95) !important; /* Dark background with slight transparency on scroll */
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
          padding-top: 10px; /* Slightly less padding when scrolled */
          padding-bottom: 10px;
        }

        /* Adjustments for the Home page (on-hero class) */
        .algeria-navbar.on-hero {
            background-color: transparent !important; /* Always transparent on hero */
            box-shadow: none !important;
        }
        .algeria-navbar.on-hero.scrolled {
             background-color: rgba(33, 37, 41, 0.95) !important; /* Dark on scroll on hero */
             box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        .algeria-navbar .navbar-brand {
          font-family: 'Georgia', serif;
          letter-spacing: 0.5px;
          transition: color 0.3s ease-in-out;
        }

        .algeria-navbar .navbar-brand:hover {
          color: #007bff !important; /* Example hover color for brand */
        }

        .algeria-navbar .nav-link {
          color: rgba(0, 0, 0, 0.8) !important; /* Slightly transparent white for links */
          font-weight: 500;
          margin-right: 15px; /* Spacing between links */
          transition: color 0.2s ease-in-out, border-bottom 0.2s ease-in-out;
          border-bottom: 2px solid transparent; /* Transparent border for hover effect */
        }

        .algeria-navbar .nav-link:hover {
          color: #fff !important; /* Pure white on hover */
          border-bottom-color: #007bff; /* Primary blue underline on hover */
        }

        .algeria-navbar .nav-link.active-link {
          color: #007bff !important; /* Active link color: primary blue */
          border-bottom-color: #007bff; /* Active link underline */
          font-weight: bold; /* Make active link bold */
        }

        .text-primary-brand {
            /* This can be a solid color or a gradient, matching the HeroSection */
            color: #FFD700; /* Example: Gold color for brand name */
            /* If you want a gradient: */
            /* background: linear-gradient(45deg, #FFD700, #FFA500); */
            /* -webkit-background-clip: text; */
            /* -webkit-text-fill-color: transparent; */
            /* background-clip: text; */
            /* text-fill-color: transparent; */
        }


        /* Responsive Adjustments */
        @media (max-width: 991.98px) { /* Adjustments for collapsed navbar on smaller screens */
          .algeria-navbar {
            background-color: rgba(33, 37, 41, 0.98) !important; /* Solid dark background when collapsed */
          }
          .algeria-navbar .navbar-toggler {
            border-color: rgba(255, 255, 255, 0.1);
          }
          .algeria-navbar .navbar-collapse {
            background-color: rgba(33, 37, 41, 0.95); /* Ensure collapse area has background */
            margin-top: 10px; /* Space between toggler and collapsed menu */
            border-radius: 0.5rem;
            padding: 10px 0;
          }
          .algeria-navbar .nav-link {
            margin-right: 0;
            padding: 10px 15px; /* More padding for touch targets */
            border-bottom: none; /* Remove underline in collapsed state */
            text-align: center; /* Center align links */
          }
          .algeria-navbar .nav-link:hover,
          .algeria-navbar .nav-link.active-link {
             background-color: rgba(255, 255, 255, 0.08); /* Highlight on hover/active in collapsed state */
             color: #007bff !important; /* Keep accent color */
             border-radius: 0.25rem;
          }
        }
      `}</style>
    </Navbar>
  );
};

export default AlgeriaNavbar;