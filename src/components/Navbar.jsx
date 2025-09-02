import { Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import img1 from "../assets/React-Logo.webp";

const Navbar = () => {
  return (
    <div className="max-h-20 p-2 flex justify-between">
      <div className="">
        <img src={img1} alt="React logo" className="h-15 max-w-15" />
      </div>
      <div className="w-100 max-h-20 text-xl font-semibold flex justify-between items-center">
        <Link to='/'>Home</Link>
        <Link to='/aboutus'>About Us</Link>
      </div>
      <div className="w-45 max-h-20 pr-2 text-xl font-semibold flex justify-between items-center">
        <Link to="/cart"><IoMdCart size={'35'}/></Link>
        <Link to="/profile">Login/Signup</Link>
      </div>
    </div>
  );
};

export default Navbar;
