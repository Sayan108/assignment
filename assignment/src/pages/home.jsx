import React, { useState, useEffect } from "react"; // Importing React library and hooks for managing state and side effects
import { Container, Row, Col, Button, Image } from "react-bootstrap"; // Importing necessary components from react-bootstrap for layout and styling
import { Link } from "react-router-dom"; // Importing Link from react-router-dom for client-side navigation

// Home component definition
const Home = () => {
  const [products, setProducts] = useState([]); // State to store the products

  // Fetch products from Fake Store API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=3"
        ); // Fetching data from the API
        const data = await response.json(); // Parsing JSON response
        setProducts(data); // Updating the state with the fetched products
      } catch (error) {
        console.error("Error fetching products:", error); // Handling any errors
      }
    };

    fetchProducts(); // Calling the function to fetch products
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <Container>
      {/* Main welcome message */}
      <Row className="my-5 text-center">
        <Col>
          <h1>Welcome to our E-Commerce Site</h1>
          <p>
            Discover the latest trends in fashion and enjoy great deals on our
            products.
          </p>
        </Col>
      </Row>

      {/* Promotional section with images */}
      <Row className="my-5">
        <Col md={6} className="text-center">
          {/* Using a high-quality image for the latest collection */}
          <Image
            src={"/assets/homePageOne.webp"}
            rounded
            fluid
            height={"300px"}
            width={"400px"}
          />
          <h3 className="my-3">Latest Collection</h3>
          <p>
            Explore our new arrivals and find your perfect style for this
            season.
          </p>
          {/* Button to navigate to the products page */}
          <Button variant="primary" as={Link} to="/products">
            Shop Now
          </Button>
        </Col>
        <Col md={6} className="text-center">
          {/* Using a high-quality image for exclusive offers */}
          <Image
            src="/assets/homePageOne.jpg"
            rounded
            fluid
            height={"300px"}
            width={"400px"}
          />
          <h3 className="my-3">Exclusive Offers</h3>
          <p>
            Don't miss out on our exclusive deals and discounts. Limited time
            only!
          </p>
          {/* Button to navigate to the products page */}
          <Button variant="primary" as={Link} to="/products">
            Browse Deals
          </Button>
        </Col>
      </Row>

      {/* Featured products section */}
      <Row className="my-5">
        <Col className="text-center">
          <h2>Featured Products</h2>
          <p>Hand-picked selections just for you.</p>
        </Col>
      </Row>
      <Row>
        {/* Mapping through the products state to display each product */}
        {products.map((product) => (
          <Col md={4} className="text-center" key={product.id}>
            <Image
              src={product.image}
              height={"300px"}
              width={"400px"}
              rounded
              fluid
            />{" "}
            {/* Product image */}
            <h4 className="my-3">{product.title}</h4> {/* Product title */}
            <p>${product.price.toFixed(2)}</p> {/* Product price */}
            {/* Button to navigate to the product details page */}
            <Button variant="secondary" as={Link} to={`/product/${product.id}`}>
              View Details
            </Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home; // Exporting Home component as the default export so it can be imported and used in other files
