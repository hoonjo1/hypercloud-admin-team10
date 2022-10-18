import axios, { AxiosError } from 'axios';
import { BASE_URL } from './utils';

const signIn = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/login'`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    const { response } = error as unknown as AxiosError;
    if (response) {
      return response;
    }
  }
};

export default signIn;
