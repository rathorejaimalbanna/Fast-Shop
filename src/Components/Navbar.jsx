import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, Link } from "react-router-dom";
import UseValue from "../contextApi";
import styles from "../app.module.css";

// Header component renders the navigation bar
function Header() {
  // Retrieve userData and setUserData function from context
  const { userData, setUserData } = UseValue();

  // Function to handle logout
  function handleLogOut() {
    setUserData([]);
  }

  return (
    <>
      {/* Render navigation bar */}
      <div className={styles.navbar}>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand
              href="/"
              style={{ color: "rgb(88, 144, 234)", fontWeight: "700" }}
            >
              <img
                src="./images/fastShop.jpg"
                alt=""
                className={styles.fastIcons}
              />{" "}
              Fast Shop
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <div
                  style={{
                    display: "flex",
                    width: "80vw",
                    justifyContent: "space-around",
                  }}
                >
                  {/* Render search bar */}
                  <input
                    type="text"
                    placeholder="Search"
                    style={{
                      borderRadius: "5px",
                      width: "50%",
                      paddingLeft: "5px",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      width: "40%",
                    }}
                  >
                    {/* Render home link */}
                    <Link to="/" className={styles.link}>
                      <img
                        src="./images/home.png"
                        alt=""
                        className={styles.icons}
                      />{" "}
                      Home
                    </Link>
                    {/* Render cart link */}
                    <Link to="/cart" className={styles.link}>
                      <img
                        src="./images/trolley.png"
                        alt=""
                        className={styles.icons}
                      />{" "}
                      Cart
                    </Link>
                    {userData.length !== 0 &&<Link to="/myOrders" className={styles.link}>
                      <img
                        src="./images/order.png"
                        alt=""
                        className={styles.icons}
                      />{" "}
                      MyOrders
                    </Link>}
                    {/* Render login or user link */}
                    {userData.length !== 0 ? (
                      <Link to="/" className={styles.link}>
                        {" "}
                        <img
                          src="./images/user.png"
                          alt=""
                          className={styles.icons}
                          style={{ marginRight: "3px" }}
                        />
                        {userData.name}
                      </Link>
                    ) : (
                      <Link to="login" className={styles.link}>
                        {" "}
                        <img
                          src="./images/log.png"
                          alt=""
                          className={styles.icons}
                          style={{ marginRight: "3px" }}
                        />
                        LogIN
                      </Link>
                    )}
                    {/* Render sign up link */}
                    {userData.length === 0 && (
                      <Link to="signin" className={styles.link}>
                        {" "}
                        <img
                          src="./images/signup.png"
                          alt=""
                          className={styles.icons}
                          style={{ marginRight: "3px" }}
                        />
                        SignUp
                      </Link>
                    )}
                    {/* Render logout button */}
                    {userData.length !== 0 && (
                      <button
                        className={styles.link}
                        onClick={handleLogOut}
                        style={{ border: "none", backgroundColor: "transparent" }}
                      >
                        {" "}
                        <img
                          src="./images/logout.png"
                          alt=""
                          className={styles.icons}
                          style={{ marginRight: "3px" }}
                        />
                        LogOut
                      </button>
                    )}
                  </div>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      {/* Render outlet */}
      <Outlet />
    </>
  );
}

export default Header;
