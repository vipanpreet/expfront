import Signupform from "../components/SigninSignupPage/signup-form/Signupform.components";

export default function Register(props) {
  return (
    <>
      <main>
        <div className="register">
          <div className="register--banner">
            <div className="register--banner__container">
              <h1 className="subtitle text-upper __600 text-white">
                Arktastic
              </h1>
            </div>
          </div>
          <div className="register--form">
            <Signupform />
          </div>
        </div>
      </main>
    </>
  );
}
