'use client';

import React, { useRef, createContext, useContext } from "react";

export const ThemeContainerContext = createContext<React.RefObject<HTMLDivElement | null> | null>(null);

export function useThemeContainer() {
  return useContext(ThemeContainerContext);
}

export default function ThemesLayout({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <ThemeContainerContext.Provider value={containerRef}>
      <div
        ref={containerRef}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          overflowY: "auto",
          background: "transparent",
        }}
      >
        {children}
      </div>
    </ThemeContainerContext.Provider>
  );
}
