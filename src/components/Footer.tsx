import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Container>
          <div className="footer-left col-md-4 col-sm-6">
            <p className="about">
              <span> About the company</span> BNMC manages Buffalo Niagara
              Medical Campus & its innovation district, creating an innovation
              community for designers, entrepreneurs, and businesses of all
              sizes. BNMC connects and convenes individuals to make meaningful
              change in individual lives, communities, and city.
            </p>
            <div className="icons">
              <a href="https://www.facebook.com/BnmcInnovates">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="https://twitter.com/BnmcInnovates">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/company/buffalo-niagara-medical-campus-inc./">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/bnmcinnovates/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://talkingcities.libsyn.com/2023">
                <i className="fa fa-headphones"></i>
              </a>
            </div>
          </div>
          <div className="footer-center col-md-4 col-sm-6">
            <div>
              <i className="fa fa-map-marker"></i>
              <p>
                <span> 640 Ellicott Street</span> Buffalo NY 14203
              </p>
            </div>
            <div>
              <i className="fa fa-phone"></i>
              <p> 716-854-2662</p>
            </div>
            <div>
              <i className="fa fa-envelope"></i>
              <p>
                <a href="#"> healthycommunities@bnmc.org</a>
              </p>
            </div>
          </div>
          <div className="footer-right col-md-4 col-sm-6">
            <h2> {/* YouBe<span> Healthy</span> */} Food4Health</h2>
            <p className="menu">
              <a href="https://bnmc.org/"> Home</a> | &nbsp;
              <a href="https://bnmc.org/about/"> About</a> | &nbsp;
              <a href="https://bnmc.org/contact/"> Contact</a>
            </p>
            <p className="name"> BNMC &copy; 2016</p>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
