import Link from "next/link";

const CartFooter = () => {
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

export default CartFooter;
