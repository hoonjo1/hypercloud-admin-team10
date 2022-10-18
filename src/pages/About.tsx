import React from 'react';
import Dashboard from './Dashboard';
import { PageSummary } from 'pages/PageSummary';

export const About = () => {
  return (
    <Dashboard>
      <PageSummary title="About" category="introduce" />
    </Dashboard>
  );
};
