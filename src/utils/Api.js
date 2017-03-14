import axios from "axios";
import setAuthorizationToken from "../utils/setAuthorizationToken";

export const signup = user => {
  return axios
    .post("/auth/signup", {
      email: user.email,
      password: user.password
    })
    .then(res => {
      let token = res.data.token;
      setAuthorizationToken(token);
      localStorage.setItem("jwtToken", token);
    });
};

export const login = user => {
  return axios
    .post("/auth/login", {
      email: user.email,
      password: user.password
    })
    .then(res => {
      let token = res.data.token;
      setAuthorizationToken(token);
      localStorage.setItem("jwtToken", token);
      return res.data.polls;
    });
};

export const getPolls = () => {
  return axios.get("/polls").then(res => {
    return res.data.polls;
  });
};

export const getSinglePoll = id => {
  return axios.get(`/polls/vote/${id}`).then(res => {
    return res.data.poll;
  });
};

export const savePoll = poll => {
  return axios.post("/polls", { poll }).then(res => {
    return res.data.poll;
  });
};

export const editPoll = poll => {
  return axios.patch(`/polls/vote`, { poll }).then(res => {
    return res.data.poll;
  });
};

export const deletePoll = id => {
  return axios.delete(`/polls/${id}`).then(res => {
    return res.data.poll;
  });
};
