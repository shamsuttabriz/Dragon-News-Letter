import Header from "../components/Header";
import RightNavbar from "../components/layout-components/RightNavbar";
import NewsDetailsContent from "../components/NewsDetailsContent";

export default function NewsDetails() {
  return (
    <div className="mb-16">
      <header>
        <Header />
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-4 mt-4">
        <section className="col-span-9">
          <h1 className="font-medium mb-4">Dragon News</h1>
          <NewsDetailsContent />
        </section>
        <aside className="col-span-3">
          <RightNavbar />
        </aside>
      </main>
    </div>
  );
}
