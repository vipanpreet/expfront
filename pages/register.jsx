import Signupform from "../components/SigninSignupPage/signup-form/Signupform.components";
import Head from "next/head";

export default function Register(props) {
  return (
    <>
      <Head>
        <title>abc</title>
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
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
            <Signupform />
          </div>
        </div>
      </main>
    </>
  );
}
