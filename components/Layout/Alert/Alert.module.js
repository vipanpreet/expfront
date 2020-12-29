import { useSelector } from "react-redux";
import styles from "./Alert.module.css";
import Lottie from "react-lottie";
import successData from "./success.json";
import loadingData from "./loading.json";

const Alert = () => {
  const alertShow = useSelector((state) => state.alertShow);
  const { alertState } = alertShow;
  const defaultOptions = {
    loop: alertState.alertType === "success" ? false : true,
    autoplay: true,
    animationData:
      alertState.alertType === "success" ? successData : loadingData,

    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      {Object.keys(alertState).length === 0 &&
      alertState.constructor === Object ? null : (
        <div className={styles.alert}>
          <div className={styles.alertbody}>
            <Lottie
              options={defaultOptions}
              height={window.innerWidth < 1024 ? 100 : 180}
              width={window.innerWidth < 1024 ? 100 : 180}
            />
            <div className={styles.alerttitle}>{alertState.message}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Alert;
