import Header from "../components/Header";
import RightNavbar from "../components/layout-components/RightNavbar";

export default function NewsDetails() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12">
        <section className="col-span-9">main details content</section>
        <aside className="col-span-3">
          <RightNavbar />
        </aside>
      </main>
    </div>
  );
}
