import axios from "axios";
import getCookieValue from "@/utils/getCookie";
const commonConfig = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    token: getCookieValue("access_token"),
  },
};
console.log(getCookieValue("access_token"));
export default (baseURL) => {
  return axios.create({
    baseURL,
    ...commonConfig,
  });
};
