import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from 'api/utils';

const initializeState = {
  author: '',
  category: '',
  title: '',
  body: '',
  id: '',
};

const useListHandler = (id: string) => {
  const [item, setItem] = useState(initializeState);
  const { pathname } = useLocation();

  const fetch = async (id: string) => {
    const { data } = await axios.get(
      `${BASE_URL}/${
        pathname === '/xr-business' ? 'xrBusiness' : 'about'
      }/${id}`
    );
    if (data) {
      setItem({
        author: data.author,
        category: data.category,
        title: data.title,
        body: data.body,
        id: data.id,
      });
    }
  };
  useEffect(() => {
    fetch(id);
  }, []);
  return item;
};
export default useListHandler;
