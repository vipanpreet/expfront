import { useRef, useEffect, useState } from "react";
import {
  createProfile,
  getProfile,
} from "../../../redux/profile/profile.actions";
import { useDispatch, useSelector } from "react-redux";
import { TweenMax } from "gsap";
import { PROFILE_CREATE_RESET } from "../../../redux/profile/profile.types";

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

  const login = useSelector((state) => state.login);
  const { userInfo } = login;

  const profileCreate = useSelector((state) => state.profileCreate);
  const { message, error, success, loading } = profileCreate;

  const profileGet = useSelector((state) => state.profileGet);
  const { profile, error: getError, loading: getLoading } = profileGet;

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
  }, [userInfo, success]);

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

  // UI
  let profileMenu = useRef(null);
  let ordersMenu = useRef(null);
  let securityMenu = useRef(null);
  let wishlistMenu = useRef(null);
  let profileBody = useRef(null);
  let ordersBody = useRef(null);
  let securityBody = useRef(null);
  let wishlistBody = useRef(null);

  const openOrders = () => {
    TweenMax.to(profileMenu, 0.1, {
      css: { className: "+=profile-navigation--list" },
    });
    TweenMax.to(securityMenu, 0.1, {
      css: { className: "+=profile-navigation--list" },
    });
    TweenMax.to(ordersMenu, 0.1, {
      css: { className: "+=profile-navigation--list is-active" },
    });
    TweenMax.to(wishlistMenu, 0.1, {
      css: { className: "+=profile-navigation--list" },
    });
    TweenMax.to(profileBody, 0.1, {
      display: "none",
    });
    TweenMax.to(securityBody, 0.1, {
      display: "none",
    });
    TweenMax.to(ordersBody, 0.1, {
      display: "block",
    });
    TweenMax.to(wishlistBody, 0.1, {
      display: "none",
    });
  };

  const openWishlist = () => {
    TweenMax.to(profileMenu, 0.1, {
      css: { className: "+=profile-navigation--list" },
    });
    TweenMax.to(securityMenu, 0.1, {
      css: { className: "+=profile-navigation--list" },
    });
    TweenMax.to(ordersMenu, 0.1, {
      css: { className: "+=profile-navigation--list" },
    });
    TweenMax.to(wishlistMenu, 0.1, {
      css: { className: "+=profile-navigation--list is-active" },
    });

    TweenMax.to(profileBody, 0.1, {
      display: "none",
    });
    TweenMax.to(securityBody, 0.1, {
      display: "none",
    });
    TweenMax.to(ordersBody, 0.1, {
      display: "none",
    });
    TweenMax.to(wishlistBody, 0.1, {
      display: "block",
    });
  };

  const openProfile = () => {
    TweenMax.to(profileMenu, 0.1, {
      css: { className: "+=profile-navigation--list is-active" },
    });
    TweenMax.to(securityMenu, 0.1, {
      css: { className: "+=profile-navigation--list" },
    });
    TweenMax.to(ordersMenu, 0.1, {
      css: { className: "+=profile-navigation--list" },
    });
    TweenMax.to(wishlistMenu, 0.1, {
      css: { className: "+=profile-navigation--list" },
    });
    TweenMax.to(profileBody, 0.1, {
      display: "block",
    });
    TweenMax.to(securityBody, 0.1, {
      display: "none",
    });
    TweenMax.to(ordersBody, 0.1, {
      display: "none",
    });
    TweenMax.to(wishlistBody, 0.1, {
      display: "none",
    });
  };

  const openSecurity = () => {
    TweenMax.to(profileMenu, 0.1, {
      css: { className: "+=profile-navigation--list" },
    });
    TweenMax.to(securityMenu, 0.1, {
      css: { className: "+=profile-navigation--list is-active" },
    });
    TweenMax.to(ordersMenu, 0.1, {
      css: { className: "+=profile-navigation--list" },
    });
    TweenMax.to(wishlistMenu, 0.1, {
      css: { className: "+=profile-navigation--list" },
    });
    TweenMax.to(profileBody, 0.1, {
      display: "none",
    });
    TweenMax.to(ordersBody, 0.1, {
      display: "none",
    });
    TweenMax.to(securityBody, 0.1, {
      display: "block",
    });
    TweenMax.to(wishlistBody, 0.1, {
      display: "none",
    });
  };
  return (
    <div class="container-large mt-6 mb-9">
      <div class="profile-navigation">
        <li
          onClick={openProfile}
          ref={(el) => (profileMenu = el)}
          class="profile-navigation--list is-active"
        >
          <a href="#">Your Profile</a>
        </li>
        <li
          onClick={openOrders}
          ref={(el) => (ordersMenu = el)}
          class="profile-navigation--list"
        >
          <a href="#">Your Orders</a>
        </li>
        <li
          onClick={openWishlist}
          ref={(el) => (wishlistMenu = el)}
          class="profile-navigation--list"
        >
          <a href="#">Your wishlist</a>
        </li>
        <li
          onClick={openSecurity}
          ref={(el) => (securityMenu = el)}
          class="profile-navigation--list"
        >
          <a href="#">Security</a>
        </li>
      </div>
      <div class="profile-main">
        {getError && <h1 className="heading">{getError}</h1>}
        {message && <h1 className="heading">{alert}</h1>}
        <div class="profile-main--profile" ref={(el) => (profileBody = el)}>
          <div class="subtitle mb-2">Your Profile</div>
          <form onSubmit={submitHandler}>
            <div class="form-group">
              <label for="address">Phone number:</label>
              <input
                type="text"
                class="input"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="(02) 8060 1294"
              />
            </div>

            <div class="form-group">
              <label for="locality">Country:</label>
              <input
                type="text"
                class="input"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                readonly
              />
            </div>

            <div class="form-group">
              <label for="state">State:</label>
              <input
                type="text"
                class="input"
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder="New South Wales"
              />
            </div>

            <div class="form-group">
              <label for="state">Suburb:</label>
              <input
                type="text"
                class="input"
                value={suburb}
                onChange={(e) => setSuburb(e.target.value)}
                placeholder="FOREST GLEN"
              />
            </div>

            <div class="form-group">
              <label for="street">Street:</label>
              <input
                type="text"
                class="input"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                placeholder="36 Woodlands Avenue"
              />
            </div>

            <div class="form-group">
              <label for="address">Zip Code:</label>
              <input
                type="text"
                class="input"
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
                placeholder="2157"
              />
            </div>

            <div class="form-group">
              <label for="locality">Locality / Landmark:</label>
              <input
                type="text"
                class="input"
                value={locality}
                onChange={(e) => setLocality(e.target.value)}
                placeholder="abc"
              />
            </div>
            <div class="mt-2">
              <button class="btn btn--primary">Update</button>
            </div>
          </form>
        </div>

        <div class="profile-main--active" ref={(el) => (ordersBody = el)}>
          <div class="subtitle mb-4">Your Orders</div>
          <div class="title mb-2">Currently Active</div>
          <div class="orderslist">
            <div class="orderslist--img">
              <img
                src="https://res.cloudinary.com/arktastic-pty-ltd/image/upload/v1606500127/ebvz8svvs7bedcnfdnnv.jpg"
                alt=""
              />
            </div>
            <div class="orderslist__body">
              <div class="orderslist__body--title">Black shirt for men</div>
              <div class="orderslist__body--desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis iure laborum eveniet ipsam, expedita exercitationem
                enim quaerat magnam excepturi...
              </div>
              <div class="orderslist__body--status">Out for Delivery</div>
              <div class="mt-2">
                <button class="btn btn--primary">Order Again</button>
              </div>
            </div>
          </div>
          <div class="title mb-2 mt-8">Previous Orders</div>
          <div class="orderslist">
            <div class="orderslist--img">
              <img
                src="https://res.cloudinary.com/arktastic-pty-ltd/image/upload/v1606501309/kzd91ynr0wg1cbdfg2pf.jpg"
                alt=""
              />
            </div>
            <div class="orderslist__body">
              <div class="orderslist__body--title">Hot durable black cap</div>
              <div class="orderslist__body--desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis iure laborum eveniet ipsam, expedita exercitationem
                enim quaerat magnam excepturi...
              </div>
              <div class="mt-2">
                <button class="btn btn--primary">Order Again</button>
              </div>
            </div>
          </div>

          <div class="orderslist">
            <div class="orderslist--img">
              <img
                src="https://res.cloudinary.com/arktastic-pty-ltd/image/upload/v1606500837/i4a34ocbmuamsvr6pbbc.jpg"
                alt=""
              />
            </div>
            <div class="orderslist__body">
              <div class="orderslist__body--title">Flexible women purse</div>
              <div class="orderslist__body--desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis iure laborum eveniet ipsam, expedita exercitationem
                enim quaerat magnam excepturi...
              </div>
              <div class="mt-2">
                <button class="btn btn--primary">Order Again</button>
              </div>
            </div>
          </div>
        </div>

        <div class="profile-main--active" ref={(el) => (wishlistBody = el)}>
          <div class="subtitle mb-4">Your Wishlist</div>

          {profile !== undefined ? (
            profile.wishlist.map((product) => {
              return (
                <>
                  <div class="orderslist" style={{ marginBottom: 20 }}>
                    <div class="orderslist--img">
                      <img src={product.images[0].url} alt="" />
                    </div>
                    <div class="orderslist__body" style={{ paddingTop: 0 }}>
                      <div
                        class="orderslist__body--title"
                        style={{ lineHeight: 1 }}
                      >
                        {product.name}
                      </div>
                      <div class="orderslist__body--desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Vel maxime fugiat sapiente odit veritatis quis
                        incidunt quasi provident possimus, ab quibusdam
                        accusamus animi optio atque tenetur deleniti expedita
                        distinctio placeat.
                      </div>
                      <div class="mt-2">
                        <button class="btn btn--primary">Order</button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <div>Wishlist is empty</div>
          )}

          {/* <div class="orderslist--img">
              <img
                src="https://res.cloudinary.com/arktastic-pty-ltd/image/upload/v1606501309/kzd91ynr0wg1cbdfg2pf.jpg"
                alt=""
              />
            </div>
            <div class="orderslist__body">
              <div class="orderslist__body--title">Hot durable black cap</div>
              <div class="orderslist__body--desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis iure laborum eveniet ipsam, expedita exercitationem
                enim quaerat magnam excepturi...
              </div>
              <div class="mt-2">
                <button class="btn btn--primary-simple">Order</button>
              </div>
            </div> */}
        </div>

        <div class="profile-main--security" ref={(el) => (securityBody = el)}>
          <div class="subtitle mb-4">Security</div>
          <div class="title mb-3">Change Password</div>
          <div class="form-group">
            <label for="password">Current Password:</label>
            <input type="text" class="input" />
          </div>
          <div class="form-group pt-3">
            <label for="password">New Password:</label>
            <input type="text" class="input" />
          </div>
          <div class="form-group">
            <label for="password">Confirm Password:</label>
            <input type="text" class="input" />
          </div>
          <div class="mt-2">
            <button class="btn btn--font">Change Password</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMain;
