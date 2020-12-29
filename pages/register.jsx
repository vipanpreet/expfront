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
        <div class="auth">
          <div class="auth__bg">
            <div class="auth__bg--container">
              <h4>JOIN THE TEAM</h4>
              <h1>Howdy User</h1>
              <div class="para text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                ratione amet distinctio sit error quam harum perferendis atque
                quae autem assumenda modi facere, commodi incidunt dolores
                dolorem reiciendis! Voluptatum, maiores!
              </div>
            </div>
          </div>
          <Signupform />
        </div>
      </main>
    </>
  );
}
