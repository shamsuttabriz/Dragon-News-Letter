import { Link } from "react-router-dom";
import user from "../assets/user.png";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <div></div>
      <div className="space-x-6 *:font-medium">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
      </div>
      <div className="flex items-center gap-4">
        <img className="rounded-full" src={user} alt="" />
        <Link
          to="/auth/login"
          className="rounded btn w-28 h-10 text-gray-300 bg-gray-700 hover:bg-gray-800 duration-200"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
