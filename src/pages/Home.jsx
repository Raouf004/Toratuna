// src/pages/Home.js
import React from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection'; // Assuming HeroSection is already styled

const sections = [
  {
    title: 'عن الجزائر 🇩🇿',
    text: 'تعرّف على تاريخ الجزائر العريق، جغرافيتها المتنوعة، والعناصر التي تُشكل هويتها الثقافية الأصيلة.',
    img: '/images/algeria.jpg', // Ensure this image path is correct
    path: '/about',
  },
  {
    title: 'اللباس التقليدي 👗',
    text: 'استكشف جمال وتنوع الأزياء الجزائرية التراثية التي تعبّر عن ثراء مناطقها واختلاف عاداتها وتقاليدها.',
    img: '/images/caftan.jpg', // Ensure this image path is correct
    path: '/clothing',
  },
  {
    title: 'المأكولات 🍲',
    text: 'تذوق أطباقًا جزائرية مشهورة عالميًا مثل الكسكس الشهي، الرشتة الأصيلة، والشوربة الدافئة الغنية بالنكهات.',
    img: '/images/couscous.jpg', // Ensure this image path is correct
    path: '/food',
  },
  {
    title: 'اللغة واللهجات 🗣️',
    text: 'انغمس في التنوع اللغوي الفريد للجزائر، من العربية الفصحى إلى الأمازيغية العريقة والدارجة المحلية.',
    img: '/images/language.jpg', // Ensure this image path is correct, or update if you don't have one
    path: '/language',
  },
  {
    title: 'الموسيقى والفنون 🎶',
    text: 'الجزائر بلد الألحان والإبداع! اكتشف أنماطها الموسيقية المتنوعة كالراي، الشعبي، والموسيقى الأندلسية العريقة.',
    img: '/images/music.jpg', // Ensure this image path is correct, or update if you don't have one
    path: '/music',
  },
  {
    title: 'المناطق السياحية 🏞️',
    text: 'اكتشف سحر الجزائر الخلاب، من الآثار الرومانية في تيمقاد، وجمال الهقار الصحراوي، إلى أزقة القصبة العتيقة والكثير غيرها.',
    img: '/images/tourism.jpg', // Ensure this image path is correct, or update if you don't have one
    path: '/tourism',
  },
];

// Carousel slide data for the top section
const carouselSlides = [
  {
    image: '/images/slide-tourism.jpg', // Path to a compelling tourism image
    title: 'استكشف روائع الجزائر 🏞️',
    description: 'رحلة عبر مدنها العتيقة، صحاريها الشاسعة، وشواطئها الساحرة.',
  },
  {
    image: '/images/slide-food.jpg', // Path to an enticing food image
    title: 'تذوق نكهات الجزائر الأصيلة 🍲',
    description: 'مغامرة طهوية فريدة تجمع بين التقاليد الأصيلة والإبداع المعاصر.',
  },
  {
    image: '/images/slide-culture.jpg', // Path to a vibrant culture image (e.g., traditional clothing/music)
    title: 'تعرّف على ثقافة الجزائر الغنية 🎶',
    description: 'تراث حي من الموسيقى، الأزياء، والفنون التي تروي حكاية شعب عريق.',
  },
  {
    image: '/images/slide-history.jpg', // Path to an historical image (e.g., Roman ruins)
    title: 'الجزائر: مهد الحضارات وتاريخ الصمود 🏛️',
    description: 'من الآثار الرومانية الشاهدة إلى أمجاد الثورة المجيدة، تاريخ يلهم الأجيال.',
  },
];

