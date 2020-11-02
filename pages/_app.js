import "../styles/style.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { AnimatePresence } from "framer-motion";

import { store, persistor } from "../redux/store";
// import { store} from '../redux/store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AnimatePresence exitBeforeEnter>
        <PersistGate persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </AnimatePresence>
    </Provider>
  );
}

export default MyApp;
