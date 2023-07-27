"use client";

import React, { createContext, useContext, useState } from "react";

type CounterType = {
  plus: () => void;
  less: () => void;
  counter: number;
};

const CounterContext = createContext({} as CounterType);

const CounterProvider = ({ children }: { children: React.ReactNode }) => {
  const [counter, setCounter] = useState(0);

  const plus = () => setCounter((count) => count + 1);

  const less = () => setCounter((count) => count - 1);

  return (
    <CounterContext.Provider value={{ counter, plus, less }}>
      {children}
    </CounterContext.Provider>
  );
};

const useCounter = () => useContext(CounterContext);

export { CounterProvider, useCounter };
