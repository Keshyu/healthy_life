import React, { useContext, useState, ChangeEvent } from 'react';
import { Link } from "react-router-dom";
import Context from '../Context';
import yogurt from '../assets/Yogurt.svg';
import cereal from '../assets/Cereal.svg';
import banana from '../assets/Banana.svg';
import eggs from '../assets/Eggs.svg';


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
    <div className="w-full h-full flex flex-col justify-center gap-y-10">
        <div className="question">
          Что будет есть {name} на завтрак?
        </div>
        <div className="text-ui text-center text-xl tracking-tight">
          Вы выбрали: {meal.replace(/^\w/, c => c.toUpperCase())}
        </div>
      <div className="flex items-center justify-center flex-col gap-y-1">
        <div className="flex flex-row gap-x-1">
          <img className="flex-shrink" src={eggs} alt="Яйца" onClick={onClick('Яйца')} />
          <img className="flex-shrink" src={yogurt} alt="Йогурт" onClick={onClick('Йогурт')} />
        </div>
        <div className="flex flex-row gap-x-1">
          <img className="flex-shrink" src={cereal} alt="Хлопья" onClick={onClick('Хлопья')} />
          <img className="flex-shrink" src={banana} alt="Банан" onClick={onClick('Банан')} />
        </div>
      </div>
      <Link
        to="/schedule"
        onClick={checkAnswer}
        className={"px-5 py-3 mx-auto text-lg bg-ui rounded-2xl text-white text-button" + (!name ? " disabled" : "")}
      >
        Дальше
      </Link>
    </div>
  );
}

export default Breakfast;
