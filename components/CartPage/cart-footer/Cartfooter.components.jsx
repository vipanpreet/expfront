import Link from "next/link";

const Cartfooter = () => {
  return (
    <div className="checkout--floating">
      <Link href="/">
        <a className="check-cancel">cancel</a>
      </Link>
      <a className="btn btn--secondary" href="#">
        Checkout
      </a>
    </div>
  );
};

export default Cartfooter;
