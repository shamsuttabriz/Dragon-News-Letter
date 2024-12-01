import FindUs from "../FindUs";
import SocialLogin from "../SocialLogin";

export default function RightNavbar() {
  return (
    <div className="space-y-5">
      <SocialLogin />
      <FindUs />
    </div>
  );
}
