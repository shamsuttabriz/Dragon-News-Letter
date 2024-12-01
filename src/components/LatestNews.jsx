import Marquee from "react-fast-marquee";

export default function LatestNews() {
  return (
    <div className="flex bg-slate-200 px-3 py-2 rounded gap-3">
      <p className="bg-[#D72050] px-3 py-2 text-slate-100 font-medium rounded">
        Latest
      </p>
      <Marquee pauseOnHover={true} speed={80} className="space-x-10">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere eos
          voluptatibus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          exercitationem.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere eos
          voluptatibus accusantium.
        </p>
      </Marquee>
    </div>
  );
}
