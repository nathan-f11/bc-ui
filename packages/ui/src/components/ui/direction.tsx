"use client";

import * as React from "react";

type Direction = "ltr" | "rtl";

const DirectionContext = React.createContext<Direction>("ltr");

function DirectionProvider({
  dir,
  direction,
  children,
}: {
  dir?: Direction;
  direction?: Direction;
  children: React.ReactNode;
}) {
  const value = direction ?? dir ?? "ltr";
  return (
    <DirectionContext.Provider value={value}>
      <div dir={value}>{children}</div>
    </DirectionContext.Provider>
  );
}

function useDirection() {
  return React.useContext(DirectionContext);
}

export { DirectionProvider, useDirection };
