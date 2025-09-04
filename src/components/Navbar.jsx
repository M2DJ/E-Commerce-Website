import { Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import img1 from "../assets/React-Logo.webp";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const logged = isLoggedIn();

  return (
    <div className="max-h-20 p-2 flex justify-between">
      <div className="">
        <img src={img1} alt="React logo" className="h-15 max-w-15" />
      </div>
      <div className="w-100 max-h-20 text-xl font-semibold flex justify-between items-center">
        <Link to='/'>Home</Link>
        <Link to='/aboutus'>About Us</Link>
      </div>
      <div className="w-50 max-h-20 pr-2 text-xl font-semibold flex justify-between items-center">
        <Link to="/cart"><IoMdCart size={'35'}/></Link>
        {logged ? <Link to="/profile"><FaUser size={'27'} /></Link> : <Link to="/login">Login/Sign-up</Link>}
      </div>
    </div>
  );
};

export default Navbar;
