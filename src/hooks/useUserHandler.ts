import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn, signUp } from 'api';

const initializeState = {
  email: '',
  password: '',
  name: '',
};

const useUserHandler = () => {
  const [values, setValues] = useState(initializeState);
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsSignUp(prev => !prev);
    setValues(initializeState);
  };

  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;
    setValues({ ...values, [name]: value });
  };

  const handlesignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await signUp(values.email, values.password, values.name);
      if (response.statusText === 'Bad Request') {
        alert(response.data);
        return;
      }
      handleToggle();
      alert('Success Sign in now!');
    } catch (error) {
      alert('server ERROR ❌');
      console.error(error);
    }
  };

  const handlesignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await signIn(values.email, values.password);
      if (response.statusText === 'Bad Request') {
        alert(response.data);
        return;
      }
      localStorage.setItem('accessToken', response.accessToken);
      localStorage.setItem('userName', response.user.name);
      alert(`Welcome ${response.user.name}`);
      navigate(`/about`);
    } catch (error) {
      alert('server ERROR ❌');
      console.error(error);
    }
  };

  return {
    values,
    isSignUp,
    handleToggle,
    handleInput,
    handlesignUp,
    handlesignIn,
  };
};

export default useUserHandler;