const Home = () => {
  return (
    <>
      <HeroSection />

      {/* Main Carousel Section */}
      <section className="py-5 bg-light" dir="rtl"> {/* Changed bg-white to bg-light for subtle contrast */}
        <Container>
          <Carousel
            indicators={true} // Enabled indicators for better navigation
            controls={true}
            interval={4000} // Slightly faster auto-scroll
            pause="hover" // Pause on hover
            className="home-carousel rounded-4 shadow-lg" // More rounded corners, stronger shadow
          >
            {carouselSlides.map((slide, idx) => (
              <Carousel.Item key={idx}>
                <img
                  className="d-block w-100 carousel-img"
                  src={slide.image}
                  alt={slide.title}
                  loading="lazy" // Add lazy loading for performance
                />
                <Carousel.Caption className="text-center carousel-caption-custom">
                  <h3 className="display-5 fw-bold mb-3">{slide.title}</h3> {/* Adjusted margin-bottom */}
                  <p className="lead fw-normal">{slide.description}</p> {/* Normal font weight for description */}
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </section>
      {/* End Main Carousel Section */}

      {/* Main Content Sections Grid */}
      <Container className="py-5" dir="rtl">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-dark mb-3" style={{ fontFamily: 'Georgia, serif' }}>
            <span className="d-block">أقسام الموقع الرئيسية</span>
          </h2>
          <p className="lead text-secondary mx-auto" style={{ maxWidth: '800px' }}>
            انقر على أي قسم لتعمق في تفاصيل ثقافة الجزائر العريقة، تاريخها الغني، ومناطقها الساحرة.
          </p>
        </div>

        <Row className="g-4 justify-content-center"> {/* Added justify-content-center for better card alignment */}
          {sections.map((section, index) => (
            <Col lg={4} md={6} sm={10} key={index} className="d-flex"> {/* Added d-flex for equal card heights */}
              <Card className="h-100 shadow-sm border-light rounded-3 overflow-hidden home-card bg-white text-dark">
                <div className="card-img-wrapper"> {/* Wrapper for image hover effect */}
                  <Card.Img
                    variant="top"
                    src={section.img}
                    alt={section.title}
                    className="img-fluid"
                    style={{ height: '220px', objectFit: 'cover' }} // Increased image height slightly
                    loading="lazy" // Add lazy loading
                  />
                </div>
                <Card.Body className="d-flex flex-column p-4"> {/* Increased padding */}
                  <Card.Title className="h5 text-dark mb-2 fw-bold"> {/* Bolded title */}
                    {section.title}
                  </Card.Title>
                  <Card.Text className="text-secondary flex-grow-1 card-description mb-3"> {/* Added mb-3 for spacing */}
                    {section.text}
                  </Card.Text>
                  <div className="mt-auto pt-2"> {/* Added padding top for spacing */}
                    <Button
                      as={Link}
                      to={section.path}
                      variant="outline-dark"
                      className="w-100 rounded-pill fw-bold" // Bolded button text
                    >
                      عرض المزيد <i className="bi bi-arrow-left ms-2"></i> {/* Added margin to icon */}
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Custom Styles */}
      <style jsx>{`
        /* --- General Colors (Ensuring consistency with light theme) --- */
        .bg-white { background-color: #fff !important; }
        .bg-light { background-color: #f8f9fa !important; } /* A very light gray for subtle contrast */
        .text-dark { color: #212529 !important; } /* Standard dark text */
        .text-secondary { color: #6c757d !important; } /* Bootstrap's default secondary color */
        .border-light { border-color: #dee2e6 !important; } /* Light gray border */

        /* --- Carousel Specific Styling --- */
        .home-carousel .carousel-item {
          height: 550px; /* Slightly taller carousel for more impact */
          max-height: 70vh; /* Max height relative to viewport for larger screens */
        }

        .home-carousel .carousel-img {
          height: 100%;
          object-fit: cover;
          filter: brightness(55%); /* Slightly more darken image for better text contrast */
          transition: transform 0.5s ease-in-out; /* Smooth transition for potential image effects */
        }

        /* Optional: Add a subtle zoom on carousel image hover if desired */
        .home-carousel .carousel-item:hover .carousel-img {
             transform: scale(1.03);
        }

        .home-carousel .carousel-caption-custom {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          padding: 30px 40px; /* More padding */
          border-radius: 0.75rem; /* Match card border-radius */
          background-color: rgba(0, 0, 0, 0.45); /* Slightly less transparent */
          backdrop-filter: blur(3px); /* Add a subtle blur effect for modern look */
          max-width: 80%; /* Control caption width */
        }

        .home-carousel .carousel-caption-custom h3 {
          font-family: 'Georgia', serif;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6); /* Text shadow for better readability */
        }

        .home-carousel .carousel-caption-custom p {
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
        }

        /* Adjust carousel controls for better visibility */
        .carousel-control-prev-icon, .carousel-control-next-icon {
            filter: invert(100%); /* Makes arrows white */
        }
        .carousel-indicators [data-bs-target] {
            background-color: rgba(255, 255, 255, 0.8); /* White indicators */
        }
        .carousel-indicators .active {
            background-color: #fff; /* Solid white for active indicator */
        }


        /* --- Home Cards Styling (Consistent with other sections) --- */
        .home-card {
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }

        .home-card:hover {
          transform: translateY(-8px); /* More pronounced lift */
          box-shadow: 0 12px 30px rgba(0,0,0,0.15) !important; /* Stronger shadow */
        }

        .card-img-wrapper {
          overflow: hidden; /* Ensures image zoom stays within bounds */
        }

        .home-card img {
          transition: transform 0.3s ease-in-out;
        }

        .home-card:hover img {
          transform: scale(1.08); /* More pronounced zoom */
        }

        .card-description {
          display: -webkit-box;
          -webkit-line-clamp: 3; /* Limit description to 3 lines */
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          min-height: 3.6em; /* Ensure consistent height even for shorter descriptions (adjust if line-height differs) */
          line-height: 1.2em;
        }

        /* --- Button Styling (Consistent with other sections) --- */
        .btn-outline-dark {
          color: #212529;
          border-color: #212529;
          transition: all 0.2s ease-in-out;
        }
        .btn-outline-dark:hover {
          color: #fff;
          background-color: #212529;
          border-color: #212529;
        }
        
        /* --- Responsive Adjustments --- */
        @media (max-width: 991.98px) { /* Medium devices (tablets) */
          .home-carousel .carousel-item {
            height: 400px; /* Adjust height for tablets */
          }
          .home-carousel .carousel-caption-custom h3 {
            font-size: 2.25rem !important; /* Adjust font size */
          }
          .home-carousel .carousel-caption-custom p {
            font-size: 1rem !important;
          }
        }

        @media (max-width: 767.98px) { /* Small devices (phones) */
          .home-carousel .carousel-item {
            height: 300px; /* Adjust height for phones */
          }
          .home-carousel .carousel-caption-custom {
            padding: 15px 20px;
          }
          .home-carousel .carousel-caption-custom h3 {
            font-size: 1.75rem !important;
          }
          .home-carousel .carousel-caption-custom p {
            font-size: 0.9rem !important;
          }
          .display-4 {
            font-size: 2.5rem !important; /* Adjust font size for smaller screens */
          }
          .lead {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </>
  );
};

export default Home;