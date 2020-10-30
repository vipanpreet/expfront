import Signinform from "../signin-form/Signinform.components";
import Signupform from "../signup-form/Signupform.components";

const SigninSignup = () => {
  return (
    <div className="container-large mt-4">
      <div className="row">
        <Signupform />
        <Signinform />
      </div>
    </div>
  );
};

export default SigninSignup;
