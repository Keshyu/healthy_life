import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import Context from '../Context';

function Intro() {
  const { name } = useContext(Context);

  return (
    <div className="w-full h-full flex flex-col justify-center gap-y-20">
      <div className="question">
        В этом квесте тебе предстоит принимать решения за {name}.
      </div>
      <Link to="/breakfast" className="mx-auto text-lg w-fit px-5 py-3 bg-ui rounded-2xl text-white text-button">
        Дальше
      </Link>
    </div>
  );
}

export default Intro;
