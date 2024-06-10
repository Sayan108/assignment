import React, { useState, useEffect } from "react"; // Importing React library and hooks for managing state and side effects
import { useNavigate } from "react-router-dom"; // Importing useNavigate for navigation

// Cart component definition
const Cart = () => {
  const [cartItems, setCartItems] = useState([]); // State to store the cart items
  const navigate = useNavigate(); // Hook for navigation

  // Fetch cart items from localStorage when the component mounts
  useEffect(() => {
    // Retrieve the cart items from localStorage
    const storedCartItems = localStorage.getItem("cartList");

    // Check if there are any items in localStorage
    if (storedCartItems) {
      // Parse the JSON string to convert it back into an array of items
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []); // Empty dependency array to run the effect only once on component mount

  // Calculate total price for the items in the cart
  const calculateTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  // Handle checkout functionality
  const handleCheckout = () => {
    // Retrieve the existing orders from localStorage
    const storedOrders = localStorage.getItem("orders");
    const orders = storedOrders ? JSON.parse(storedOrders) : [];

    // Create a new order with a unique ID and the current cart items
    const newOrder = {
      id: Date.now(),
      items: cartItems,
      total: calculateTotalPrice(),
    };

    // Add the new order to the orders array
    orders.push(newOrder);

    // Save the updated orders array back to localStorage
    localStorage.setItem("orders", JSON.stringify(orders));

    // Clear the cart
    localStorage.removeItem("cartList");
    setCartItems([]);

    // Navigate to the order list page
    navigate("/orders");
  };

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {/* Map through the cart items state to display each item */}
        {cartItems.map((item) => (
          <li key={item.id} style={{ listStyleType: "none", margin: "20px 0" }}>
            {/* Display item image */}
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
            {/* Display item name */}
            <h2>{item.title}</h2>
            {/* Display item quantity */}
            <p>Quantity: {item.quantity}</p>
            {/* Display item price */}
            <p>Price: ${item.price.toFixed(2)}</p>
            {/* Display total price for this item */}
            <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
          </li>
        ))}
      </ul>
      {/* Display the total price for all items in the cart */}
      <h3>Total Price: ${calculateTotalPrice()}</h3>
      {/* Button to proceed to checkout */}
      <button className="btn btn-primary" onClick={handleCheckout}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart; // Exporting Cart component as the default export so it can be imported and used in other files
