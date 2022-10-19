import React from 'react';
import { useNavigate } from 'react-router-dom';
import SideBar from 'components/SideBar';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const Dashboard = ({ children }: Props) => {
  const navigate = useNavigate();
  const userName = localStorage.getItem('userName');
  const handleLogOut = () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('accessToken');
    navigate('/');
  };

  return (
    <main className="flex w-full">
      <SideBar userName={userName} handleLogOut={handleLogOut} />
      {children}
    </main>
  );
};

export default Dashboard;
