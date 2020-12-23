import { useState } from "react";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../redux/auth/auth.actions";
import Alert from "../../Layout/Alert/Alert.module";

const SignupForm = () => {
  const [passmatch, setPassmatch] = useState("");

  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const authReducerState = useSelector((state) => state.auth);
  const { loading, error, message } = authReducerState;

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPassmatch("Passwords Does not match");
    } else {
      dispatch(register(email, firstname, lastname, password));
    }
  };

  return (
    <>
      {loading && <h4>loading</h4>}

      {error && <h2>{error}</h2>}
      {passmatch && { passmatch }}
      {message ? (
        <>
          <div className="title">Email Sent</div>
          <div className="para mt-2">{message}</div>
          <div className="subheading">{`Your Email: ${email}`}</div>
        </>
      ) : (
        <>
          <div className="title mt-2">Create a new Account</div>
          <form onSubmit={submitHandler}>
            <div className="input-group">
              <input
                className="input"
                type="text"
                value={email}
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
                type="text"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                required
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label className="label">First name</label>
            </div>

            <div className="input-group">
              <input
                className="input"
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                required
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label className="label">Last name</label>
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
            <div className="input-group">
              <input
                className="input"
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label className="label">Confirm Password</label>
            </div>
            <div className="form-group">
              <input className="d-inline" type="checkbox" name="terms" id="" />
              <p className="d-inline para">
                Creating an account with gives you full access and means you are
                accepting our
                <a className="text-primary" href="#">
                  Terms & conditions.
                </a>
              </p>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="btn btn--primary  btn-block-mobile mr-2"
              >
                Register Account
              </button>
              <Link href="forgot">
                <button
                  type="button"
                  className="btn btn--font btn-block-mobile"
                >
                  Forgot?
                </button>
              </Link>
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default SignupForm;
