import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignIn from 'pages/SignIn';
import Dashboard from 'pages/Dashboard';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
