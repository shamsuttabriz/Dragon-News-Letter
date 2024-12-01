import moment from "moment";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <div className="flex flex-col justify-center items-center gap-3 py-4">
      <div className="py-2">
        <img src={logo} alt="News Letter" />
      </div>
      <h1 className="text-gray-400 text-lg">
        Journalism without Fear or Favour
      </h1>
      <p className="text-lg">{moment().format("dddd, MMMM Do YYYY")}</p>
    </div>
  );
}
