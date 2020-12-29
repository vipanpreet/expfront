import { login } from "../../../redux/auth/auth.actions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";
import Link from "next/link";

// validator
import validateLogin from "../../../utils/validateLogin";

const SigninForm = ({ optMessage }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const { error, userInfo } = auth;

  // checking if the object is not empty
  if (Object.keys(userInfo).length !== 0 && userInfo.constructor === Object) {
    Router.push("/");
  }
  useEffect(() => {
    if (
      Object.keys(errors).length === 0 &&
      errors.constructor === Object &&
      isSubmitting
    ) {
      dispatch(login(values.email, values.password));
    } else {
      setIsSubmitting(false);
    }
  }, [errors]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setErrors(validateLogin(values));
    setIsSubmitting(true);
  };
  return (
    <>
      <div class="auth__form">
        <div class="auth__form--container">
          <h4>Login Account</h4>

          <p>
            {optMessage
              ? `Use newly created account credentials to login into your fresh account`
              : `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            exercitationem tempora quaerat reprehenderit et nesciunt ipsam
            cupiditate.`}
          </p>
          <form onSubmit={submitHandler} class="mt-2">
            {error && <p className="text-warn text-left">{error}</p>}
            <div class="form-group">
              <input
                // type="email"
                placeholder="Email ID"
                class="auth-input"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-warn text-left">{errors.email}</p>
              )}
            </div>
            <div class="form-group">
              <input
                type="password"
                placeholder="Password"
                class="auth-input"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && (
                <p className="text-warn text-left">{errors.password}</p>
              )}
            </div>
            <div class="d-flex justify-content-between">
              <div class="checkbox-group">
                <input type="checkbox" id="css" />
                <label for="css">Keep me signed in</label>
              </div>
              <div>
                <Link href="/forgot" as="/forgot">
                  <a href="#" class="text-primary btn--text">
                    Forgot password?
                  </a>
                </Link>
              </div>
            </div>
            <div class="mt-2">
              <button type="submit" class="btn btn--primary btn--simple border">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SigninForm;
