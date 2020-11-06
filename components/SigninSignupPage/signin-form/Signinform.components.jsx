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
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="text"
            className="input"
            placeholder="Enter your email address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="input"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <a href="#" className="btn btn--primary mr-2" onClick={submitHandler}>
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
