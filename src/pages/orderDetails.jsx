import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const OrderDetail = () => {
  const { id } = useParams(); // Get the order ID from the URL
  const [order, setOrder] = useState(null); // State to store the order details

  // Fetch the specific order from localStorage when the component mounts
  useEffect(() => {
    const storedOrders = localStorage.getItem("orders");
    if (storedOrders) {
      const orders = JSON.parse(storedOrders);
      const foundOrder = orders.find((order) => order.id === parseInt(id));
      console.log(foundOrder);
      setOrder(foundOrder);
    }
  }, [id]);

  if (!order) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Order Details</h1>
      <h2>Order #{order.id}</h2>
      <ul>
        {order.items.map((item) => (
          <li key={item.id} style={{ listStyleType: "none", margin: "20px 0" }}>
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
            <h2>{item.title}</h2>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price.toFixed(2)}</p>
            <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
          </li>
        ))}
      </ul>
      <h3>Total Price: ${order.total}</h3>
    </div>
  );
};

export default OrderDetail;
