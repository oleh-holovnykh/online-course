import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HashRouter, Routes, Route } from 'react-router-dom';
import Requisites from './components/Requisites/Requisites.tsx';
import { Schedule } from './components/Schedule.tsx';
import modules from './data/onlineModuleSchedule.json';
import practices from './data/onlinePracticeSchedule.json';
import retreats from './data/onlineRetreatSchedule.json';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Requisites/>} />
          <Route path="payment" element={<Requisites/>} />
          <Route path="schedule" element={
            <Schedule 
            modules={modules}
            practices={practices}
            retreats={retreats}
            />
          } />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

