import axios from 'axios';
import { BASE_URL } from './utils';

const contents = {
  getAbout: async () => {
    const { data } = await axios.get(`${BASE_URL}/about`);
    return data;
  },
  getXrBusiness: async () => {
    const { data } = await axios.get(`${BASE_URL}/xrBusiness`);
    return data;
  },
};

export default contents;
