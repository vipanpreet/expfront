import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { confirmUser } from "../../redux/auth/auth.actions";
import { useRouter } from "next/router";

export default function Confirm(props) {
  const router = useRouter();

  const dispatch = useDispatch();
  const { token } = router.query;

  const auth = useSelector((state) => state.auth);
  const { error, message } = auth;
  useEffect(() => {
    if (token) {
      dispatch(confirmUser(token));
      if (message) {
        router.push({
          pathname: "/login",
          query: { returning: "true" },
        });
      }
    }
  }, [error, message, token]);

  return (
    <>
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
            <div className="para">{message && message}</div>
          </div>
        </div>
      </main>
    </>
  );
}
