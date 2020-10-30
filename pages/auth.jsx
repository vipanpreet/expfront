import Navbar from "../components/ReusableComponents/nav-bar/Navbar.components";
import SigninSignup from "../components/SigninSignupPage/signin-signup-wrapper/SigninSignup.components";

const Auth = () => {
  return (
    <div>
      <Navbar />
      <main>
        <SigninSignup />
      </main>
    </div>
  );
};

export default Auth;
