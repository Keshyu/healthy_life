import React from "react";

interface IContext {
  name: string,
  setName: (name: string) => void,
  age: number,
  liveUp: () => void,
}

export const initContext = { age: 40 };

const Context = React.createContext<Partial<IContext>>(initContext);

export default Context;
