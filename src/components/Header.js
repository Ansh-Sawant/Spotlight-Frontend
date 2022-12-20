import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Articles from "./Articles";
import Login from "./Login";
import Bookmarks from "./Bookmarks";
import Signup from "./Signup";

const Header = () => {
  const [loginUser, setLoginUser] = useState({});

  return (
    <>
      <Router>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="light"
          variant="light"
          fixed="top"
        >
          <Navbar.Brand className="navbarBrand">
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
              <img
                src="/lamp.png"
                className="d-inline-block align-top lamp"
                alt="Spotlight logo"
              />
              <span className="spotlightTitle">Spotlight</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link className="login">
                <Link
                  to="/bookmarks"
                  style={{ color: "gray", textDecoration: "none" }}
                >
                  My Bookmarks
                </Link>
              </Nav.Link>
              <Nav.Link eventKey={2} className="login">
                <Link
                  to={loginUser && loginUser._id ? "/" : "/login"}
                  style={{ color: "gray", textDecoration: "none" }}
                >
                  {loginUser && loginUser._id ? loginUser.name : "Login"}
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div style={{ margin: "40px" }}>&nbsp;</div>

        <Switch>
          <Route path="/login">
            <Login setLoginUser={setLoginUser} />
          </Route>
          <Route path="/bookmarks">
            <Bookmarks loginUser={loginUser} />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route exact path="/">
            <Articles loginUser={loginUser} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Header;
