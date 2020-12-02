import Signinform from "../components/SigninSignupPage/signin-form/Signinform.components";
import Head from "next/head";

export default function Login(props) {
  return (
    <>
      <Head>
        <title>abc</title>
        <meta
          name="viewport"
          content="width=device-width, minimum-slace=1.0, maximum-scal=1.0, user-scaleble=no"
        />
      </Head>
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
