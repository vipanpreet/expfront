import { useEffect } from "react";
import Navbar from "../../components/Layout/nav-bar/Navbar.components";
import { useDispatch, useSelector } from "react-redux";
import { confirmUser } from "../../redux/login/login.actions";
import Router from "next/router";

export default function Confirm(props) {
  const { token } = Router.query;
  const dispatch = useDispatch();
  const loginReducerState = useSelector((state) => state.login);
  const { error, message } = loginReducerState;
  useEffect(() => {
    if (token) {
      dispatch(confirmUser(token));
      if (message) {
        Router.push("/login");
      }
    }
  }, [error, message, token]);

  return (
    <>
      <Navbar />
      <main>
        <div className="register">
          <div className="register--banner">
            <div className="register--banner__container">
              <h1 className="subtitle text-upper __600 text-white">
                Arktastic
              </h1>
            </div>
          </div>
          <div className="register--form">
            <div className="para">{error && error}</div>
          </div>
        </div>
      </main>
    </>
  );
}
