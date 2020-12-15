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
      <div className="title mt-2">Login to your Account</div>
      {error && <h1>{error}</h1>}
      <form>
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

        <div className="input-group">
          <input
            className="input"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label className="label">Password</label>
        </div>
        <div className="mt-4">
          <a
            href="#"
            className="btn btn--primary-simple btn-block-mobile mr-2"
            onClick={submitHandler}
          >
            login to account
          </a>
          <a href="#" className="btn btn--font btn-block-mobile  mr-2">
            Forgot
          </a>
          <Link href="/register">
            <div style={{ cursor: "pointer" }} className="subheading">
              Not Registered?
            </div>
          </Link>
        </div>
      </form>
    </>
  );
};

export default SigninForm;
