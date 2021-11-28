import React from 'react';
import './App.scss';
import { Routes, Route, Link } from "react-router-dom";
import Home from './screens/Home';
import NameQuery from './screens/NameQuery';
import Intro from './screens/Intro';

function App() {
  return (
    <div className="app p-12">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nameq" element={<NameQuery />} />
        <Route path="/intro" element={<Intro />} />
      </Routes>
    </div>
  );
}

export default App;
