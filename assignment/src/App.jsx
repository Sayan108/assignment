import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import ProductList from "./pages/productList";
import ProductDetail from "./pages/productDetails";
import Cart from "./pages/cart";
import Login from "./pages/login";

const App = () => {
  return (
    <div>
      <Header />
      <main className="container mt-5"></main>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
