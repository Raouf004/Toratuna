import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Badge } from 'react-bootstrap';

const FoodSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);

  const foods = [
    {
      title: 'الكسكس',
      img: '/images/couscous.jpg',
      description: 'الطبق الوطني الجزائري بامتياز، مصنوع من حبيبات السميد المطبوخة على البخار، ويقدم عادة مع مرق غني باللحم (دجاج أو لحم ضأن) ومجموعة متنوعة من الخضروات مثل الجزر، الكوسا، اللفت، والحمص. يُعد طبقًا احتفاليًا يقدم في المناسبات والعطلات.',
      ingredients: 'سميد، لحم (دجاج/ضأن)، جزر، كوسا، لفت، حمص، طماطم، بصل، زيت زيتون، بهارات (كمون، فلفل أحمر، كركم)',
      region: 'جميع أنحاء الجزائر (بتنوع إقليمي)',
      cookingTime: '2-3 ساعات',
      category: 'أطباق رئيسية'
    },
    {
      title: 'الرشتة',
      img: '/images/rechta.jpg',
      description: 'طبق تقليدي عاصمي يتميز بنودلز رفيعة مصنوعة يدويًا من السميد، تُطهى على البخار وتقدم مع مرق أبيض خفيف بالدجاج والخضار مثل اللفت والكوسا والحمص. طبق شهير في الأعياد والمناسبات العائلية.',
      ingredients: 'دقيق سميد، دجاج، حمص، لفت، كوسا، بصل، زيت، قرفة، فلفل أسود',
      region: 'الجزائر العاصمة وضواحيها',
      cookingTime: '1.5-2 ساعة',
      category: 'أطباق رئيسية'
    },
    {
      title: 'الشوربة الفريك',
      img: '/images/chourba.jpg',
      description: 'حساء جزائري شعبي وغني بالنكهات، لا سيما في شهر رمضان. يُعد بأساس من الطماطم واللحم (غالبًا لحم ضأن أو بقري)، ويحتوي على حبوب الفريك (قمح أخضر مجروش) والخضروات والأعشاب الطازجة لإضافة نكهة مميزة.',
      ingredients: 'لحم (ضأن/بقري)، طماطم، بصل، كزبرة، نعناع، فريك، حمص، زيت، بهارات (فلفل أحمر، كمون، رأس الحانوت)',
      region: 'جميع أنحاء الجزائر (بلمسات إقليمية)',
      cookingTime: '45-60 دقيقة',
      category: 'حساء'
    },
    {
      title: 'الدولمة',
      img: '/images/dolma.jpg',
      description: 'مجموعة من الخضروات المتنوعة مثل الكوسا، الباذنجان، الطماطم، والفلفل، تُحشى بخلطة من الأرز واللحم المفروم والأعشاب، ثم تُطهى في مرق خفيف أو صلصة طماطم. طبق محبب يقدم غالبًا كوجبة رئيسية.',
      ingredients: 'كوسا، باذنجان، فلفل، طماطم، لحم مفروم، أرز، بقدونس، نعناع، بصل، بهارات',
      region: 'المناطق الساحلية والشمالية',
      cookingTime: '1.5 ساعة',
      category: 'أطباق رئيسية'
    },
    {
      title: 'البقلاوة',
      img: '/images/baklawa.jpg',
      description: 'حلوى شرقية فاخرة وشهيرة، تتكون من طبقات رقيقة جدًا من عجينة الفيلو المحشوة بالمكسرات المطحونة (غالبًا اللوز أو الجوز)، وتُسقى بالقطر (الشربات) الغني بماء الزهر أو ماء الورد بعد الخبز. تُقدم في المناسبات الخاصة والأعياد.',
      ingredients: 'عجينة فيلو، لوز/جوز، سكر، ماء زهر/ورد، عسل، زبدة مذابة',
      region: 'جميع أنحاء الجزائر (بتنوع في التشكيل)',
      cookingTime: '1 ساعة',
      category: 'حلويات'
    },
    {
      title: 'القريوش',
      img: '/images/qriouch.jpg',
      description: 'حلوى جزائرية تقليدية تُعرف بشكلها الفني المميز الذي يشبه الوردة أو الضفيرة. تُقلى العجينة في الزيت ثم تُسقى بالعسل المنكه بماء الزهر. مقرمشة من الخارج وطرية من الداخل، وهي خيار شائع في المناسبات.',
      ingredients: 'دقيق، بيض، خل، زبدة، خميرة، عسل، ماء زهر، زيت للقلي',
      region: 'قسنطينة والشرق الجزائري',
      cookingTime: '30-45 دقيقة',
      category: 'حلويات'
    },
    {
      title: 'البوراك',
      img: '/images/bourak.jpg',
      description: 'فطائر مقرمشة وذهبية اللون، تُعد من عجينة الديول الرقيقة وتُحشى بحشوات متنوعة، أشهرها حشوة البطاطس المهروسة مع الجبن والبقدونس، أو اللحم المفروم. تُقلى في الزيت وتقدم كمقبلات شهية، خاصة في شهر رمضان.',
      ingredients: 'عجينة الديول، بطاطس، جبن، بقدونس، لحم مفروم (اختياري)، بيض، زيت للقلي',
      region: 'شمال الجزائر والمدن الكبرى',
      cookingTime: '20-30 دقيقة',
      category: 'مقبلات'
    },
    {
      title: 'المقروض',
      img: '/images/maqroudh.jpg',
      description: 'حلوى جزائرية تقليدية عريقة، تُصنع من السميد وتُحشى بعجينة التمر الطرية المنكهة بالقرفة أو ماء الزهر، ثم تُخبز وتُسقى بالقطر أو العسل. تتميز بشكلها المعيني وتعد من الحلويات الأساسية في الأعياد والمناسبات.',
      ingredients: 'سميد، تمر، زيت/زبدة، ماء زهر، عسل/قطر، قرفة',
      region: 'الجنوب الجزائري والشرق (بأنماط مختلفة)',
      cookingTime: '1 ساعة',
      category: 'حلويات'
    }
  ];

  const handleShowDetails = (food) => {
    setSelectedFood(food);
    setShowModal(true);
  };

  // Category colors for badges on a light background
  const getCategoryColor = (category) => {
    switch(category) {
      case 'أطباق رئيسية': return 'dark';
      case 'حلويات': return 'secondary';
      case 'مقبلات': return 'dark';
      case 'حساء': return 'secondary';
      default: return 'dark';
    }
  };

  return (
    <>
      <section id="food" className="py-5 bg-white text-dark" dir="rtl">
        <Container>
          {/* Section Header */}
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold text-dark mb-3" style={{ fontFamily: 'Georgia, serif' }}>
              <span className="d-block">المأكولات الجزائرية التقليدية</span>
            </h2>
            <p className="lead text-secondary mx-auto" style={{ maxWidth: '800px' }}>
              انغمس في عالم النكهات الغنية والروائح العبقة للمطبخ الجزائري الأصيل. من الأطباق الرئيسية الشهية إلى الحلويات التقليدية الفاخرة، كل لقمة تحكي قصة من التراث والتنوع الثقافي.
            </p>
          </div>

          {/* Food Cards Grid */}
          <Row className="g-4 justify-content-center">
            {foods.map((item, idx) => (
              <Col lg={4} md={6} sm={10} key={idx} className="mb-4 d-flex">
                <Card className="h-100 shadow-sm border-light rounded-3 overflow-hidden food-card bg-white text-dark">
                  <div className="position-relative card-img-container">
                    <Card.Img
                      variant="top"
                      src={item.img}
                      alt={item.title}
                      className="img-fluid"
                      style={{ height: '220px', objectFit: 'cover', filter: 'grayscale(100%)' }} // Increased height slightly
                    />
                    <Badge
                      bg={getCategoryColor(item.category)}
                      className="position-absolute top-0 start-0 m-3 text-uppercase rounded-pill px-3 py-2 fs-6 fw-normal" // Larger, more prominent badge
                    >
                      {item.category}
                    </Badge>
                  </div>

                  <Card.Body className="d-flex flex-column p-4"> {/* Increased padding */}
                    <Card.Title className="h4 text-dark mb-2 fw-bold"> {/* Made title bolder */}
                      {item.title}
                    </Card.Title>
                    <Card.Text className="text-secondary flex-grow-1 card-description mb-3"> {/* Added mb-3 for spacing */}
                      {item.description}
                    </Card.Text>

                    <div className="mt-auto pt-3 border-top border-light"> {/* Separator line */}
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <small className="text-secondary d-flex align-items-center">
                          <i className="bi bi-clock me-1"></i> {item.cookingTime}
                        </small>
                        <small className="text-secondary d-flex align-items-center">
                          <i className="bi bi-geo-alt me-1"></i> {item.region}
                        </small>
                      </div>

                      <Button
                        variant="outline-dark"
                        size="md"
                        className="w-100 rounded-pill fw-bold" // Bolded button text
                        onClick={() => handleShowDetails(item)}
                      >
                        عرض التفاصيل <i className="bi bi-arrow-left ms-2"></i> {/* Added margin to icon */}
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Details Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" dir="rtl" centered className="text-dark">
        <Modal.Header closeButton className="bg-light border-bottom border-light"> {/* Added border-bottom */}
          <Modal.Title className="text-dark fw-bold"> {/* Bolded modal title */}
            {selectedFood?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-white p-4"> {/* Increased padding */}
          {selectedFood && (
            <div>
              <Row>
                <Col md={6} className="mb-4 mb-md-0"> {/* Added margin for mobile */}
                  <img
                    src={selectedFood.img}
                    alt={selectedFood.title}
                    className="img-fluid rounded shadow-sm modal-image" // Added modal-image class
                    style={{ filter: 'grayscale(0%)' }} // Image in modal is always colored
                  />
                </Col>
                <Col md={6}>
                  <h5 className="text-dark mb-3 fw-bold">الوصف</h5>
                  <p className="text-secondary lh-base">{selectedFood.description}</p> {/* Increased line height */}

                  <h5 className="text-dark mb-2 mt-4 fw-bold">المقادير الرئيسية</h5>
                  <p className="text-secondary lh-base">{selectedFood.ingredients}</p> {/* Increased line height */}

                  <div className="row mt-4 g-2"> {/* Added g-2 for small gutter */}
                    <Col xs={6}> {/* Used Col xs={6} for better responsiveness */}
                      <strong className="text-dark">المنطقة:</strong><br />
                      <span className="text-secondary">{selectedFood.region}</span>
                    </Col>
                    <Col xs={6}> {/* Used Col xs={6} for better responsiveness */}
                      <strong className="text-dark">وقت الطبخ:</strong><br />
                      <span className="text-secondary">{selectedFood.cookingTime}</span>
                    </Col>
                  </div>

                  <Badge bg={getCategoryColor(selectedFood.category)} className="mt-4 text-uppercase rounded-pill px-3 py-2 fs-6 fw-normal">
                    {selectedFood.category}
                  </Badge>
                </Col>
              </Row>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer className="bg-light border-top border-light"> {/* Added border-top */}
          <Button variant="outline-secondary" onClick={() => setShowModal(false)} className="rounded-pill px-4 fw-bold">
            إغلاق
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Custom CSS for visual enhancements */}
      <style jsx>{`
        /* --- General Colors (Ensuring consistency with light theme) --- */
        .bg-white { background-color: #fff !important; }
        .bg-light { background-color: #f8f9fa !important; }
        .text-dark { color: #212529 !important; }
        .text-secondary { color: #6c757d !important; }
        .text-muted { color: #6c757d !important; } /* Use text-muted for softer gray */
        .border-light { border-color: #dee2e6 !important; }

        /* --- Card Specific Styling --- */
        .food-card {
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }

        .food-card:hover {
          transform: translateY(-8px); /* Lifts the card more */
          box-shadow: 0 12px 30px rgba(0,0,0,0.1) !important; /* Slightly stronger, but clean shadow */
        }

        .card-img-container {
          overflow: hidden; /* Ensures image zoom stays within bounds */
          position: relative;
        }
        
        .food-card img {
          transition: transform 0.4s ease-in-out, filter 0.4s ease-in-out; /* Slower, smoother transition */
        }
        
        .food-card:hover img {
          transform: scale(1.1); /* More pronounced zoom */
          filter: grayscale(0%) !important; /* Image becomes colored on hover */
        }

        .card-description {
          display: -webkit-box;
          -webkit-line-clamp: 3; /* Limits description to 3 lines */
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          min-height: 3.6em; /* Ensure consistent height even for shorter descriptions */
          line-height: 1.2em; /* Adjust line height if needed for truncation */
        }

        /* --- Button Styling --- */
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
        .btn-outline-secondary {
          color: #6c757d;
          border-color: #6c757d;
          transition: all 0.2s ease-in-out;
        }
        .btn-outline-secondary:hover {
          color: #fff;
          background-color: #6c757d;
          border-color: #6c757d;
        }

        /* --- Badge Styling --- */
        .badge {
          font-weight: normal; /* Make badges less bold by default */
        }
        .badge.bg-dark {
          background-color: #343a40 !important; /* Darker grey for contrast */
          color: #fff !important;
        }
        .badge.bg-secondary {
          background-color: #6c757d !important; /* Default secondary */
          color: #fff !important;
        }

        /* --- Modal Styling --- */
        .modal-content {
          border-radius: 0.75rem; /* Slightly more rounded modal */
          overflow: hidden;
        }
        .modal-header {
          border-bottom: 1px solid #dee2e6;
        }
        .modal-footer {
          border-top: 1px solid #dee2e6;
        }
        .modal-header .btn-close {
          filter: none; /* Ensures the close button is visible on light background */
        }
        .modal-image {
          border-radius: 0.5rem; /* Rounded corners for modal image */
        }

        /* --- Responsive Adjustments --- */
        @media (max-width: 767.98px) {
          .display-4 {
            font-size: 2.5rem !important;
          }
          .lead {
            font-size: 1rem !important;
          }
          .food-card img {
            height: 180px !important; /* Adjust image height on smaller screens */
          }
          .modal-body .row > .col-6 {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default FoodSection;