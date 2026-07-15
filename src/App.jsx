import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import BookingService from "./pages/BookingService";
import ProductPayment from "./pages/ProductPayment";
import ServicePayment from "./pages/ServicePayment";
import BookingSuccess from "./pages/BookingSuccess";
import TrackRepair from "./pages/TrackRepair";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProtectedRoute from "./components/ProtectedRoute";
import OrderSuccess from "./pages/OrderSuccess";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/book-service" element={<BookingService />} />
       <Route path="/product-payment" element={<ProductPayment />} />

<Route path="/service-payment" element={<ServicePayment />} />   
        <Route path="/booking-success" element={<BookingSuccess />} />
        <Route
          path="/track-repair"
          element={
            <ProtectedRoute>
              <TrackRepair />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;