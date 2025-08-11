// components/TourismSection.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'; // Import Card for a consistent look

const TourismSection = () => {
  const places = [
    {
      title: 'تيمقاد الرومانية',
      img: '/images/Timgad.jpg',
      description: 'موقع أثري روماني مذهل ومدرج ضمن قائمة اليونسكو للتراث العالمي، يُعرف باسم "بومبي أفريقيا". تأسست المدينة حوالي عام 100 ميلادي كمعسكر عسكري روماني، وتتميز بتخطيطها الشبكي الأصلي المحفوظ جيدًا وقوس تراجان المهيب ومسرحها القديم الذي لا يزال يستخدم حتى اليوم.',
      details: 'تقع في ولاية باتنة. تعد شهادة حية على التوسع الروماني في شمال أفريقيا وتطور الحياة الحضرية آنذاك. يمكنك التجول في شوارعها المرصوفة وتخيل الحياة اليومية للجنود والمواطنين الرومان.',
    },
    {
      title: 'جبال الهقار',
      img: '/images/Hoggar.jpg',
      description: 'سلسلة جبلية بركانية شاهقة تقع في قلب الصحراء الكبرى جنوب الجزائر، وتعد موطنًا للطوارق. تتميز بمناظرها الطبيعية الخلابة وتكويناتها الصخرية الغريبة التي نحتتها الرياح عبر آلاف السنين. قمتها الأعلى هي جبل تاهات، أعلى نقطة في الجزائر.',
      details: 'تعتبر الهقار وجهة مثالية لعشاق المغامرات والتأمل في الطبيعة البكر. تشتهر بمنطقة الأسكرام التي توفر مناظر بانورامية ساحرة لغروب وشروق الشمس على بحر من الصخور البركانية، وهي مكان ذو أهمية روحية وتاريخية حيث أقام فيها شارل دو فوكو.',
    },
    {
      title: 'القصبة العتيقة بالجزائر',
      img: '/images/Casbah.jpg',
      description: 'قلب الجزائر العاصمة التاريخي وموقع مدرج ضمن قائمة اليونسكو للتراث العالمي منذ عام 1992. تمثل نموذجًا فريدًا للمدينة الإسلامية المتوسطية بتخطيطها المعقد وأزقتها الضيقة ومنازلها البيضاء المتراصة التي تتشبث بالتلال.',
      details: 'تزخر القصبة بالمساجد العثمانية القديمة والقصور الأثرية والمنازل التقليدية التي تحكي قصصًا من قرون مضت. كانت مركزًا للحياة السياسية والاجتماعية والثقافية، ولعبت دورًا محوريًا خلال الثورة الجزائرية. التجول في أزقتها هو رحلة عبر الزمن لاكتشاف الهندسة المعمارية الأصيلة والروح المجتمعية العريقة.',
    },
    {
      title: 'جميلة الرومانية',
      img: '/images/Djemila.jpg', // Assuming you have an image for Djemila
      description: 'مدينة رومانية أخرى مدرجة في قائمة اليونسكو للتراث العالمي، تشتهر بكونها واحدة من أجمل المواقع الأثرية الرومانية المحفوظة في شمال أفريقيا. تأسست في القرن الأول الميلادي، وتتميز بمنتداها الكبير ومعابدها وحماماتها ومنازلها الفاخرة التي تضم فسيفساء رائعة.',
      details: 'تقع جميلة (كويكول سابقًا) في ولاية سطيف وسط تضاريس جبلية خلابة. تقدم للزوار لمحة فريدة عن الحياة في مستعمرة رومانية جبلية، مع شوارعها المرصوفة ومسرحها الذي يتسع لـ 3000 شخص، مما يجعلها موقعًا لا بد من زيارته لعشاق التاريخ والآثار.',
    },
    {
      title: 'تيميمون',
      img: '/images/Timimoun.jpg', // Assuming you have an image for Timimoun
      description: 'واحة ساحرة تقع في الصحراء الجزائرية الكبرى بولاية أدرار، وتشتهر بعمارتها الطينية الحمراء المميزة (كرتة) ونظامها التقليدي للري (الفقارة). تعتبر نموذجًا فريدًا للمدن الصحراوية التي تعكس الانسجام بين الإنسان والبيئة القاسية.',
      details: 'تيميمون هي مركز لثقافة الواحات، وتوفر تجربة فريدة للسياح من خلال أسواقها التقليدية وحقول النخيل والمناظر الطبيعية الصحراوية الخلابة. تُعرف أيضًا بـ "الواحة الحمراء" وتجذب الزوار بسكونها وجمالها الطبيعي وعاداتها الأصيلة.',
    },
  ];

  return (
    <section id="tourism" className="py-5 bg-white" dir="rtl">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-dark mb-3" style={{ fontFamily: 'Georgia, serif' }}>
            <span className="d-block">اكتشف سحر الجزائر:</span>
            <span className="d-block text-primary">وجهات سياحية لا تُنسى</span>
          </h2>
          <p className="lead text-secondary mx-auto" style={{ maxWidth: '700px' }}>
            من الآثار الرومانية العريقة إلى المناظر الطبيعية الصحراوية الخلابة، تقدم الجزائر تجربة سياحية فريدة وغنية بالثقافة والتاريخ والمغامرات. انغمس في جمالها الساحر وتنوعها المذهل.
          </p>
        </div>

        <Row className="g-4 justify-content-center"> {/* Added justify-content-center for better alignment on smaller screens */}
          {places.map((place, idx) => (
            <Col lg={4} md={6} sm={10} key={idx} className="mb-4"> {/* Adjusted column sizing for better responsiveness */}
              <Card className="h-100 shadow-sm border-light rounded-3 overflow-hidden tourism-card bg-white text-dark">
                <div className="card-img-wrapper"> {/* Added wrapper for image hover effect */}
                  <Card.Img
                    variant="top"
                    src={place.img}
                    alt={place.title}
                    className="img-fluid" // Ensures image responsiveness
                    style={{ height: '220px', objectFit: 'cover' }}
                  />
                </div>
                <Card.Body className="d-flex flex-column p-4"> {/* Added padding for better spacing */}
                  <Card.Title className="h5 text-dark mb-2 fw-bold"> {/* Made title bolder */}
                    {place.title}
                  </Card.Title>
                  <Card.Text className="text-secondary flex-grow-1 mb-3 card-description"> {/* Added a class for potential truncation */}
                    {place.description}
                  </Card.Text>
                  <div className="mt-auto pt-3 border-top"> {/* Added top border and padding for separation */}
                    <p className="small text-muted mb-0 lh-base">{place.details}</p> {/* Adjusted line height */}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <style jsx>{`
        .tourism-card {
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }
        
        .tourism-card:hover {
          transform: translateY(-8px); /* Increased lift on hover */
          box-shadow: 0 12px 30px rgba(0,0,0,0.15) !important; /* Enhanced shadow */
        }
        
        .card-img-wrapper {
          overflow: hidden; /* Ensures image zoom stays within bounds */
        }

        .tourism-card img {
          transition: transform 0.3s ease-in-out;
        }
        
        .tourism-card:hover img {
          transform: scale(1.08); /* Slightly increased zoom */
        }

        .card-description {
          display: -webkit-box;
          -webkit-line-clamp: 3; /* Limit description to 3 lines */
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* Responsive adjustments for the heading */
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

export default TourismSection;