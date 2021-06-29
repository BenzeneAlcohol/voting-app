import axios from 'axios';

const URL = 'http://localhost:7000';
const API = axios.create({baseURL:'http://localhost:7000'});

export const fetchPolls = ()=> API.get(`/api/polls`);
export const signIn = (formData) => API.post(`/api/auth/login`, formData);
export const signUp = (formData) => API.post(`/api/auth/register`, formData);