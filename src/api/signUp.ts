import axios, { AxiosError } from 'axios';
import { BASE_URL } from './utils';

const signUp = async (email: string, password: string, name: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/register'`, {
      email,
      password,
      name,
    });
    return response.data;
  } catch (error) {
    const { response } = error as unknown as AxiosError;
    if (response) {
      return response;
    }
  }
};

export default signUp;
