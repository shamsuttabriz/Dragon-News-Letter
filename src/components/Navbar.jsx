import { useContext } from "react";
import { Link } from "react-router-dom";
import profileUser from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

export default function Navbar() {
  const { user, userLogOut } = useContext(AuthContext);
  return (
    <div className="flex justify-between items-center">
      <div>
        {user ? (
          <Link className="font-medium">{user.email}</Link>
        ) : (
          <p>Please First Signin</p>
        )}
      </div>
      <div className="space-x-6 *:font-medium">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
      </div>
      <div className="flex items-center gap-4">
        <img className="rounded-full" src={profileUser} alt="" />
        {user && user?.email ? (
          <button
            onClick={userLogOut}
            className="rounded btn w-28 h-10 text-gray-300 bg-gray-700 hover:bg-gray-800 duration-200"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="rounded btn w-28 h-10 text-gray-300 bg-gray-700 hover:bg-gray-800 duration-200"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
