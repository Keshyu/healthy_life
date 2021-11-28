import React from 'react';
import { Link } from "react-router-dom";
import title from '../assets/title.svg';

function Home() {
  return (
    <div className="h-full flex items-center justify-center flex-col">
      <img className="w-56" src={title} alt="ИГРА В ЖИЗНЬ" />
      <div className="h-1/4"></div>
      <div className="mx-auto text-lg w-fit px-5 py-3 bg-ui rounded-2xl text-white text-button">
        <Link to="/nameq">Играть</Link>
      </div>
    </div>
  );
}

export default Home;
