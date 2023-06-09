import Container from 'react-bootstrap/Container';

const meditateImg = require('../assets/about.gif'); // require('../assets/meditating.png');
const texts = require('../appConfig/config.json');

const AboutUs = () => {
  return (
    <>
      <div className="content">
        <Container>
          <div>
            <div className="text-center">
              <h1 className="mb-5 mt-5">{texts.about_us}</h1>
              {/* <img src={meditateImg} width={300} height={300} /> */}
              <img
                src="https://bnmc.org/wp-content/uploads/2022/10/FAM-IMAGE-1.png"
                width={300}
                height={300}
                className="img-border"
              />
              <h3>Powered by BNMC Health and Well-Being</h3>
              <p className="about-us-para">{texts.about_us_para}</p>
            </div>
            <div className="mt-5">
              <div className="cards-section">
                <div className="col-12 col-lg-4 pb-4 p-4">
                  <div className="card about-card card-01">
                    <img
                      className="card-img-top"
                      src="https://images.pexels.com/photos/212286/pexels-photo-212286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Innovation"
                    />
                    <div className="card-body">
                      <div className="text-center">
                        <h4 className="card-title">Connect</h4>
                      </div>
                      <p className="card-text mb-4">
                        Make it easy for healthcare to refer out to
                        community-based food and nutrition resources.
                      </p>
                      Who this tool is for connecting:
                      <ul>
                        <li>Community members</li>
                        <li>Clinicians and Healthcare Professionals</li>
                        <li>Community Based Organizations</li>
                        <li>Nutrition Focused Businesses</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <div className="col-12 col-lg-4 pb-4 p-4">
                  <div className="card about-card card-01">
                    <img
                      className="card-img-top"
                      src="https://images.pexels.com/photos/212286/pexels-photo-212286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Innovation"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Innovation</h4>
                      <p className="card-text mb-4">
                        We value new thinking, new ideas, innovation, and
                        entrepreneurship.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4 pb-4 p-4">
                  <div className="card about-card card-01">
                    <img
                      className="card-img-top"
                      src="https://images.pexels.com/photos/1222949/pexels-photo-1222949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Inclusion"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Inclusion</h4>
                      <p className="card-text mb-4">
                        Diversity, equity, and inclusion are at the core of all
                        that we do.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4 pb-4 p-4">
                  <div className="card about-card card-01">
                    <img
                      className="card-img-top"
                      src="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Sustainability"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Sustainability</h4>
                      <p className="card-text mb-4">
                        Sustainability, and a culture that fosters health, and
                        well-being are driving forces in all that we undertake.
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default AboutUs;
