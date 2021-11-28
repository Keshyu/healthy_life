import React, { useState } from 'react';
import './App.scss';
import { Routes, Route, Link } from "react-router-dom";
import Context, { initContext } from './Context';
import Home from './screens/Home';
import NameQuery from './screens/NameQuery';
import Intro from './screens/Intro';
import Breakfast from './screens/Breakfast';
import Schedule from './screens/Schedule';

function App() {
  const [name, setNameRaw] = useState("");
  const [age, setAge] = useState(initContext.age)

  const setName = (name: string) => {
    setNameRaw(name.toUpperCase());
  };

  const liveUp = () => {
    setAge(age + 12);
  };

  return (
    <div className="app p-12">
      <Context.Provider
        value={{name, setName, age, liveUp}}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nameq" element={<NameQuery />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/breakfast" element={<Breakfast />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
