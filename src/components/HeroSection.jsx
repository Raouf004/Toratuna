// components/HeroSection.js
import React from 'react';
import { Container, Button } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <div className="hero-section text-white d-flex align-items-center justify-content-center text-center" dir="rtl">
      <Container>
        <h1 className="display-3 fw-bold mb-4 animate__animated animate__fadeInDown">
          مرحبا بكم في <span className="text-primary-hero">منصة تراثنا</span>
        </h1>
        <p className="lead mb-5 animate__animated animate__fadeInUp animate__delay-1s">
          انغمس في عمق **الثقافة الجزائرية** الغنية، واكتشف سحر اللباس التقليدي الأصيل، روعة المأكولات الشهية، إيقاعات الموسيقى العريقة، وجمال المعالم السياحية الخلابة التي تميز الجزائر الحبيبة.
        </p>
        <Button
          variant="outline-light" // Changed to outline-light for a sleek look on dark background
          size="lg"
          href="#AboutSection" // Anchor to the main content sections
          className="rounded-pill px-5 py-3 fs-5 fw-bold animate__animated animate__zoomIn animate__delay-2s"
        >
          ابدأ الاستكشاف الآن <i className="bi bi-arrow-down-circle-fill ms-2"></i>
        </Button>
      </Container>

      <style jsx>{`
        .hero-section {
          min-height: 90vh;
          background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('/images/hero-bg.jpg') center center no-repeat;
          background-size: cover;
          position: relative;
          overflow: hidden; /* Ensure content doesn't overflow during animations */
        }

        /* Hero Text Gradient Effect */
        .hero-section h1 {
          font-family: 'Georgia', serif;
          letter-spacing: 1.5px;
          text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.8); /* Stronger text shadow */
        }

        .text-primary-hero {
            /* Example: A golden or light accent color that stands out on dark */
            color: #FFD700; /* Gold */
            /* Or if you prefer a subtle blue/teal: */
            /* color: #00BCD4; */ /* Cyan */
            /* You can also use a gradient for text */
            background: linear-gradient(45deg, #FFD700, #FFA500); /* Gold to Orange */
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
        }


        .hero-section p {
          max-width: 800px; /* Constrain paragraph width for readability */
          margin-left: auto;
          margin-right: auto;
          font-size: 1.35rem; /* Slightly larger lead text */
          line-height: 1.8; /* Better line height for readability */
          text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
        }

        /* Button Styling */
        .hero-section .btn-outline-light {
          border-width: 2px; /* Thicker border for outline button */
          transition: all 0.3s ease-in-out;
        }

        .hero-section .btn-outline-light:hover {
          background-color: #FFD700; /* Gold on hover */
          color: #212529; /* Dark text on gold */
          border-color: #FFD700;
          transform: translateY(-3px); /* Slight lift on hover */
          box-shadow: 0 5px 15px rgba(255, 215, 0, 0.4); /* Gold shadow */
        }

        /* Responsive Adjustments */
        @media (max-width: 767.98px) {
          .hero-section h1 {
            font-size: 2.5rem !important; /* Adjust font size for small screens */
          }
          .hero-section p {
            font-size: 1rem !important; /* Adjust lead text size */
            margin-bottom: 3rem !important;
          }
          .hero-section .btn {
            font-size: 1.1rem !important;
            padding: 12px 30px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;