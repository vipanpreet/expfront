import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";
import { register } from "../../../redux/register/register.actions";
import Alert from "../../Layout/Alert/Alert";

const SignupForm = () => {
  const [passmatch, setPassmatch] = useState("");

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const registerReducerState = useSelector((state) => state.register);
  const { loading, error, message } = registerReducerState;

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      // return <Alert>{"Passwords Does not match"}</Alert>;
      setPassmatch("Passwords Does not match");
    } else {
      dispatch(register(email, username, username, password));
    }
  };
  useEffect(() => {}, [message, error]);

  return (
    <>
      {loading && <h4>loading</h4>}

      {error && <Alert>{error}</Alert>}
      {passmatch && <Alert>{passmatch}</Alert>}
      {message ? (
        <>
          <div className="title">Email Sent</div>
          <div className="para mt-2">{message}</div>
          <div className="subheading">{`Your Email: ${email}`}</div>
        </>
      ) : (
        <>
          <div className="title">Create a new Account</div>
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                className="input"
                name="email"
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                className="input"
                name="username"
                placeholder="Enter your name"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password2">Confirm Password:</label>
              <input
                type="password"
                name="confirmpassword"
                className="input"
                placeholder="Confirm password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
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
              <button className="btn btn--primary mr-2">
                Register Account
              </button>
              <a href="#" className="btn btn--font">
                Forgot?
              </a>
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default SignupForm;
