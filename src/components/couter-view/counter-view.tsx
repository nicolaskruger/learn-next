"use client";

import { useCounter } from "../counter-provider/counter-provider";

const CounterView = () => {
  const { counter, less, plus } = useCounter();

  return (
    <div>
      <button onClick={less}>less</button>
      <span>{counter}</span>
      <button onClick={plus}>plus</button>
    </div>
  );
};

export { CounterView };
