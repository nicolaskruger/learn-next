"use client";

import { createContext, useContext, useState } from "react";

const SidebarContext = createContext(
  {} as { isOpen: boolean; toggle: () => void }
);

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <SidebarContext.Provider value={{ isOpen, toggle }}>
      <SidebarNav />
    </SidebarContext.Provider>
  );
}

function SidebarNav() {
  let { isOpen, toggle } = useContext(SidebarContext);

  return (
    <div>
      <p>Home</p>
      <button onClick={toggle}>toggle</button>
      {isOpen && <span>side bar</span>}
    </div>
  );
}
