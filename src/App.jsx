import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";
import { CartProvider } from "./context/CartContext";
import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <>
      <div className="min-h-[100vh] flex flex-col">
        <CartProvider>
          <Navbar />
          <main className="grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/aboutus" element={<AboutUs />}/>
            </Routes>
          </main>
          <ContactUs />
        </CartProvider>
      </div>
    </>
  );
}

export default App;
