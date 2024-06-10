import React from "react"; // Importing React library to use React components
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap"; // Importing necessary components from react-bootstrap for navigation bar
import { Link } from "react-router-dom"; // Importing Link from react-router-dom for client-side navigation

// Header component definition
const Header = () => {
  /**
   * Nav.Link:
   * - Nav.Link is a component from react-bootstrap that renders a navigation link.
   * - By default, it behaves like a standard anchor (<a>) tag.
   * - When used with `as={Link}`, it leverages the `Link` component from react-router-dom.
   * - This integration allows for client-side navigation without full page reloads.
   * - `to` prop specifies the path to navigate to, ensuring smooth transitions between routes.
   */

  return (
    // Bootstrap Navbar component with dark theme and expanded on large screens
    <Navbar bg="dark" variant="dark" expand="lg">
      {/* Navbar Brand, using Link component for navigation to the home page */}
      <Navbar.Brand as={Link} to="/">
        E-Commerce
      </Navbar.Brand>

      {/* Navbar toggle button for small screens */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      {/* Navbar collapse component to wrap navigation links */}
      <Navbar.Collapse id="basic-navbar-nav">
        {/* Left side of the Navbar */}
        <Nav className="me-auto">
          {/* Link to the home page */}
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          {/* Link to the products page */}
          <Nav.Link as={Link} to="/products">
            Products
          </Nav.Link>
        </Nav>

        {/* Right side of the Navbar */}
        <Nav>
          {/* Link to the cart page */}
          <Nav.Link as={Link} to="/cart">
            Cart
          </Nav.Link>
          {/* Link to the orders page */}
          <Nav.Link as={Link} to="/orders">
            Orders
          </Nav.Link>
          {/* Link to the login page */}
          <Nav.Link as={Link} to="/login">
            Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header; // Exporting Header component as the default export so it can be imported and used in other files
