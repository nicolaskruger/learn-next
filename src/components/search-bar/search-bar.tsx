"use client";

import { useState } from "react";

const SearchBar = () => {
  const [text, setText] = useState("");

  return (
    <input
      className="text-black"
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
};

export { SearchBar };
