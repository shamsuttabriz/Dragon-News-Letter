import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

export default function Register() {
  const { createNewUser, setUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // get form data
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log({ name, photo, email, password });

    createNewUser(email, password)
      .then((res) => {
        const user = res.user;
        setUser(user);
      })
      .catch((error) => {
        console.log("Error: ", error.message);
      });
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded p-10">
        <h2 className="text-xl font-bold text-center">Register your account</h2>
        <form onSubmit={handleSubmit} className="card-body">
          {/* Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700 font-semibold">
                Your Name
              </span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered bg-[#F3F3F3] rounded-none"
              required
            />
          </div>
          {/* Photo URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700 font-semibold">
                Photo URL
              </span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your url link"
              className="input input-bordered bg-[#F3F3F3] rounded-none"
              required
            />
          </div>
          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700 font-semibold">
                Email address
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input input-bordered bg-[#F3F3F3] rounded-none"
              required
            />
          </div>
          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700 font-semibold">
                Password
              </span>
            </label>
            <input
              type="password"
              name="password"
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
            <button className="btn btn-neutral rounded-sm">Register</button>
          </div>
        </form>
        <p className="text-center font-medium text-gray-500">
          Already Have An Account ?{" "}
          <Link className="text-red-600" to="/auth/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
