import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const texts = require('../appConfig/config.json');

const SignIn = () => {
  return (
    <>
      <div className="content">
        <Container>
          <div className="text-center">
            <form className="form-signin">
              <h1 className="mb-3 font-weight-normal">{texts.sign_in}</h1>
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
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" />
                  {texts.remember_me}
                </label>
              </div>
              <Button
                variant="dark"
                className="rounded-pill login-page-btn"
                type="submit"
              >
                {texts.login}
              </Button>
            </form>
          </div>
        </Container>
      </div>
    </>
  );
};

export default SignIn;
