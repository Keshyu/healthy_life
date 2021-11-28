import React from 'react';
import { Link } from "react-router-dom";


function NameQuery() {
  return (
    <div className="w-full h-full flex flex-col justify-center gap-y-20">
      <div className="text-2xl leading-relaxed text-ui text-center">Как зовут твоего персонажа?</div>
      <form action="">
        <input className="w-full text-button p-3" type="text" id="name" name="name" placeholder="ИМЯ" />
      </form>
      <button className="mx-auto text-lg w-fit px-5 py-3 bg-ui rounded-2xl text-white text-button">
        <Link to="/intro">Дальше</Link>
      </button>
    </div>
  );
}

export default NameQuery;
