import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import ProductList from "./pages/productList";
import ProductDetail from "./pages/productDetails";
import Cart from "./pages/cart";
import Login from "./pages/login";
import OrderList from "./pages/orderList";
import OrderDetail from "./pages/orderDetails";

const PrivateRoute = ({ element: Element }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated"); // Get the isAuthenticated value from localStorage
  return isAuthenticated === "1" ? (
    <Element />
  ) : (
    <Navigate to="/login" replace />
  );
};

// Custom PrivateRoute component to handle protected routes

// Main App component
const App = () => {
  return (
    <div>
      {/* Header component */}
      <Header />

      {/* Main content area */}
      <main className="container mt-5">
        {/* Routes */}
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          {/* Protected routes */}
          <Route path="/cart" element={<PrivateRoute element={Cart} />} />
          <Route
            path="/orders"
            element={<PrivateRoute element={OrderList} />}
          />
          <Route
            path="/order/:id"
            element={<PrivateRoute element={OrderDetail} />}
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default App;
