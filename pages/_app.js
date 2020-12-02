import "../styles/style.css";
import "react-multi-carousel/lib/styles.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Overlay from "../components/Layout/Overlay/Overlay.module";
import Navbar from "../components/Layout/nav-bar/Navbar.components";
import Footer from "../components/ReusableComponents/footer/Footer.components";
import { useRouter } from "next/router";
import Alert from "../components/Layout/Alert/Alert.module";

import { store, persistor } from "../redux/store";
// import { store} from '../redux/store';

function MyApp({ Component, pageProps }) {
  const route = useRouter();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {/* <Overlay /> */}
        <Navbar />
        <Alert />
        <Component {...pageProps} />
        {/* // do not render the footer if the cart page is opened */}
        {route.pathname == "/cart" ? " " : <Footer />}
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
