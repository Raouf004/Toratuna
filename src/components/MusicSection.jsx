// components/MusicSection.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const MusicSection = () => {
  return (
    <section id="music" className="py-5 bg-light" dir="rtl">
      <Container>
        {/* Section Heading and Introduction */}
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-dark mb-3" style={{ fontFamily: 'Georgia, serif' }}>
            <span className="d-block">الموسيقى والفنون التراثية الجزائرية</span>
          </h2>
          <p className="lead text-secondary mx-auto" style={{ maxWidth: '800px' }}>
            تعكس الموسيقى والفنون في الجزائر تاريخًا غنيًا وتنوعًا ثقافيًا فريدًا، يمتد من التأثيرات الأمازيغية والعربية إلى الأندلسية والعثمانية، وصولًا إلى الأنماط الحديثة. تُعد الموسيقى جزءًا لا يتجزأ من الهوية الجزائرية، مع وجود أنماط مميزة لكل منطقة، تروي قصصًا من عمق هذه الأرض.
          </p>
        </div>

        <Row className="mb-5 align-items-stretch"> {/* Added align-items-stretch for equal column heights */}
          {/* Prominent Music Styles */}
          <Col md={6} className="d-flex"> {/* Added d-flex to make column content fill height */}
            <div className="p-4 rounded shadow-sm bg-white w-100"> {/* Added padding, shadow, background, and full width */}
              <h4 className="text-dark mb-4 border-bottom pb-2">أنماط موسيقية بارزة 🎶</h4>
              <ul className="text-secondary list-unstyled"> {/* Removed default list styling */}
                <li className="mb-3">
                  <strong><span className="text-primary">الراي (Raï):</span></strong> نشأ في وهران في أوائل القرن العشرين، وتطور من موسيقى الفلاحين والرعاة. اكتسب شعبية عالمية بفضل فنانين مثل **الشاب خالد**، **الشاب مامي**، و**الشابة الزهوانية**. يتميز بإيقاعاته المبهجة وكلماته التي غالبًا ما تتناول قضايا اجتماعية أو عاطفية.
                </li>
                <li className="mb-3">
                  <strong><span className="text-primary">الشعبي (Chaâbi):</span></strong> يعتبر الموسيقى الحضرية الكلاسيكية للعاصمة الجزائرية. يتميز بالأداء الصوتي القوي مصحوبًا بآلات مثل الماندول، العود، والكمان. **الحاج محمد العنقة** يُعتبر رائد هذا الفن. الشعبي غالبًا ما يروي قصصًا عن الحياة اليومية، الحب، والحكمة.
                </li>
                <li className="mb-3">
                  <strong><span className="text-primary">الموسيقى الأندلسية (Andalusi Music):</span></strong> فن عريق يعود بجذوره إلى الأندلس، ويُمارس في مدن مثل تلمسان، الجزائر العاصمة، وقسنطينة. تتسم بالتعقيد اللحني والتناغم الصوتي، وتُعزف على آلات مثل العود، الكمان، القانون، والناي. تُعرف الفرق الأندلسية بـ "المالوف" في قسنطينة، و"الصنعة" في الجزائر، و"الغرناطي" في تلمسان.
                </li>
                <li className="mb-3">
                  <strong><span className="text-primary">القبائلي والأمازيغي (Kabyle & Amazigh Music):</span></strong> تعبر عن التراث الأمازيغي الأصيل في مناطق القبائل والأوراس. يتميز بأصوات قوية وقصائد غنائية تتناول الطبيعة، المقاومة، والحياة اليومية. فنانون مثل **إيدير** و**للا نسومر** يمثلون هذا النمط.
                </li>
                <li className="mb-3">
                  <strong><span className="text-primary">الموسيقى الصحراوية (Saharan Music):</span></strong> تنتشر في جنوب الجزائر، وتتسم بإيقاعاتها الروحية التي تعكس حياة البدو والصحراء، وغالبًا ما تستخدم آلات مثل الإمزاد والقرقابو.
                </li>
              </ul>
            </div>
          </Col>

          {/* Visual Arts and Handicrafts */}
          <Col md={6} className="d-flex mt-4 mt-md-0"> {/* Added d-flex and margin-top for mobile */}
            <div className="p-4 rounded shadow-sm bg-white w-100"> {/* Added padding, shadow, background, and full width */}
              <h4 className="text-dark mb-4 border-bottom pb-2">الفنون التشكيلية والحرف اليدوية 🎨</h4>
              <ul className="text-secondary list-unstyled"> {/* Removed default list styling */}
                <li className="mb-3">
                  <strong><span className="text-primary">الرسم والنحت:</span></strong> شهدت الجزائر بروز العديد من الفنانين التشكيليين المعاصرين الذين استلهموا من التراث المحلي والمناظر الطبيعية، بينما قدموا أعمالًا تعكس القضايا الحديثة.
                </li>
                <li className="mb-3">
                  <strong><span className="text-primary">الخط العربي:</span></strong> فن عريق يحتل مكانة خاصة في الثقافة الجزائرية، يُستخدم في تزيين المساجد، المخطوطات، والأعمال الفنية.
                </li>
                <li className="mb-3">
                  <strong><span className="text-primary">السجاد الجزائري:</span></strong> تشتهر الجزائر بأنواع متعددة من السجاد المصنوع يدويًا، مثل سجاد **غرداية** و**النمامشة**، والذي يتميز بزخارف هندسية وألوان زاهية تعكس بيئة المنطقة.
                </li>
                <li className="mb-3">
                  <strong><span className="text-primary">صناعة الفخار والمجوهرات:</span></strong> الحرف اليدوية مثل صناعة الفخار الأمازيغي التقليدي والمجوهرات الفضية (خاصة في منطقة القبائل) تُعد جزءًا مهمًا من التراث الفني الجزائري، وتتميز بتصاميمها الفريدة والدقيقة.
                </li>
              </ul>
            </div>
          </Col>
        </Row>

        {/* Embedded Music Player */}
        <div className="text-center mt-5"> {/* Increased top margin */}
          <h4 className="text-dark mb-4">استمع إلى الموسيقى الجزائرية 🎧</h4>
          <div className="embed-responsive embed-responsive-16by9 d-flex justify-content-center"> {/* Bootstrap 4/5 responsive embed */}
            <iframe
              width="100%" // Set width to 100% to fill its container
              height="auto" // Height will be managed by aspect ratio
              src="https://www.youtube.com/embed/e7P9o-01VjA" // Example: "Algerian Music Mix" - replaced placeholder
              title="موسيقى جزائرية"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded shadow-lg" // Enhanced shadow for the embed
              style={{ maxWidth: '800px', aspectRatio: '16/9' }} // Added aspect ratio for proper scaling
            ></iframe>
          </div>
        </div>
      </Container>
      <style jsx>{`
        /* Custom styles for the Music Section */
        .text-primary {
          /* Define a subtle accent color here if you don't have Bootstrap's text-primary defined globally. */
          /* Example: color: #007bff; */ 
          /* Keeping it as text-primary assumes your Bootstrap theme handles it,
             which allows for easy color changes via theme variables. */
        }

        /* Responsive adjustments for headings */
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

export default MusicSection;