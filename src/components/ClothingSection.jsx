// components/ClothingSection.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ClothingSection = () => {
  const clothes = [
    {
      title: 'القفطان الجزائري',
      img: '/images/caftan.jpg', // Ensure you have this image
      description: 'لباس نسائي فاخر وأنيق، يُعرف بتطريزاته الغنية وزخارفه المعقدة. يختلف تصميمه بين المدن، حيث يتميز قفطان الجزائر العاصمة، تلمسان، وقسنطينة بخصائصه الفريدة التي تعكس التراث الأندلسي والعثماني.',
    },
    {
      title: 'البرنوس',
      img: '/images/burnous.jpg', // Ensure you have this image
      description: 'عباءة صوفية طويلة ذات غطاء رأس مدبب، يرتديها الرجال. يُعتبر رمزًا للأصالة والوقار في مناطق مختلفة من الجزائر، ويأتي بألوان ومواد متنوعة حسب المنطقة والاستخدام، سواء كان للاحتفالات أو للتدفئة في الصحراء.',
    },
    {
      title: 'اللباس القبائلي',
      img: '/images/kabyle.jpg', // Ensure you have this image
      description: 'زي نسائي أمازيغي تقليدي من منطقة القبائل، يتكون عادةً من فستان ملون (فوطة) مطرز برسومات هندسية زاهية، ومنديل رأس متناسق، مع حلي فضية كبيرة تزينه. يعكس الألوان الطبيعية للمنطقة ورمزيتها.',
    },
    {
      title: 'الكاراكو الجزائري',
      img: '/images/karakou.jpg', // Ensure you have this image
      description: 'زي تقليدي عاصمي بامتياز، يتكون من سترة مخملية مطرزة بخيوط ذهبية أو فضية (فتلة ومجبود)، تُلبس فوق قميص حريري وسروال مدور. يشتهر الكاراكو بفخامته ويُرتدى غالبًا في المناسبات الكبيرة والأعراس.',
    },
    {
      title: 'الشدة التلمسانية',
      img: '/images/chedda-oran.jpg', // Ensure you have this image
      description: 'زي عروس تلمساني عريق، مصنف ضمن التراث الثقافي اللامادي لليونسكو. يتميز بثقله وفخامته وتفاصيله الدقيقة التي تشمل التاج الذهبي، والمجوهرات، والملابس المطرزة بخيوط الحرير والذهب، ويعكس تاريخ المدينة الأندلسي العريق.',
    },
    {
      title: 'الملحفة الشاوية / النيلية',
      img: '/images/Chaoui.jpg', // Ensure you have this image (can be general 'melhfa' or specific to Chaoui/Naili)
      description: 'لباس تقليدي نسائي واسع ومريح، ينتشر في مناطق الأوراس (الشاوية) وجنوب الأطلس الصحراوي (النيلية). يتميز بألوانه الزاهية وتصاميمه البسيطة التي تتناسب مع طبيعة المنطقة، وغالباً ما يُزين بقطع من المجوهرات الفضية.',
    },
  ];

  return (
    <section id="clothing" className="py-5 bg-white" dir="rtl">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-dark mb-3" style={{ fontFamily: 'Georgia, serif' }}>
            <span className="d-block">اللباس التقليدي الجزائري:</span>
            <span className="d-block text-secondary">حكاية حضارة وأصالة</span>
          </h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '750px' }}>
            تُعد الأزياء التقليدية في الجزائر مرآة عاكسة لتاريخها العريق وتنوعها الثقافي والجغرافي. كل قطعة تحكي قصة منطقة، هوية، واحتفال، نسجت بعناية عبر الأجيال.
          </p>
        </div>

        {/* Clothing Cards */}
        <Row className="g-4 justify-content-center"> {/* Added justify-content-center for better alignment */}
          {clothes.map((item, idx) => (
            <Col lg={4} md={6} sm={10} key={idx} className="mb-4 d-flex"> {/* Added d-flex for equal card heights */}
              <Card className="h-100 shadow-sm border-light rounded-3 overflow-hidden clothing-card bg-white text-dark">
                <div className="card-img-wrapper"> {/* Wrapper for image hover effect */}
                  <Card.Img
                    variant="top"
                    src={item.img}
                    alt={item.title}
                    className="img-fluid" 
                    style={{ height: '280px', objectFit: 'cover' }}
                  />
                </div>
                <Card.Body className="d-flex flex-column p-4"> {/* Increased padding */}
                  <Card.Title className="h5 text-dark mb-2 fw-bold"> {/* Bolded title */}
                    {item.title}
                  </Card.Title>
                  <Card.Text className="text-secondary flex-grow-1 card-description"> {/* Added class for truncation */}
                    {item.description}
                  </Card.Text>
                  {/* Optional: Add a "Read More" link/button if description is truncated */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <style jsx>{`
        /* Card Hover Effects */
        .clothing-card {
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }
        
        .clothing-card:hover {
          transform: translateY(-8px); /* Increased lift */
          box-shadow: 0 12px 30px rgba(0,0,0,0.15) !important; /* Stronger shadow */
        }
        
        .card-img-wrapper {
          overflow: hidden; /* Ensures image zoom stays within bounds */
        }

        .clothing-card img {
          transition: transform 0.3s ease-in-out;
        }
        
        .clothing-card:hover img {
          transform: scale(1.08); /* Increased zoom */
        }

        /* Description Truncation */
        .card-description {
          display: -webkit-box;
          -webkit-line-clamp: 4; /* Limit description to 4 lines */
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* Responsive Heading Adjustments */
        @media (max-width: 767.98px) {
          .display-4 {
            font-size: 2.5rem !important; /* Adjust font size for smaller screens */
          }
          .lead {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ClothingSection;