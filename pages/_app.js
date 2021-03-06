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

import { store, persistor } from "../redux/store";
import GoToTop from "../components/Layout/go-to-top/GoToTop.module";
import Cursor from "../components/Layout/Cursor/Cursor.js";
import Head from "next/head";
import ChangeStore from "../components/Layout/Changestore/ChangeStore";
// import { store} from '../redux/store';

function MyApp({ Component, pageProps }) {
  const route = useRouter();
  return (
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
      {/* <Overlay /> */}
      <Head>
        <title>Arktastic</title>
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <Navbar />
      <Alert />
      <ChangeStore />
      <GoToTop />
      {/* <Cursor /> */}
      <Component {...pageProps} />
      {/* // do not render the footer if the cart page is opened */}
      {route.asPath == "/luxury/men" || route.asPath == "/luxury/women" ? (
        ""
      ) : (
        <Footer />
      )}
      {/* </PersistGate> */}
    </Provider>
  );
}

export default MyApp;
