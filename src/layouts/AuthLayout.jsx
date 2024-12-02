import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function AuthLayout() {
  return (
    <div className="bg-[#F0F0F0]">
      <header className="py-6 w-11/12 mx-auto">
        <Navbar />
      </header>
      <Outlet />
    </div>
  );
}
