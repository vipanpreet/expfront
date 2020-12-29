import Head from "next/head";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgot } from "../redux/auth/auth.actions";
// validate
import validateForgot from "../utils/validateForgot";

export default function Forgot() {
  const [values, setValues] = useState({
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { forgotmessage, error } = auth;

  useEffect(() => {
    if (
      Object.keys(errors).length === 0 &&
      errors.constructor === Object &&
      isSubmitting
    ) {
      dispatch(forgot(values.email));
      setValues({});
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
    setErrors(validateForgot(values));
    setIsSubmitting(true);
  };

  return (
    <>
      <Head>
        <title>abc</title>
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
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

          {forgotmessage ? (
            <>
              <div class="auth__form">
                <div class="auth__form--container">
                  <h1 className="title text-center">{forgotmessage}</h1>
                </div>
              </div>
            </>
          ) : (
            <>
              <div class="auth__form">
                <div class="auth__form--container">
                  <h4>Reset your password</h4>
                  {error && <h2>{error}</h2>}
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Deserunt, exercitationem tempora quaerat reprehenderit et
                    nesciunt ipsam cupiditate.
                  </p>
                  <form onSubmit={submitHandler} class="mt-3">
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

                    <div class="mt-2">
                      <button
                        type="submit"
                        class="btn btn--primary btn--simple"
                      >
                        Send Link
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
}
