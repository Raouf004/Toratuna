// components/AboutSection.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer'; // For scroll animations

const AboutSection = () => {
  // Use useInView hook for animation on scroll
  const [refTitle, inViewTitle] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [refFlag, inViewFlag] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [refPreIslamic, inViewPreIslamic] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [refIslamic, inViewIslamic] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [refOttoman, inViewOttoman] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [refFrench, inViewFrench] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [refRevolution, inViewRevolution] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section id="about" className="py-5 bg-white about-section" dir="rtl">
      <Container>
        {/* Section Title */}
        <div ref={refTitle} className={`text-center mb-5 animate__animated ${inViewTitle ? 'animate__fadeInDown' : 'animate__fadeOutUp'}`}>
          <h2 className="display-4 fw-bold text-dark mb-3" style={{ fontFamily: 'Georgia, serif' }}>
            الجزائر: مهد الحضارات وتاريخ الصمود 🇩🇿
          </h2>
          <p className="lead text-secondary mx-auto" style={{ maxWidth: '800px' }}>
            انطلق في رحلة عبر الزمن في تاريخ أكبر دولة في إفريقيا، من العصور القديمة إلى الاستقلال المجيد، واكتشف ماضيها العريق وحاضرها المشرق.
          </p>
        </div>

        {/* Geography and Cultural Diversity */}
        <Row ref={refFlag} className={`align-items-center mb-5 animate__animated ${inViewFlag ? 'animate__fadeInRight' : 'animate__fadeOutLeft'}`}>
          <Col md={6} className="order-md-2"> {/* Flag on the right for RTL layout */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg"
              alt="علم الجزائر"
              className="img-fluid rounded shadow-lg mb-4 mb-md-0 about-image"
              loading="lazy"
            />
          </Col>
          <Col md={6} className="order-md-1">
            <h4 className="text-dark mb-3">الجغرافيا والتنوع الثقافي 🌍</h4>
            <p className="text-secondary text-justify">
              تُعرف **الجمهورية الجزائرية الديمقراطية الشعبية** كأكبر دولة في إفريقيا والعالم العربي من حيث المساحة،
              وتحتضن تنوعًا جغرافيًا ومناخيًا فريدًا يمتد من السواحل المتوسطية شمالاً،
              إلى سلاسل جبال الأطلس، وصولاً إلى المساحات الشاسعة والمهيبة للصحراء الكبرى في الجنوب.
              يُشكل **الأمازيغ** و**العرب** المكونين الرئيسيين للمجتمع الجزائري،
              ما يثري النسيج الثقافي للبلاد ويعكسه في اللغتين الرسميتين، العربية والأمازيغية،
              إلى جانب انتشار واسع للفرنسية. يتجلى هذا التنوع في الفنون، الموسيقى، والمأكولات.
            </p>
          </Col>
        </Row>

        {/* --- Pre-Islamic Era --- */}
        <hr className="my-5 section-divider" />
        <Row ref={refPreIslamic} className={`mb-5 animate__animated ${inViewPreIslamic ? 'animate__fadeInUp' : 'animate__fadeOutDown'}`}>
          <Col md={12}>
            <h4 className="text-dark mb-3 text-center section-sub-title">عصور ما قبل التاريخ والحضارات القديمة ⏳</h4>
            <p className="text-secondary text-justify">
              شهدت أرض الجزائر استيطانًا بشريًا منذ العصور الحجرية، كما تشهد على ذلك المكتشفات الأثرية في مواقع مثل **عين الحنش**.
              ازدهرت حضارات ما قبل التاريخ مثل **الحضارة الآتيرية** و**القبصية**،
              مع ترك آثار لفنون صخرية رائعة في **الطاسيلي ناجر** بالصحراء الكبرى.
              <br /><br />
              في الألفية الأولى قبل الميلاد، بدأت المدن الساحلية تتشكل تحت تأثير **الفينيقيين** الذين أسسوا مراكز تجارية.
              لاحقًا، برزت ممالك **نوميديا** الأمازيغية المستقلة، وأشهر حكامها الملك **ماسي نسا** الذي وحدها،
              و**يوغرطة** الذي قاد مقاومة باسلة ضد التوسع الروماني.
              بعد هزيمة يوغرطة، أصبحت أجزاء كبيرة من الجزائر تحت السيطرة **الرومانية**،
              حيث ازدهرت مدن مثل تيمقاد، جميلة، وتيبازة، تاركة إرثًا معماريًا وأثريًا عظيمًا.
              تبع العهد الروماني فترة حكم **الوندال** ثم **البيزنطيين** في القرنين الخامس والسادس الميلادي.
            </p>
          </Col>
        </Row>

        {/* --- Islamic Dynasties --- */}
        <hr className="my-5 section-divider" />
        <Row ref={refIslamic} className={`mb-5 animate__animated ${inViewIslamic ? 'animate__fadeInUp' : 'animate__fadeOutDown'}`}>
          <Col md={12}>
            <h4 className="text-dark mb-3 text-center section-sub-title">العهد الإسلامي والدول المتعاقبة 🕌</h4>
            <p className="text-secondary text-justify">
              بدأ الفتح الإسلامي للمنطقة في منتصف القرن السابع الميلادي،
              محدثًا تحولًا عميقًا في النسيج الاجتماعي والثقافي والديني للجزائر،
              حيث اعتنق الأمازيغ الإسلام بمرور الوقت.
              توالت على حكم المنطقة عدة دول وإمارات إسلامية قوية:
            </p>
            <ul className="text-secondary text-justify history-list">
              <li>
                **الدولة الرستمية (776-909 م):** أول دولة مستقلة في الجزائر، اتخذت من **تاهرت** عاصمة لها، وعُرفت بالعدل ودعم العلم.
              </li>
              <li>
                **الدولة الفاطمية (909-1171 م):** نشأت في شرق الجزائر قبل أن تنتقل إلى مصر.
              </li>
              <li>
                **الدول البربرية الكبرى (الزيريون والحماديون، المرابطون والموحدون):** تلتها دول بربرية قوية مثل **الزيريين** و**الحماديين** (عاصمتهم القلعة)،
                و**المرابطين** الذين أسسوا إمبراطورية واسعة امتدت إلى الأندلس،
                و**الموحدين** الذين وحدوا المغرب العربي والأندلس تحت راية واحدة في أوج قوتهم.
              </li>
              <li>
                **الدولة الزيانية (1235-1556 م):** حكمت من **تلمسان**، وشهدت ازدهارًا ثقافيًا وعمرانيًا.
              </li>
            </ul>
          </Col>
        </Row>

        {/* --- Ottoman Rule --- */}
        <hr className="my-5 section-divider" />
        <Row ref={refOttoman} className={`mb-5 animate__animated ${inViewOttoman ? 'animate__fadeInUp' : 'animate__fadeOutDown'}`}>
          <Col md={12}>
            <h4 className="text-dark mb-3 text-center section-sub-title">العهد العثماني (1518-1830) 🚢</h4>
            <p className="text-secondary text-justify">
              في أوائل القرن السادس عشر، مع تزايد التهديدات الإسبانية على السواحل الجزائرية،
              طلب السكان المحليون المساعدة من الإخوة بربروسا، **عروج وخير الدين**.
              في عام 1518، أصبحت الجزائر تحت حماية **الدولة العثمانية**،
              وتحولت إلى "إيالة الجزائر" التي تمتعت باستقلال ذاتي واسع.
              أصبحت الجزائر قوة بحرية رئيسية في البحر الأبيض المتوسط،
              تدافع عن سواحلها وتشارك في الأنشطة القرصنة المنظمة التي كانت سمة لتلك الفترة.
              شهد هذا العهد ازدهارًا عمرانيًا وثقافيًا، خاصة في المدن الكبرى مثل **الجزائر العاصمة**،
              التي أصبحت مدينة ذات طابع عثماني مميز، بما في ذلك القصبة الشهيرة.
              استمر الحكم العثماني حوالي ثلاثة قرون قبل الغزو الفرنسي.
            </p>
          </Col>
        </Row>

        {/* --- French Colonization and Resistance --- */}
        <hr className="my-5 section-divider" />
        <Row ref={refFrench} className={`mb-5 animate__animated ${inViewFrench ? 'animate__fadeInUp' : 'animate__fadeOutDown'}`}>
          <Col md={12}>
            <h4 className="text-dark mb-3 text-center section-sub-title">الاحتلال الفرنسي والمقاومة الباسلة (1830-1962) ✊</h4>
            <p className="text-secondary text-justify">
              في **14 يونيو 1830**، بدأت القوات الفرنسية إنزالها في سيدي فرج،
              وسقطت الجزائر العاصمة في **5 يوليو 1830**.
              امتد الاحتلال الفرنسي ليشمل كامل التراب الجزائري بعد مقاومة عنيفة.
              واجه الفرنسيون مقاومة شرسة من الجزائريين على مدى عقود،
              من أبرزها مقاومة **الأمير عبد القادر** في الغرب (1832-1847)،
              الذي أسس دولة منظمة وقاد حربًا طويلة ضد المحتل.
              كما برزت مقاومات أخرى في الشرق والقبائل والصحراء،
              مثل مقاومة **أحمد باي** في قسنطينة، ومقاومة **للا فاطمة نسومر** في القبائل.
              <br /><br />
              تميزت فترة الاستعمار بالاستيلاء على الأراضي، وقمع الهوية الجزائرية،
              وفرض سياسات التمييز التي أثرت بعمق على المجتمع الجزائري.
              بعد الحرب العالمية الثانية، تصاعد الوعي الوطني وظهرت حركات سياسية تطالب بالاستقلال.
            </p>
          </Col>
        </Row>

        {/* --- War of Independence and Post-Independence Challenges --- */}
        <hr className="my-5 section-divider" />
        <Row ref={refRevolution} className={`mb-5 animate__animated ${inViewRevolution ? 'animate__fadeInUp' : 'animate__fadeOutDown'}`}>
          <Col md={12}>
            <h4 className="text-dark mb-3 text-center section-sub-title">ثورة التحرير والاستقلال (1954-1962) وما بعدها ✨</h4>
            <p className="text-secondary text-justify">
              في **الفاتح من نوفمبر 1954**، اندلعت ثورة التحرير الجزائرية الكبرى،
              بقيادة **جبهة التحرير الوطني (FLN)** وجيش التحرير الوطني،
              لتكون واحدة من أطول وأعنف حروب التحرير في القرن العشرين.
              استمرت الثورة لأكثر من سبع سنوات ونصف، وخلّفت ملايين الشهداء،
              وانتهت بتوقيع **اتفاقيات إيفيان** في **18 مارس 1962**،
              وإعلان الاستقلال الرسمي في **5 يوليو 1962**.
              <br /><br />
              بعد الاستقلال، واجهت الجزائر تحديات كبيرة في بناء الدولة وإعادة الإعمار،
              مع التركيز على التنمية الاقتصادية والاجتماعية.
              شهدت البلاد مراحل سياسية واقتصادية مختلفة، بما في ذلك فترة حكم الحزب الواحد
              ثم التحول نحو التعددية في التسعينيات.
              على الرغم من التحديات، تواصل الجزائر سعيها نحو التقدم والازدهار،
              وتلعب دورًا هامًا في المنطقة وعلى الساحة الدولية.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Custom Styles */}
      <style jsx>{`
        /* General Section Styling */
        .about-section {
          background-color: #f8f9fa !important; /* Slightly off-white for subtle contrast */
          padding-top: 6rem; /* More padding top */
          padding-bottom: 6rem; /* More padding bottom */
        }

        .text-dark { color: #212529 !important; }
        .text-secondary { color: #6c757d !important; }

        /* Titles and Headings */
        .display-4 {
          font-size: 3.5rem; /* Slightly larger main title */
        }
        .section-sub-title {
          font-size: 2rem; /* Larger sub-titles */
          font-weight: bold;
          color: #343a40 !important; /* Slightly darker shade for sub-titles */
          position: relative;
          padding-bottom: 10px;
          margin-bottom: 25px !important;
        }

        .section-sub-title::after {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: 0;
          height: 3px;
          width: 80px; /* Underline for sub-titles */
          background-color: #007bff; /* Primary accent color */
          border-radius: 2px;
        }

        .lead {
          font-size: 1.25rem;
          line-height: 1.8;
        }

        /* Image Styling */
        .about-image {
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          border: 5px solid #e9ecef; /* Subtle border around images */
        }

        .about-image:hover {
          transform: scale(1.03); /* Slight zoom on hover */
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15) !important; /* More pronounced shadow */
        }

        /* Text Justification and Line Height */
        .text-justify {
          text-align: justify;
          line-height: 1.8; /* Improved line height for readability */
          font-size: 1.05rem; /* Slightly larger body text */
        }

        /* List Styling (Islamic Dynasties) */
        .history-list {
          list-style: none; /* Remove default bullet points */
          padding-right: 0; /* Remove default padding */
        }

        .history-list li {
          position: relative;
          padding-right: 30px; /* Space for custom bullet */
          margin-bottom: 10px;
          line-height: 1.8;
          font-size: 1.05rem;
        }

        .history-list li::before {
          content: '•'; /* Custom bullet point */
          position: absolute;
          right: 0;
          color: #007bff; /* Accent color for bullets */
          font-size: 1.5rem;
          line-height: 1;
        }

        /* Horizontal Rule Separators */
        .section-divider {
          border: 0;
          height: 1px;
          background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0));
        }

        /* Animations (Requires animate.css) */
        /* Make sure you have animate.css linked in your public/index.html or _app.js */
        /* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/> */
        .animate__animated {
          visibility: hidden; /* Hide by default to prevent animation before scroll */
        }
        .animate__animated.animate__fadeInDown,
        .animate__animated.animate__fadeInRight,
        .animate__animated.animate__fadeInUp {
          visibility: visible; /* Show when animation class is applied */
        }
        /* You might need to adjust animate__fadeOutUp/Down/Left/Right if you prefer elements to disappear when scrolling away */

        /* Responsive Adjustments */
        @media (max-width: 991.98px) { /* Tablets */
          .about-image {
            max-height: 250px; /* Adjust image height */
          }
          .display-4 {
            font-size: 2.8rem;
          }
          .section-sub-title {
            font-size: 1.7rem;
          }
        }

        @media (max-width: 767.98px) { /* Mobile */
          .display-4 {
            font-size: 2rem;
          }
          .lead {
            font-size: 1.1rem;
          }
          .section-sub-title {
            font-size: 1.5rem;
            margin-bottom: 20px !important;
          }
          .section-sub-title::after {
            width: 60px;
          }
          .text-justify, .history-list li {
            font-size: 0.95rem;
            line-height: 1.6;
          }
          .about-image {
            max-height: 200px;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;