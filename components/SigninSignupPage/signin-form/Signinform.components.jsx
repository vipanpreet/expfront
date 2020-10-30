import { login } from "../../../redux/login/login.actions";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Signinform = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <div className="col-lg-6 mt-2">
      <div className="title">Login to your Account</div>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="text"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <a href="#" className="btn btn--font mr-2">
            login to account
          </a>
          <a href="#" className="btn btn--primary">
            Forgot?
          </a>
        </div>
      </form>
    </div>
  );
};

export default Signinform;
