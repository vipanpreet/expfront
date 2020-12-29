import Signinform from "../components/SigninSignupPage/signin-form/Signinform.components";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Login(props) {
  const router = useRouter();
  var { returning } = router.query;

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
              <h4>NICE TO SEE YOU AGAIN</h4>
              <h1>welcome back</h1>
              <div class="para text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                ratione amet distinctio sit error quam harum perferendis atque
                quae autem assumenda modi facere, commodi incidunt dolores
                dolorem reiciendis! Voluptatum, maiores!
              </div>
            </div>
          </div>
          <Signinform optMessage={returning ? returning : null} />
        </div>
      </main>
    </>
  );
}
