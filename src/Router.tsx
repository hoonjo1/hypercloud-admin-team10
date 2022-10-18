import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Auth from 'pages/Auth';
import { About } from 'pages/About';
import { XrBusiness } from 'pages/XrBusiness';
import { BusinessArea } from 'pages/BusinessArea';
import { History } from 'pages/History';
import { TeamInfo } from 'pages/TeamInfo';
import { XrContentsSolution } from 'pages/XrContentsSolution';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/dashboard" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/xr-business" element={<XrBusiness />} />
        <Route path="/business-area" element={<BusinessArea />} />
        <Route path="/history" element={<History />} />
        <Route path="/team-info" element={<TeamInfo />} />
        <Route path="/xr-contents-solution" element={<XrContentsSolution />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
