import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../redux/auth/auth.actions";
import { useRouter } from "next/router";

export default function Reset() {
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [msg, setMsg] = useState("");

  const router = useRouter();
  const auth = useSelector((state) => state.auth);
  const { message, error } = auth;

  const dispatch = useDispatch();
  const { token } = router.query;

  useEffect(() => {
    setTimeout(function () {
      setMsg("");
      if (message) {
        router.push("/login");
      }
    }, 2000);
  }, [msg, message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== cPassword) {
      setMsg("Passwords must match");
    } else {
      dispatch(reset(token, password));
    }
  };

  return (
    <>
      <main>
        <div className="register">
          <div className="register--form">
            <div className="title mt-2">Create new password</div>
            {msg && msg}
            {error && error}
            <form onSubmit={handleSubmit}>
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
                  onChange={(e) => setCPassword(e.target.value)}
                  required
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label className="label">Confirm Password</label>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  href="#"
                  className="btn btn--primary btn-block-mobile mr-2"
                >
                  Change Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
