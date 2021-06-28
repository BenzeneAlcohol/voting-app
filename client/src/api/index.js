import axios from 'axios';

const URL = 'http://localhost:7000';

export const fetchPolls = ()=> axios.get(`${URL}/api/polls`);