import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded p-10">
        <h2 className="text-xl font-bold text-center">Login your account</h2>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700 font-semibold">
                Email address
              </span>
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="input input-bordered bg-[#F3F3F3] rounded-none"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700 font-semibold">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered bg-[#F3F3F3] rounded-none"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-sm">Login</button>
          </div>
        </form>
        <p className="text-center font-medium text-gray-500">
          Don&apos;t Have An Account ?{" "}
          <Link className="text-red-600" to="auth/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}