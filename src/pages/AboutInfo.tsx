import React from 'react';
import Dashboard from './Dashboard';
import { PageSummary } from 'pages/PageSummary';

export const AboutInfo = () => {
  return (
    <Dashboard>
      <PageSummary title="About" category="introduce" />
    </Dashboard>
  );
};
