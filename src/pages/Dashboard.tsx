import React from 'react';
import Table from 'components/Table';
import SideBar from 'components/SideBar';
import { PageSummary } from 'components/PageSummary';

const Dashboard = () => {
  return (
    <main className="flex w-full">
      <SideBar />
      {/* <Table /> */}
      <PageSummary />
    </main>
  );
};

export default Dashboard;
