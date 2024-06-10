import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const OrderList = () => {
  const [orders, setOrders] = useState([]); // State to store the orders

  // Fetch orders from localStorage when the component mounts
  useEffect(() => {
    const storedOrders = localStorage.getItem("orders");
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }
  }, []);

  return (
    <div>
      <h1>Orders</h1>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <Link to={`/order/${order.id}`}>Order #{order.id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
