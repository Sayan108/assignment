import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Image, Button, Form } from "react-bootstrap";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Getting the product ID from the URL parameters
  const [product, setProduct] = useState(null); // State to store the product details
  const [count, setCount] = useState(1); // State to store the item count

  // Function to handle adding the product to the cart
  const handleAddToCart = () => {
    // Get the cart list from localStorage
    let carts = JSON.parse(localStorage.getItem("cartList")) || [];

    // Check if carts is an array, if not, initialize it as an array
    if (Array.isArray(carts)) {
      // Add the new product with the count to the beginning of the array
      carts.unshift({ ...product, quantity: count });

      // Save the updated cart list back to localStorage
      localStorage.setItem("cartList", JSON.stringify(carts));
    } else {
      // If carts is not an array, initialize it with the new product and count
      localStorage.setItem(
        "cartList",
        JSON.stringify([{ ...product, quantity: count }])
      );
    }

    navigate("/cart");
  };

  // Fetch the product details from the API when the component mounts or the ID changes
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data); // Updating the state with the fetched product details
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the product details!",
          error
        );
      });
  }, [id]);

  // Handle the increase of item count
  const handleIncrease = () => {
    setCount(count + 1);
  };

  // Handle the decrease of item count, ensuring it doesn't go below 1
  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  // Display a loading message if the product is not yet fetched
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="my-4">
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.title} fluid />
        </Col>
        <Col md={6}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h4 className="text-muted">${product.price}</h4>

          {/* Counter for item count */}
          <Form className="my-3">
            <Form.Group>
              <Form.Label>Quantity</Form.Label>
              <div className="d-flex align-items-center">
                <Button
                  variant="outline-secondary"
                  onClick={handleDecrease}
                  className="me-2"
                >
                  -
                </Button>
                <Form.Control
                  type="text"
                  value={count}
                  readOnly
                  className="text-center"
                  style={{ width: "60px" }}
                />
                <Button
                  variant="outline-secondary"
                  onClick={handleIncrease}
                  className="ms-2"
                >
                  +
                </Button>
              </div>
            </Form.Group>
          </Form>

          <h4 className="text-muted">
            Total: ${(product.price * count).toFixed(2)}
          </h4>
          <Button onClick={handleAddToCart} variant="primary">
            Add to Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
