import { FaGithub, FaGoogle } from "react-icons/fa";

export default function SocialLogin() {
  return (
    <div>
      <h2 className="font-semibold mb-3">Login With</h2>
      <div className="*:w-full *:font-normal space-y-2">
        <button className="btn btn-outline btn-sm text-blue-600 rounded-sm">
          <span className="font-normal">
            <FaGoogle />
          </span>
          Login With Google
        </button>
        <button className="btn btn-outline btn-sm rounded-sm">
          <span className="font-normal">
            <FaGithub />
          </span>
          Login With Github
        </button>
      </div>
    </div>
  );
}
