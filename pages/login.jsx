import Signinform from "../components/SigninSignupPage/signin-form/Signinform.components";

export default function Login(props) {
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
            <Signinform />
          </div>
        </div>
      </main>
    </>
  );
}
