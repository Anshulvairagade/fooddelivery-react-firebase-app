export const fetchUser = () => {
  // console.log(localStorage.getItem("user"))
  const userInfo =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();
      // console.log(userInfo, ": userInfo")
  return userInfo;
};
export const fetchCart = () => {
  // console.log(localStorage.getItem("cartItems"))
  const cartInfo =
    localStorage.getItem("cartItems") !== "undefined"
      ? JSON.parse(localStorage.getItem("cartItems"))
      : localStorage.clear();
  return cartInfo ? cartInfo : [];
  

  // return []
};
// export const fetchUser = () => {
//   const userInfo = localStorage.getItem("user");
//   return userInfo !== null ? JSON.parse(userInfo) : null;
// };

// export const fetchCart = () => {
//   const cartInfo = localStorage.getItem("cartItems");
//   return cartInfo !== null ? JSON.parse(cartInfo) : [];
// };

