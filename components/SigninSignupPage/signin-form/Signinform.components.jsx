import Link from "next/link";

import { login } from "../../../redux/login/login.actions";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";

const SigninForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const loginReducerState = useSelector((state) => state.login);
  const { error, userInfo } = loginReducerState;

  // checking if the object is not empty
  if (Object.keys(userInfo).length !== 0 && userInfo.constructor === Object) {
    Router.push("/");
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <>
      <div className="title">Login to your Account</div>
      {error && <h1>{error}</h1>}
      <form>
        <div class="input-group">
          <input
            class="input"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label class="label">Email Address</label>
        </div>

        <div class="input-group">
          <input
            class="input"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label class="label">Password</label>
        </div>
        <div className="mt-4">
          <a
            href="#"
            className="btn btn--primary-simple mr-2"
            onClick={submitHandler}
          >
            login to account
          </a>
          <a href="#" className="btn btn--font mr-2">
            Forgot
          </a>
          <Link className="text-font subheading" href="/register">
            Not Registered ?
          </Link>
        </div>
      </form>
    </>
  );
};

export default SigninForm;
