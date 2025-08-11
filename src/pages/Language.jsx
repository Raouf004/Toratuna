// src/pages/Language.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Language = () => {
  const dialects = [
    {
      title: "العربية الفصحى",
      description: "اللغة الرسمية للدولة، تُستخدم في الإعلام والتعليم والمراسلات الرسمية.",
    },
    {
      title: "الدارجة الجزائرية",
      description: "لهجة عربية مزيجة بكلمات من الفرنسية والأمازيغية، تختلف من منطقة لأخرى.",
    },
    {
      title: "الأمازيغية",
      description: "لغة وطنية ورسمية، تُكتب بالحرف التيفيناغ، وتتفرع إلى لهجات مثل القبايلية، الشاوية، التارقية.",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">اللغة واللهجات في الجزائر</h2>
        <p className="lead text-center mb-5">
          الجزائر بلد غني بتنوعه اللغوي، مما يعكس عمق تاريخه وتعدد ثقافاته.
        </p>
        <Row>
          {dialects.map((item, idx) => (
            <Col md={4} key={idx} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="fw-bold">{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Language;
