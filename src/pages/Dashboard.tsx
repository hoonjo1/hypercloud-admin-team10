import React from 'react';
import Table from 'components/Table';
import SideBar from 'components/SideBar';

const Dashboard = () => {
  return (
    <main className="flex w-full">
      <SideBar />
      <Table />
    </main>
  );
};

export default Dashboard;
