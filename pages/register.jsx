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
          <div className="register--form">
            <Signupform />
          </div>
        </div>
      </main>
    </>
  );
}
