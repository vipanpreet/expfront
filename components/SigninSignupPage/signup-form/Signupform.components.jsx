const Signupform = () => {
  return (
    <div className="col-lg-6">
      <div className="title">Create a new Account</div>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input type="text" className="input" />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" className="input" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" className="input" />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm Password:</label>
          <input type="password" className="input" />
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
          <a href="#" className="btn btn--font mr-2">
            Register Account
          </a>
          <a href="#" className="btn btn--primary">
            Forgot?
          </a>
        </div>
      </form>
    </div>
  );
};

export default Signupform;
