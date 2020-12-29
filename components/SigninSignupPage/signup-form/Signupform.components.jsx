import { useState, useEffect } from "react";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../redux/auth/auth.actions";

// validate
import validateRegister from "../../../utils/validateRegister";

const SignupForm = (props) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const dispatch = useDispatch();
  const authReducerState = useSelector((state) => state.auth);
  const { loading, error, message } = authReducerState;

  useEffect(() => {
    if (
      Object.keys(errors).length === 0 &&
      errors.constructor === Object &&
      isSubmitting
    ) {
      dispatch(
        register(
          values.email,
          values.firstName,
          values.lastName,
          values.password
        )
      );
      window.scrollTo({ top: 0, behavior: "smooth" });
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
    setErrors(validateRegister(values));
    setIsSubmitting(true);
  };

  return (
    <>
      {loading && <h4>loading</h4>}
      {error && <h2>{error}</h2>}
      {message ? (
        <>
          <div class="auth__form">
            <div class="auth__form--container">
              <div className="title">Email Sent</div>
              <div className="para mt-2">{message}</div>
              <div className="subheading">{`Your Email: ${values.email}`}</div>
              <Link href="/">
                <button className="btn btn--primary btn--simple">
                  Go Home
                </button>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <div class="auth__form pt">
            <div class="auth__form--container">
              <h4>Create an Account</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deserunt, exercitationem tempora quaerat reprehenderit et
                nesciunt ipsam cupiditate.
              </p>
              <form onSubmit={submitHandler} class="mt-3">
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Firstname"
                    class="auth-input"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && (
                    <p className="text-warn text-left">{errors.firstName}</p>
                  )}
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Lastname"
                    class="auth-input"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && (
                    <p className="text-warn text-left">{errors.lastName}</p>
                  )}
                </div>
                <div class="form-group">
                  <input
                    type="email"
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
                <div class="form-group">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    class="auth-input"
                    name="password2"
                    value={values.password2}
                    onChange={handleChange}
                  />
                  {errors.password2 && (
                    <p className="text-warn text-left">{errors.password2}</p>
                  )}
                </div>
                <div class="d-flex justify-content-between">
                  <div class="checkbox-group">
                    <input type="checkbox" id="css" />
                    <label for="css">
                      <a href="#">Terms & conditions</a>
                    </label>
                  </div>
                  <div>
                    <Link href="/register" as="/register">
                      <a href="#" class="text-primary btn--text">
                        Already a Member?
                      </a>
                    </Link>
                  </div>
                </div>
                <div class="mt-2">
                  <button type="submit" class="btn btn--primary btn--simple">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SignupForm;
