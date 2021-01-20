export default function isLogin() {
  if (typeof window !== "undefined") {
    var userInfoFromStorage = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null;
  }

  if (
    Object.keys(userInfoFromStorage).length !== 0 &&
    userInfoFromStorage.constructor === Object
  ) {
    return true;
  } else {
    return false;
  }
}
