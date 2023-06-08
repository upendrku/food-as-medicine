import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const texts = require('../appConfig/config.json');
const logo = require('../assets/default1.png');

const Header = () => {
  const navigate = useNavigate();
  const signUp = () => {
    navigate('/sign-up');
  };
  const signIn = () => {
    navigate('/sign-in');
  };
  const navigateToHome = () => {
    navigate('/home');
  };
  const navigateToSearch = () => {
    navigate('/search');
  };
  const navigateToAboutUs = () => {
    navigate('/about-us');
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="light">
        <div className="header">
          <Navbar.Brand onClick={navigateToHome}>
            {/* <img className="logo" src={logo} /> */}
            <h3>Food4Health</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={navigateToHome}>{texts.home}</Nav.Link>
              {/* <Nav.Link onClick={navigateToSearch}>{texts.search}</Nav.Link> */}
              <Nav.Link onClick={navigateToAboutUs}>{texts.about_us}</Nav.Link>
              {/* <Nav.Link href="testimonials">Testimonials</Nav.Link> */}
              {/* <Nav.Link href="contact-us">Contact Us</Nav.Link> */}
              {/* <Nav.Link href="faqs">FAQs</Nav.Link> */}
              {/* <Button
                variant="primary"
                className="rounded-pill login-btn"
                onClick={signUp}
              >
                {texts.sign_up}
              </Button> */}
              {/* <Button
                variant="dark"
                className="rounded-pill login-btn"
                onClick={signIn}
              >
                {texts.login}
              </Button> */}
              <Button
                variant="primary"
                className="rounded-pill login-btn"
                onClick={navigateToSearch}
              >
                {texts.search}
              </Button>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
