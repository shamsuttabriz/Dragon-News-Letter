import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function FindUs() {
  return (
    <div>
      <h2 className="font-semibold mb-3">Find Us On</h2>
      <div className="join flex join-vertical *:font-normal *:bg-white *:rounded-xs rounded-sm">
        <button className="btn join-item justify-start">
          <FaFacebook className="text-blue-700" />
          Facebook
        </button>
        <button className="btn join-item justify-start">
          <FaTwitter className="text-cyan-600" />
          Twitter
        </button>
        <button className="btn join-item justify-start">
          <FaInstagram className="text-red-600" />
          Instagram
        </button>
      </div>
    </div>
  );
}
