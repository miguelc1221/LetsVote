import { post, get } from "axios";
import setAuthorizationToken from "../utils/setAuthorizationToken";

export const signup = user => {
  return post("/auth/signup", {
    email: user.email,
    password: user.password
  }).then(res => {
    let token = res.data.token;
    setAuthorizationToken(token);
    localStorage.setItem("jwtToken", token);
  });
};

export const login = user => {
  return post("/auth/login", {
    email: user.email,
    password: user.password
  }).then(res => {
    let token = res.data.token;
    setAuthorizationToken(token);
    localStorage.setItem("jwtToken", token);
    console.log(res.data);
    return res.data.polls;
  });
};

export const getPolls = () => {
  return get("/polls").then(res => {
    return res.data.polls;
  });
};

export const savePoll = poll => {
  return post("/polls", { poll }).then(res => {
    return res.data.poll;
  });
};

export const editPoll = user => {
  return post("/auth/login", {
    email: user.email,
    password: user.password
  }).then(res => {
    let token = res.data.token;
    localStorage.setItem("jwtToken", token);
  });
};

export const deletePoll = user => {
  return post("/auth/login", {
    email: user.email,
    password: user.password
  }).then(res => {
    let token = res.data.token;
    localStorage.setItem("jwtToken", token);
  });
};
