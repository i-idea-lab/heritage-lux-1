import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShoppingBag from './pages/ShoppingBag';
import ShippingDetails from './pages/ShippingDetails';
import PaymentGateway from './pages/PaymentGateway';
import OrderSuccess from './pages/OrderSuccess';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShoppingBag />} />
        <Route path="/checkout/shipping" element={<ShippingDetails />} />
        <Route path="/checkout/payment" element={<PaymentGateway />} />
        <Route path="/order-success" element={<OrderSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;
