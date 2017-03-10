import { post } from 'axios';

export const signup = (user) => {
  return post('/auth/signup', {
    email: user.email,
    password: user.password
  })
  .then((res) => {
    let token = res.data.token;
    localStorage.setItem('jwtToken', token);
  })
}

export const login = (user) => {
  return post('/auth/login', {
    email: user.email,
    password: user.password
  })
  .then((res) => {
    let token = res.data.token;
    localStorage.setItem('jwtToken', token);
  })
}

export const getPolls = (user) => {
  return post('/auth/login', {
    email: user.email,
    password: user.password
  })
  .then((res) => {
    let token = res.data.token;
    localStorage.setItem('jwtToken', token);
  })
}

export const editPoll = (user) => {
  return post('/auth/login', {
    email: user.email,
    password: user.password
  })
  .then((res) => {
    let token = res.data.token;
    localStorage.setItem('jwtToken', token);
  })
}

export const savePoll = (user) => {
  return post('/auth/login', {
    email: user.email,
    password: user.password
  })
  .then((res) => {
    let token = res.data.token;
    localStorage.setItem('jwtToken', token);
  })
}

export const deletePoll = (user) => {
  return post('/auth/login', {
    email: user.email,
    password: user.password
  })
  .then((res) => {
    let token = res.data.token;
    localStorage.setItem('jwtToken', token);
  })
}