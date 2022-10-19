import axios from 'axios';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BASE_URL } from 'api/utils';

const initializeState = {
  title: '',
  body: '',
};

const usePostForm = () => {
  const { pathname } = useLocation();
  const [values, setValues] = useState(initializeState);

  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;
    setValues({ ...values, [name]: value });
  };

  const urlValidation = (pathname: string) => {
    let urlLocation = '';
    switch (pathname) {
      case '/about-info':
        urlLocation = '페이지 소개';
        break;
      case '/about-teamInfo':
        urlLocation = '팀 소개';
        break;
      case '/history':
        urlLocation = '기업 연혁';
        break;
      case '/xr-business-info':
        urlLocation = '페이지 소개';
        break;
      case '/xr-contents-solution':
        urlLocation = '기술 협업';
        break;
      case '/business-area':
        urlLocation = '기술 소개';
        break;
      default:
        urlLocation = '디폴트';
    }
    return urlLocation;
  };

  const usePostHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const author = localStorage.getItem('userName');
    const { title, body } = values;
    const category = urlValidation(pathname);
    const { data } = await axios.post(
      `${BASE_URL}/${pathname === '/about' ? 'about' : 'xrbusiness'}`,
      {
        author,
        title,
        body,
        category,
      }
    );

    return data;
  };

  return {
    values,
    usePostHandler,
    handleInput,
  };
};

export default usePostForm;
