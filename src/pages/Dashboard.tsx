import React from 'react';
import SideBar from 'components/SideBar';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const Dashboard = ({ children }: Props) => {
  return (
    <main className="flex w-full">
      <SideBar />
      {children}
    </main>
  );
};

export default Dashboard;
