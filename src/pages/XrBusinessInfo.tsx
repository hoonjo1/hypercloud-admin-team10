import React from 'react';
import Dashboard from './Dashboard';
import { PageSummary } from 'pages/PageSummary';

export const XrBusinessInfo = () => {
  return (
    <Dashboard>
      <PageSummary title="XR-Business" category="introduce" />
    </Dashboard>
  );
};
