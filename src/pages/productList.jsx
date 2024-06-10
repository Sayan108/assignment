import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Container, Row, Col, Button, Dropdown } from "react-bootstrap";
import { Link, useNavigate, useNavigation } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the products!", error);
      });

    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the categories!", error);
      });
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    const url =
      category === "all"
        ? "https://fakestoreapi.com/products"
        : `https://fakestoreapi.com/products/category/${category}`;
    axios
      .get(url)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the products by category!",
          error
        );
      });
  };

  return (
    <Container className="my-4">
      <Row className="mb-4">
        <Col>
          <Dropdown onSelect={handleCategoryChange}>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              {selectedCategory === "all" ? "All Categories" : selectedCategory}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="all">All Categories</Dropdown.Item>
              {categories.map((category, index) => (
                <Dropdown.Item key={index} eventKey={category}>
                  {category}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
            <Card className="h-100">
              <Card.Img
                variant="top"
                onClick={() => {
                  navigate("/product/" + product.id);
                }}
                src={product.image}
                alt={product.title}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-truncate">
                  {product.title}
                </Card.Title>
                <Card.Text className="text-truncate">
                  {product.description}
                </Card.Text>
                <Card.Text className="mt-auto text-muted">
                  ${product.price}
                </Card.Text>
                <Button
                  as={Link}
                  to={`/product/${product.id}`}
                  variant="primary"
                  className="mt-auto"
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
