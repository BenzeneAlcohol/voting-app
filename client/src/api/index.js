import axios from 'axios';

const URL = 'https://api.github.com/users';

export const fetchPolls = ()=>axios.get(URL);