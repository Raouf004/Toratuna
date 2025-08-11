// components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa'; // Import social icons

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-5 mt-5" dir="rtl">
      <Container>
        <Row className="justify-content-center text-center mb-4">
          <Col md={8}>
            {/* Main Footer Title/Slogan */}
            <h4 className="footer-title mb-3 fw-bold">
              تراثنا: نافذتك إلى عمق الثقافة الجزائرية
            </h4>
            <p className="footer-slogan lead text-muted">
              اكتشف الأصالة، التاريخ، والفن الذي يميز الجزائر، عبر منصة تراثنا المتجددة.
            </p>
          </Col>
        </Row>

        {/* Social Media Links */}
        <Row className="justify-content-center mb-4">
          <Col xs="auto">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaFacebookF />
            </a>
          </Col>
          <Col xs="auto">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram />
            </a>
          </Col>
          <Col xs="auto">
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaYoutube />
            </a>
          </Col>
          <Col xs="auto">
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaTwitter />
            </a>
          </Col>
        </Row>

        {/* Copyright and Additional Links (Optional) */}
        <Row className="justify-content-center text-center mt-4 border-top border-secondary pt-4">
          <Col>
            <p className="mb-0 text-muted">
              © {new Date().getFullYear()} **تراثنا**. جميع الحقوق محفوظة.
            </p>
            {/* You can add more links here if needed */}
            {/* <p className="mb-0 mt-2">
              <a href="/privacy" className="footer-link">سياسة الخصوصية</a> | 
              <a href="/terms" className="footer-link">شروط الاستخدام</a>
            </p> */}
          </Col>
        </Row>
      </Container>

      {/* Custom Styles */}
      <style jsx>{`
        .footer {
          background-color: #212529 !important; /* Darker tone for footer background */
          color: #f8f9fa !important; /* Light text on dark background */
          border-top: 5px solid #0056b3; /* A strong accent line at the top, change to your primary color */
        }

        .footer-title {
          color: #fff; /* White title */
          font-family: 'Georgia', serif;
          font-size: 2.2rem;
        }

        .footer-slogan {
          font-size: 1.1rem;
          color: #adb5bd !important; /* Lighter grey for slogan */
        }

        .social-icon {
          color: #f8f9fa; /* White icons */
          font-size: 1.8rem;
          margin: 0 15px;
          transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
        }

        .social-icon:hover {
          color: #007bff; /* Primary blue on hover, adjust to your accent color */
          transform: translateY(-3px) scale(1.1); /* Lift and slight zoom on hover */
          text-decoration: none; /* Remove underline on hover */
        }

        .text-muted {
          color: #adb5bd !important; /* Ensure muted text is visible on dark background */
        }

        .border-secondary {
            border-color: #495057 !important; /* Slightly lighter border for separation */
        }

        .footer-link {
            color: #adb5bd;
            text-decoration: none;
            transition: color 0.2s ease-in-out;
        }

        .footer-link:hover {
            color: #007bff; /* Match social icon hover color */
            text-decoration: underline;
        }

        /* Responsive adjustments */
        @media (max-width: 767.98px) {
          .footer-title {
            font-size: 1.8rem;
          }
          .footer-slogan {
            font-size: 1rem;
          }
          .social-icon {
            font-size: 1.5rem;
            margin: 0 10px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;