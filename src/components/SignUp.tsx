import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const texts = require('../appConfig/config.json');

const SignUp = () => {
  return (
    <>
      <div className="content">
        <Container>
          <div className="text-center">
            <form className="form-signup">
              <h1 className="mb-3 font-weight-normal">{texts.sign_up}</h1>
              <label htmlFor="inputEmail" className="sr-only">
                {texts.email_address}
              </label>
              <input
                type="email"
                id="inputEmail"
                className="form-control"
                placeholder="Email address"
                required
                autoFocus
              />
              <label htmlFor="inputPassword" className="sr-only">
                {texts.password}
              </label>
              <input
                type="password"
                id="inputPassword"
                className="form-control"
                placeholder="Password"
                required
              />
              <label htmlFor="confirmPassword" className="sr-only">
                {texts.confirm_password}
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="form-control"
                placeholder="Confirm Password"
                required
              />
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" />
                  {texts.i_agree} <a href="#">{texts.terms_n_conditions}</a>.
                </label>
              </div>
              <Button
                variant="primary"
                className="rounded-pill login-page-btn"
                type="submit"
              >
                {texts.sign_up}
              </Button>
            </form>
          </div>
        </Container>
      </div>
    </>
  );
};

export default SignUp;
