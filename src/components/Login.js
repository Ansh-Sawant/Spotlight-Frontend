import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
// import { login } from "../service/api";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { URL } from '../constant';

const Login = ({ setLoginUser }) => {
  let history = useHistory();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = (user, setLoginUser) => {
    axios.post(`${URL}/login`, user).then((res) => {
      const message = res.data.message;
      if (message === 'User not registered') {
        alert('You are not registered with us, please Sign Up first');
        history.push("/signup");
      } else {
        alert(res.data.message);
      }
      if (res.data.user) {
        setLoginUser(res.data.user);
        history.push("/");
      }
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
                <p className="loginHeading">Login</p>
                <form className="loginDetails">
                  <label htmlFor="email" className="formDetailHeading">
                    Email
                  </label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    id="email"
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
                    id="password"
                    placeholder="&#xF023;   Type Your Password"
                    className="formInputFields"
                    onChange={handleChange}
                  />

                  <p
                    className="loginButton"
                    onClick={() => {
                      login(user, setLoginUser);
                    }}
                  >
                    LOGIN
                  </p>

                  <div className="signupDiv">
                    <p
                      className="signupContent"
                      style={{ color: "grey", fontSize: "13px" }}
                    >
                      Or Sign Up using
                    </p>
                    <p
                      className="signupContent"
                      style={{
                        cursor: "pointer",
                        color: "darkslategray",
                      }}
                      onClick={() => {
                        history.push("/signup");
                      }}
                    >
                      SIGN UP
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

export default Login;
