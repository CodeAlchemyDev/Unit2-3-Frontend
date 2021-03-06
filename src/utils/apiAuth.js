import axios from "axios";

export const apiAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://build-week-school-in-the-cloud.herokuapp.com/api",
    headers: {
      "Content-Type": "application/json",
      authorization: token,
    },
  });
};

export function authHeader() {
  // return authorization header with jwt token
  let user = JSON.parse(localStorage.getItem("user"));

  if (user && user.token) {
    return { authorization: "Bearer " + user.token };
  } else {
    return {};
  }
}
