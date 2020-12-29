import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../redux/auth/auth.actions";
import { useRouter } from "next/router";

// validate
import validateReset from "../../utils/validateReset";

export default function Reset() {
  const [values, setValues] = useState({
    password: "",
    password2: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();
  const auth = useSelector((state) => state.auth);
  const { message, error } = auth;

  const dispatch = useDispatch();
  const { token } = router.query;

  useEffect(() => {
    if (
      Object.keys(errors).length === 0 &&
      errors.constructor === Object &&
      isSubmitting
    ) {
      setIsSubmitting(false);
      dispatch(reset(token, values.password));
    } else if (message) {
      router.push("/login");
    }
  }, [errors, message]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setErrors(validateReset(values));
    setIsSubmitting(true);
  };

  return (
    <>
      <main>
        <div class="auth">
          <div class="auth__bg">
            <div class="auth__bg--container">
              <h4>RESET YOUR PASSWORD</h4>
              <h1>secure the account</h1>
              <div class="para text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                ratione amet distinctio sit error quam harum perferendis atque
                quae autem assumenda modi facere, commodi incidunt dolores
                dolorem reiciendis! Voluptatum, maiores!
              </div>
            </div>
          </div>
          <div class="auth__form">
            <div class="auth__form--container">
              <h4>Enter New Password</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deserunt, exercitationem tempora quaerat reprehenderit et
                nesciunt ipsam cupiditate.
              </p>
              {error && error}
              {message && message}
              <form onSubmit={submitHandler} class="mt-3">
                <div class="form-group">
                  <input
                    type="password"
                    placeholder="New Password"
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

                <div class="mt-2">
                  <button
                    type="submit"
                    class="btn btn--primary btn--simple border"
                  >
                    change password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
