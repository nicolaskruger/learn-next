"use client";
import React, { createContext, useContext, useState } from "react";

type SumByAmountType = {
  amount: number;
  sum: (amount: number) => void;
};

const SumByAmountContext = createContext({} as SumByAmountType);

const SumByAmountProvider = ({ children }: { children: React.ReactNode }) => {
  const [amount, setAmount] = useState(0);

  const sum = (value: number) => {
    setAmount((a) => a + value);
  };

  return (
    <SumByAmountContext.Provider value={{ amount, sum }}>
      {children}
    </SumByAmountContext.Provider>
  );
};

const useSumAmount = () => useContext(SumByAmountContext);

export { SumByAmountProvider, useSumAmount };
