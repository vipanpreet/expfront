const Alert = ({ children, type }) => (
  <div className={`${type === "success" ? "toast success" : "toast"}`}>
    {children}
  </div>
);

export default Alert;
