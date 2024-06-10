import React from "react"; // Importing React library to use React components
import { Container, Row, Col } from "react-bootstrap"; // Importing layout components from react-bootstrap

// Footer component definition
const Footer = () => {
  return (
    // Footer element with background color, text color, margin-top, padding, and centered text styles
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <Container>
        {/* Bootstrap Container to keep the content centered and responsive */}
        <Row>
          {/* Bootstrap Row for layout */}

          {/* First Column: About Us section */}
          <Col md="4">
            <h5>About Us</h5> {/* Header for About Us */}
            <p>
              E-Commerce is your one-stop shop for all things fashion. From the
              latest trends to timeless classics, we have it all.
            </p>{" "}
            {/* Description about the company */}
          </Col>

          {/* Second Column: Contact Us section */}
          <Col md="4">
            <h5>Contact Us</h5> {/* Header for Contact Us */}
            <p>Email: support@ecommerce.com</p> {/* Contact email */}
            <p>Phone: +1 234 567 890</p> {/* Contact phone number */}
          </Col>

          {/* Third Column: Follow Us section with social media links */}
          <Col md="4">
            <h5>Follow Us</h5> {/* Header for Follow Us */}
            <p>
              <a href="#" className="text-white">
                Facebook
              </a>{" "}
              {/* Link to Facebook */}
            </p>
            <p>
              <a href="#" className="text-white">
                Twitter
              </a>{" "}
              {/* Link to Twitter */}
            </p>
            <p>
              <a href="#" className="text-white">
                Instagram
              </a>{" "}
              {/* Link to Instagram */}
            </p>
          </Col>
        </Row>

        {/* Another Row for copyright information */}
        <Row className="mt-3">
          <Col md="12">
            <p>
              &copy; {new Date().getFullYear()} E-Commerce. All Rights Reserved.
            </p>{" "}
            {/* Displaying current year dynamically and copyright information */}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer; // Exporting Footer component as the default export so it can be imported and used in other files
