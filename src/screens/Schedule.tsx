import React, { useContext, useState, ChangeEvent } from 'react';
import { Link } from "react-router-dom";
import Context from '../Context';
import faceThinking from '../assets/FaceThinking.svg';


function Breakfast() {
  const { name, liveUp } = useContext(Context);
  const [meal, setMeal] = useState("");

  const onClick = (meal: string) => (
    () => {
      setMeal(meal);
    }
  );

  const checkAnswer = () => {
    if (meal == 'Яйца' && liveUp) liveUp();
  }

  return (
    <div className="w-full h-full flex flex-col justify-center gap-y-10 pb-20">
        <div className="question">
          Какой правильный режим труда и отдыха?
        </div>
      <div className="flex items-center justify-center flex-col gap-y-1">

      </div>
      <Link
        to="/"
        onClick={checkAnswer}
        className={"px-5 py-3 mx-auto text-lg bg-ui rounded-2xl text-white text-button" + (!name ? " disabled" : "")}
      >
        Дальше
      </Link>

      <img src={faceThinking} className="absolute inset-x-auto bottom-0"/>
    </div>
  );
}

export default Breakfast;
