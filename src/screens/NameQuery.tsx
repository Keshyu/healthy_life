import React, { useContext, ChangeEvent } from 'react';
import { Link } from "react-router-dom";
import Context from '../Context';


function NameQuery() {
  const { name, setName } = useContext(Context);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (setName) setName(e.target.value);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center gap-y-20">
      <div className="question">Как зовут твоего персонажа?</div>
      <input className="w-full text-button p-3" type="text" id="name" name="name" placeholder="ИМЯ"
        onChange={onChange}
      />
      <Link
        to="/intro"
        className={"px-5 py-3 mx-auto text-lg bg-ui rounded-2xl text-white text-button" + (!name ? " disabled" : "")}
      >
        Дальше
      </Link>
    </div>
  );
}

export default NameQuery;
