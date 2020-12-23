import { useEffect, useState } from "react";
import {
  createProfile,
  getProfile,
  deleteItemWishlist,
} from "../../../redux/profile/profile.actions";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";

import Spinner from "../../../components/Layout/Spinner/Spinner";

const ProfileMain = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("australia");
  const [state, setState] = useState("");
  const [suburb, setSuburb] = useState("");
  const [street, setStreet] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [locality, setLocality] = useState("");

  const [alert, setAlert] = useState("");

  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const { userInfo } = auth;

  const profileCreate = useSelector((state) => state.profileCreate);
  const { message, error, success, loading } = profileCreate;

  const profileGet = useSelector((state) => state.profileGet);
  const {
    profile,
    error: getError,
    loading: getLoading,
    messageWishlist,
  } = profileGet;

  const router = useRouter();
  var { settings } = router.query;

  useEffect(() => {
    if (!loading) {
      setPhoneNumber(profile && profile.phoneNumber);
      setCountry(profile && profile.country);
      setState(profile && profile.state);
      setSuburb(profile && profile.suburb);
      setStreet(profile && profile.street);
      setZipcode(profile && profile.zipcode);
      setLocality(profile && profile.locality);
    }
    dispatch(getProfile());
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [dispatch, userInfo, success, messageWishlist]);

  const submitHandler = (e) => {
    e.preventDefault();
    const profile = {
      phoneNumber,
      country: "australia",
      state,
      suburb,
      street,
      street,
      zipcode,
      locality,
    };
    dispatch(createProfile(profile));
    dispatch(getProfile());
  };

  const handleRemoveBtn = (id) => {
    dispatch(deleteItemWishlist(id));
  };

  return (
    <div className="container-large mt-6 mb-9" style={{ minHeight: "100vh" }}>
      <div className="profile-navigation">
        {/* MENU */}
        <li className="profile-navigation--list">
          <Link
            href={{
              pathname: "/profile",
              query: { settings: "address" },
            }}
            className="link"
          >
            <a href="#">Your Address</a>
          </Link>
        </li>
        <li className="profile-navigation--list">
          <Link
            href={{
              pathname: "/profile",
              query: { settings: "orders" },
            }}
            className="link"
          >
            <a href="#">Orders</a>
          </Link>
        </li>
        <li className="profile-navigation--list">
          <Link
            href={{
              pathname: "/profile",
              query: { settings: "wishlist" },
            }}
            className="link"
          >
            <a href="#">Wishlist</a>
          </Link>
        </li>
        <li className="profile-navigation--list">
          <Link
            href={{
              pathname: "/profile",
              query: { settings: "security" },
            }}
            className="link"
          >
            <a href="#">Security</a>
          </Link>
        </li>
      </div>

      <div className="profile-main">
        {getError && <h1 className="heading">{getError}</h1>}
        {message && <h1 className="heading">{alert}</h1>}
        {/* ADDRESS PANEL */}
        {settings === "address" && (
          <div className="profile-main--profile">
            <div className="subtitle mb-2">Your Address</div>
            <form onSubmit={submitHandler}>
              <div className="form-group">
                <label for="address">Phone number:</label>
                <input
                  type="text"
                  className="input"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="(02) 8060 1294"
                />
              </div>

              <div className="form-group">
                <label for="locality">Country:</label>
                <input
                  type="text"
                  className="input"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  readonly
                />
              </div>

              <div className="form-group">
                <label for="state">State:</label>
                <input
                  type="text"
                  className="input"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  placeholder="New South Wales"
                />
              </div>

              <div className="form-group">
                <label for="state">Suburb:</label>
                <input
                  type="text"
                  className="input"
                  value={suburb}
                  onChange={(e) => setSuburb(e.target.value)}
                  placeholder="FOREST GLEN"
                />
              </div>

              <div className="form-group">
                <label for="street">Street:</label>
                <input
                  type="text"
                  className="input"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  placeholder="36 Woodlands Avenue"
                />
              </div>

              <div className="form-group">
                <label for="address">Zip Code:</label>
                <input
                  type="text"
                  className="input"
                  value={zipcode}
                  onChange={(e) => setZipcode(e.target.value)}
                  placeholder="2157"
                />
              </div>

              <div className="form-group">
                <label for="locality">Locality / Landmark:</label>
                <input
                  type="text"
                  className="input"
                  value={locality}
                  onChange={(e) => setLocality(e.target.value)}
                  placeholder="abc"
                />
              </div>
              <div className="mt-2">
                <button className="btn btn--primary">Update</button>
              </div>
            </form>
          </div>
        )}

        {/* ORDERS PANEL */}
        {settings === "orders" && (
          <div className="profile-main--active">
            <div className="subtitle mb-4">Your Orders</div>
            <div className="title">No Orders Yet</div>
            {/* <div className="title mb-2">Currently Active</div>
            <div className="orderslist">
              <div className="orderslist--img">
                <img
                  src="https://res.cloudinary.com/arktastic-pty-ltd/image/upload/v1606500127/ebvz8svvs7bedcnfdnnv.jpg"
                  alt=""
                />
              </div>
              <div className="orderslist__body">
                <div className="orderslist__body--title">
                  Black shirt for men
                </div>
                <div className="orderslist__body--desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis iure laborum eveniet ipsam, expedita exercitationem
                  enim quaerat magnam excepturi...
                </div>
                <div className="orderslist__body--status">Out for Delivery</div>
                <div className="mt-2">
                  <button className="btn btn--primary">Order Again</button>
                </div>
              </div>
            </div> */}
            {/* <div className="title mb-2 mt-8">Previous Orders</div> */}
            {/* <div className="orderslist">
              <div className="orderslist--img">
                <img
                  src="https://res.cloudinary.com/arktastic-pty-ltd/image/upload/v1606501309/kzd91ynr0wg1cbdfg2pf.jpg"
                  alt=""
                />
              </div>
              <div className="orderslist__body">
                <div className="orderslist__body--title">
                  Hot durable black cap
                </div>
                <div className="orderslist__body--desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis iure laborum eveniet ipsam, expedita exercitationem
                  enim quaerat magnam excepturi...
                </div>
                <div className="mt-2">
                  <button className="btn btn--primary">Order Again</button>
                </div>
              </div>
            </div> */}
            {/* 
            <div className="orderslist">
              <div className="orderslist--img">
                <img
                  src="https://res.cloudinary.com/arktastic-pty-ltd/image/upload/v1606500837/i4a34ocbmuamsvr6pbbc.jpg"
                  alt=""
                />
              </div>
              <div className="orderslist__body">
                <div className="orderslist__body--title">
                  Flexible women purse
                </div>
                <div className="orderslist__body--desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis iure laborum eveniet ipsam, expedita exercitationem
                  enim quaerat magnam excepturi...
                </div>
                <div className="mt-2">
                  <button className="btn btn--primary">Order Again</button>
                </div>
              </div>
            </div> */}
          </div>
        )}
        {settings === "wishlist" && (
          <div className="profile-main--active">
            <div className="subtitle mb-4">Your Wishlist</div>

            {profile !== undefined ? (
              profile.wishlist.map((product) => {
                return (
                  <>
                    {getLoading ? (
                      <>
                        <h2
                          style={{
                            position: "absolute",
                            left: "45%",
                            transform: "translate(-50%)",
                          }}
                        >
                          <Spinner />
                        </h2>
                      </>
                    ) : (
                      <div className="orderslist" style={{ marginBottom: 20 }}>
                        <div className="orderslist--img">
                          <img src={product.images[0].url} alt="" />
                        </div>
                        <div
                          className="orderslist__body"
                          style={{ paddingTop: 0 }}
                        >
                          <div
                            className="orderslist__body--title"
                            style={{ lineHeight: 1 }}
                          >
                            {product.name}
                          </div>
                          <h4 style={{ paddingTop: "10px" }}>
                            {product.brand}
                          </h4>
                          <div className="orderslist__body--desc">
                            {product.description.slice(0, 250)}
                          </div>
                          <div className="mt-2">
                            <a
                              href={`/details/${product._id}`}
                              target="_blank"
                              className="btn btn--primary"
                            >
                              Order
                            </a>

                            <button
                              className="btn btn--primary"
                              style={{ marginLeft: "10px" }}
                              onClick={() => {
                                handleRemoveBtn(product._id);
                              }}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                );
              })
            ) : (
              <div>Wishlist is empty</div>
            )}
          </div>
        )}

        {settings === "security" && (
          <div className="profile-main--security">
            <div className="subtitle mb-4">Security</div>
            <div className="title mb-3">Change Password</div>
            <div className="form-group">
              <label for="password">Current Password:</label>
              <input type="text" className="input" />
            </div>
            <div className="form-group pt-3">
              <label for="password">New Password:</label>
              <input type="text" className="input" />
            </div>
            <div className="form-group">
              <label for="password">Confirm Password:</label>
              <input type="text" className="input" />
            </div>
            <div className="mt-2">
              <button className="btn btn--font">Change Password</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileMain;
