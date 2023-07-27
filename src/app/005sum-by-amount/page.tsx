"use client";

import { useSumAmount } from "@/components/sum-by-amount-provider/sum-by-amount-provider";
import { useState } from "react";

const SumByAmount = () => {
  const { amount, sum } = useSumAmount();

  const [text, setText] = useState("1");

  const handleClick = () => {
    const numb = Number(text);

    sum(numb);
  };

  return (
    <div>
      <input
        className="text-black"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleClick}>sum</button>
      <span>{amount}</span>
    </div>
  );
};

export default SumByAmount;
