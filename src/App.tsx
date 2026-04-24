import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ShoppingBag from './pages/ShoppingBag';
import ShippingDetails from './pages/ShippingDetails';
import PaymentGateway from './pages/PaymentGateway';
import OrderSuccess from './pages/OrderSuccess';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/cart" element={<ShoppingBag />} />
          <Route path="/checkout/shipping" element={<ShippingDetails />} />
          <Route path="/checkout/payment" element={<PaymentGateway />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          {/* Fallback for other routes */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
