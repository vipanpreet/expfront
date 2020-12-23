import Head from "next/head";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgot } from "../redux/auth/auth.actions";

export default function Forgot() {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { forgotmessage, error } = auth;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(forgot(email));
  };
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
            {error && <h2>{error}</h2>}

            {forgotmessage ? (
              <h1 className="title text-center">{forgotmessage}</h1>
            ) : (
              <>
                <div className="title mt-2">Fogot Password</div>
                <form onSubmit={submitHandler}>
                  <div className="input-group">
                    <input
                      className="input"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label className="label">Email Address</label>
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      href="#"
                      className="btn btn--primary btn-block-mobile mr-2"
                    >
                      Send Reset link
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
