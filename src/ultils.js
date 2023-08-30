export const truncateString = (str, num) => {
  if (str?.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
};
export const userToken = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token"))
  : null;