import { Link } from "react-router-dom";
import { IoMdCart, IoMdClose } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import img1 from "../assets/React-Logo.webp";
import { useAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const { isLoggedIn } = useAuth();
  const logged = isLoggedIn();

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  
  const handleBurgerMenu = () => {
    setIsMenuClicked((prev) => !prev);
  };


  if (windowWidth >= 320 && windowWidth <= 375) {
    return (
      <div className="max-h-20 p-2 flex justify-between">
        <div className="w-25 relative">
          {isMenuClicked ? (
            <div className="pl-1">
              <button
                className="rotate-90 transition-transform duration-150 absolute z-40"
                onClick={handleBurgerMenu}
              >
                <IoMdClose size={29} color="white" />
              </button>
            </div>
          ) : (
            <div className="pl-1">
              <button
                className="rotate-0 transition-transform duration-150"
                onClick={handleBurgerMenu}
              >
                <RxHamburgerMenu size={29} />
              </button>
            </div>
          )}

          {isMenuClicked && (
            <div className="fixed top-0 inset-0 bg-black/40"></div>
          )}

          <div
            className={`fixed top-0 left-0 h-full w-40 bg-blue-400 transform transition-transform duration-150 ease-linear ${
              isMenuClicked ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex flex-col pt-10 pl-2">
              <div className="">
                <img src={img1} alt="React logo" className="h-20 max-w-20" />
              </div>
              <div className="text-white text-xl mt-2">
                <button onClick={handleBurgerMenu}>
                  {logged ? (
                    <Link to="/profile">
                      <FaUser size={"27"} />
                    </Link>
                  ) : (
                    <Link to="/login">Login/Sign-up</Link>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-screen max-h-20 text-xl font-semibold flex justify-between items-center">
          <Link to="/">Home</Link>
          <Link to="/aboutus">About Us</Link>
          <Link to="/cart">
            <IoMdCart size={"30"} />
          </Link>
        </div>
      </div>
    );
  } else if (windowWidth <= 768) {
    return (
      <div className="max-h-20 p-2 flex justify-between">
        <div className="">
          <img src={img1} alt="React logo" className="h-15 max-w-15" />
        </div>
        <div className="w-50 max-h-20 text-xl font-semibold flex justify-between items-center">
          <Link to="/">Home</Link>
          <Link to="/aboutus">About Us</Link>
        </div>
        <div className="w-50 max-h-20 pr-2 text-xl font-semibold flex justify-between items-center">
          <Link to="/cart">
            <IoMdCart size={"35"} />
          </Link>
          {logged ? (
            <Link to="/profile">
              <FaUser size={"27"} />
            </Link>
          ) : (
            <Link to="/login">Login/Sign-up</Link>
          )}
        </div>
      </div>
    );
  } else if (windowWidth >= 1024 && windowWidth <= 1440) {
    return (
      <div className="max-h-20 p-2 flex justify-between">
        <div className="">
          <img src={img1} alt="React logo" className="h-15 max-w-15" />
        </div>
        <div className="w-100 max-h-20 text-xl font-semibold flex justify-between items-center">
          <Link to="/">Home</Link>
          <Link to="/aboutus">About Us</Link>
        </div>
        <div className="w-50 max-h-20 pr-2 text-xl font-semibold flex justify-between items-center">
          <Link to="/cart">
            <IoMdCart size={"35"} />
          </Link>
          {logged ? (
            <Link to="/profile">
              <FaUser size={"27"} />
            </Link>
          ) : (
            <Link to="/login">Login/Sign-up</Link>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div className="max-h-20 p-2 flex justify-between">
        <div className="">
          <img src={img1} alt="React logo" className="h-25 max-w-25" />
        </div>
        <div className="w-100 max-h-20 text-4xl font-semibold flex justify-between items-center">
          <Link to="/">Home</Link>
          <Link to="/aboutus">About Us</Link>
        </div>
        <div className="w-85 max-h-20 pr-2 text-xl font-semibold flex justify-between items-center">
          <Link to="/cart">
            <IoMdCart size={"65"} />
          </Link>
          {logged ? (
            <Link to="/profile">
              <FaUser size={"65"} />
            </Link>
          ) : (
            <div className="text-4xl">
              <Link to="/login">Login/Sign-up</Link>
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default Navbar;
