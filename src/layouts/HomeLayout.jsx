import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layout-components/LeftNavbar";
import RightNavbar from "../components/layout-components/RightNavbar";
import Navbar from "../components/Navbar";

export default function HomeLayout() {
  return (
    <div>
      <header>
        <Header />
        <section className="w-full lg:w-11/12 mx-auto">
          <LatestNews />
        </section>
        <nav className="w-full lg:w-11/12 mx-auto my-4 py-4">
          <Navbar />
        </nav>
      </header>
      <main className="w-full lg:w-11/12 mx-auto grid grid-cols-12 gap-4">
        <aside className="col-span-3">
          <LeftNavbar />
        </aside>
        <section className="col-span-6">
          <Outlet />
        </section>
        <aside className="col-span-3">
          <RightNavbar />
        </aside>
      </main>
    </div>
  );
}
