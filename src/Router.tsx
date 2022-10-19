import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Auth from 'pages/Auth';
import { AboutInfo } from 'pages/AboutInfo';
import { XrBusinessInfo } from 'pages/XrBusinessInfo';
import { BusinessArea } from 'pages/BusinessArea';
import { History } from 'pages/History';
import { TeamInfo } from 'pages/TeamInfo';
import { XrContentsSolution } from 'pages/XrContentsSolution';
import { About } from 'pages/About';
import { XrBusiness } from 'pages/XrBusiness';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/about" element={<About />} />
        <Route path="/about-info" element={<AboutInfo />} />
        <Route path="/xr-business" element={<XrBusiness />} />
        <Route path="/xr-business-info" element={<XrBusinessInfo />} />
        <Route path="/business-area" element={<BusinessArea />} />
        <Route path="/history" element={<History />} />
        <Route path="/team-info" element={<TeamInfo />} />
        <Route path="/xr-contents-solution" element={<XrContentsSolution />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
