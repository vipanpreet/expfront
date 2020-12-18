import "../styles/style.css";
import "../components/Layout/nav-bar/Navbar.custom.css";
import "../styles/luxury.css";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
import Overlay from "../components/Layout/Overlay/Overlay.module";
import Navbar from "../components/Layout/nav-bar/Navbar.components";
import Footer from "../components/ReusableComponents/footer/Footer.components";
import { useRouter } from "next/router";
import Alert from "../components/Layout/Alert/Alert.module";
import { getCartItems } from "../redux/cart/cart.actions";

import { useDispatch, useSelector } from "react-redux";

import { store, persistor } from "../redux/store";
import GoToTop from "../components/Layout/go-to-top/GoToTop.module";
import Cursor from "../components/Layout/Cursor/Cursor.js";

// import { store} from '../redux/store';

function MyApp({ Component, pageProps }) {
  const route = useRouter();

  const dispatch = useDispatch();

  const cartReducerState = useSelector((state) => state.cart);
  const { error, cartList } = cartReducerState;
  useEffect(() => {
    dispatch(getCartItems);
    localStorage.setItem("cart", JSON.stringify(cartList));
  }, []);
  return (
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
      {/* <Overlay /> */}
      <Navbar />
      <Alert />
      <GoToTop />
      <Cursor />
      <Component {...pageProps} />
      {/* // do not render the footer if the cart page is opened */}
      {route.pathname == "/cart" || route.pathname == "/luxury/[gender]" ? (
        " "
      ) : (
        <Footer />
      )}
      {/* </PersistGate> */}
    </Provider>
  );
}

export default MyApp;
