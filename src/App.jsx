import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";
import { CartProvider } from "./context/CartContext";
import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/ContactUs";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import AuthProvider from "./context/AuthContext";
import Profile from "./components/pages/Profile";

library.add(fas, far, fab);

function App() {
  return (
    <>
      <div className="min-h-[100vh] flex flex-col ">
        <AuthProvider>
          <CartProvider>
            <Navbar />
            <main className="grow-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </main>
            <ContactUs />
          </CartProvider>
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
