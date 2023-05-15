import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { title } from 'process';
// const healthImg = require('../assets/health.png');
const healthImg = require('../assets/landing_b.gif');
const texts = require('../appConfig/config.json');

const LandingPage = () => {
  const navigate = useNavigate();

  const navigateToSearch = () => {
    navigate('/search');
  };

  return (
    <>
      <div className="content">
        <Container>
          <div className="text-center">
            <div className="non-mobile">
              <div className="landing-title mt-5 line1">
                {texts.landing_title_part1}
              </div>
              <div className="landing-title mt-2 line2">
                {texts.landing_title_part2}
              </div>
            </div>
            <div className="mobile">
              <div className="landing-title mt-5">{texts.landing_title}</div>
            </div>
            <img
              src={healthImg}
              className="mobile-size-img"
              width={500}
              height={500}
            />
            <div className="landing-subtitle">{texts.landing_subtitle}</div>
            <Button
              onClick={navigateToSearch}
              variant="success"
              className="rounded-pill lets-start"
            >
              {texts.landing_button_text}
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default LandingPage;
