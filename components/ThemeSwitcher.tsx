"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Moon from "./icons/Moon";
import Sun from "./icons/Sun";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const circleStyle = {
    backgroundColor: theme === "light" ? "#F7F7F7" : "#1F1F1F",
  };

  const labelStyle = {
    backgroundColor: theme === "light" ? "#E2E2E2" : "#2E2E2E",
    color: theme === "light" ? "#38B8FF" : "#F8B4E3",
  };

  return (
    <label
      htmlFor="check"
      className="bg-gray relative w-[54px] h-[32px] rounded-full flex items-center"
      style={labelStyle}
    >
      <input
        type="checkbox"
        id="check"
        className="sr-only peer"
        checked={theme === "dark"}
        onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <span
        className="w-[26px] h-[26px] absolute rounded-full left-1 top-1/2 transform -translate-y-1/2 peer-checked:left-6 transition-all duration-500 flex items-center justify-center"
        style={circleStyle}
      >
        {theme === "dark" ? <Moon /> : <Sun />}
      </span>
    </label>
  );
};
