import { useRef } from "react";
import { TweenMax, TimelineMax, Power3 } from "gsap";

const ProfileMain = () => {
  let profileMenu = useRef(null);
  let ordersMenu = useRef(null);
  let securityMenu = useRef(null);
  let profileBody = useRef(null);
  let ordersBody = useRef(null);
  let securityBody = useRef(null);

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
    TweenMax.to(profileBody, 0.1, {
      display: "none",
    });
    TweenMax.to(securityBody, 0.1, {
      display: "none",
    });
    TweenMax.to(ordersBody, 0.1, {
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
    TweenMax.to(profileBody, 0.1, {
      display: "block",
    });
    TweenMax.to(securityBody, 0.1, {
      display: "none",
    });
    TweenMax.to(ordersBody, 0.1, {
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
    TweenMax.to(profileBody, 0.1, {
      display: "none",
    });
    TweenMax.to(ordersBody, 0.1, {
      display: "none",
    });
    TweenMax.to(securityBody, 0.1, {
      display: "block",
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
          onClick={openSecurity}
          ref={(el) => (securityMenu = el)}
          class="profile-navigation--list"
        >
          <a href="#">Security</a>
        </li>
      </div>
      <div class="profile-main">
        <div class="profile-main--profile" ref={(el) => (profileBody = el)}>
          <div class="subtitle mb-4">Your Profile</div>

          <div class="form-group">
            <label for="address">Phone number:</label>
            <input type="text" class="input" placeholder="(02) 8060 1294" />
          </div>

          <div class="form-group">
            <label for="locality">Country:</label>
            <input type="text" class="input" value="Australia" readonly />
          </div>

          <div class="form-group">
            <label for="state">State:</label>
            <input type="text" class="input" placeholder="New South Wales" />
          </div>

          <div class="form-group">
            <label for="state">Suburb:</label>
            <input type="text" class="input" placeholder="FOREST GLEN" />
          </div>

          <div class="form-group">
            <label for="street">Street:</label>
            <input
              type="text"
              class="input"
              placeholder="36 Woodlands Avenue"
            />
          </div>

          <div class="form-group">
            <label for="address">Zip Code:</label>
            <input type="text" class="input" placeholder="2157" />
          </div>

          <div class="form-group">
            <label for="locality">Locality / Landmark:</label>
            <input type="text" class="input" placeholder="abc" />
          </div>
          <div class="mt-2">
            <button class="btn btn--primary-simple">Update</button>
          </div>
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
                <button class="btn btn--primary-simple">Order Again</button>
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
                <button class="btn btn--primary-simple">Order Again</button>
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
                <button class="btn btn--primary-simple">Order Again</button>
              </div>
            </div>
          </div>
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
            <button class="btn btn--primary-dark">Change Password</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMain;
