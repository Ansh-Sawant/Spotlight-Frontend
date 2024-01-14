import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import { register } from "../service/api";

const Signup = () => {
  let history = useHistory();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col></Col>
          <Col>
            <div className="loginPage">
              <div className="loginDiv">
                <p className="loginHeading">Sign Up</p>
                <form className="loginDetails" method="post">
                  <label htmlFor="name" className="formDetailHeading">
                    Name
                  </label>
                  <br />
                  <input
                    type="text"
                    name="name"
                    placeholder="&#xF007;   Type Your Name"
                    className="formInputFields"
                    onChange={handleChange}
                  />
                  <br />
                  <label htmlFor="email" className="formDetailHeading">
                    Email
                  </label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    placeholder="&#xF0E0;   Type Your Email"
                    className="formInputFields"
                    onChange={handleChange}
                  />
                  <br />
                  <label htmlFor="password" className="formDetailHeading">
                    Password
                  </label>
                  <br />
                  <input
                    type="password"
                    name="password"
                    placeholder="&#xF023;   Type Your Password"
                    className="formInputFields"
                    onChange={handleChange}
                  />
                  <br />
                  <label
                    htmlFor="confirmPassword"
                    className="formDetailHeading"
                  >
                    Confirm Password
                  </label>
                  <br />
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="&#xF023;   Confirm Your Password"
                    className="formInputFields"
                    onChange={handleChange}
                  />
                  <p className="loginButton" onClick={() => register(user)}>
                    REGISTER
                  </p>
                  <div className="signupDiv">
                    <p
                      className="signupContent"
                      style={{ color: "grey", fontSize: "13px" }}
                    >
                      Or Sign In using
                    </p>
                    <p
                      className="signupContent"
                      style={{ cursor: "pointer", color: "darkslategray" }}
                      onClick={() => {
                        history.push("/login");
                      }}
                    >
                      LOGIN
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default Signup;
