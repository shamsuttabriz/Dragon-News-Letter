import { Link } from "react-router-dom";
import user from "../assets/user.png";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <div></div>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
      </div>
      <div className="flex items-center gap-4">
        <img src={user} alt="" />
        <button className="rounded w-28 h-10 text-white bg-gray-800 hover:bg-gray-600 duration-200">
          Login
        </button>
      </div>
    </div>
  );
}
