import { useEffect, useState } from "react";
import {
  createProfile,
  getProfile,
} from "../../../redux/profile/profile.actions";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";

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

  return (
    <div class="container-large mt-6 mb-9">
      <div class="profile-navigation">
        <li class="profile-navigation--list">
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
        <li class="profile-navigation--list">
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
        <li class="profile-navigation--list">
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
        <li class="profile-navigation--list">
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
      <div class="profile-main">
        {getError && <h1 className="heading">{getError}</h1>}
        {message && <h1 className="heading">{alert}</h1>}
        {settings === "address" && (
          <div class="profile-main--profile">
            <div class="subtitle mb-2">Your Address</div>
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
        )}

        {settings === "orders" && (
          <div class="profile-main--active">
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
        )}
        {settings === "wishlist" && (
          <div class="profile-main--active">
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
          </div>
        )}

        {settings === "security" && (
          <div class="profile-main--security">
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
        )}
      </div>
    </div>
  );
};

export default ProfileMain;
