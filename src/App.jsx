import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";
import { CartProvider } from "./context/CartContext";
import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/pages/ContactUs";

function App() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/aboutus" element={<AboutUs />}/>
          <Route path="contactus" element={<ContactUs />}/>
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
