import React from 'react';

function Intro() {
  return (
    <div className="w-full h-full flex flex-col justify-center gap-y-20">
      <div className="text-2xl leading-relaxed text-ui text-center">
        В этом квесте тебе предстоит принимать решения за .
      </div>
      <button className="mx-auto text-lg w-fit px-5 py-3 bg-ui rounded-2xl text-white text-button">
        Дальше
      </button>
    </div>
  );
}

export default Intro;
