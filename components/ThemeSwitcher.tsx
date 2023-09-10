"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {BsFillMoonStarsFill, BsFillSunFill} from 'react-icons/bs'

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const circleStyle = {
    backgroundColor: resolvedTheme === "light" ? "#F7F7F7" : "#1F1F1F",
  };

  const labelStyle = {
    backgroundColor: resolvedTheme === "light" ? "#E2E2E2" : "#2E2E2E",
    color: resolvedTheme === "light" ? "#38B8FF" : "#F8B4E3",
  };

  return (
    <label
      htmlFor="check"
      className="bg-gray relative w-[54px] h-[32px] rounded-full flex items-center cursor-pointer"
      style={labelStyle}
    >
      <input
        type="checkbox"
        id="check"
        className="sr-only peer"
        checked={resolvedTheme === "dark"}
        onChange={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      />
      <span
        className="w-[26px] h-[26px] absolute rounded-full left-1 top-1/2 transform -translate-y-1/2 peer-checked:left-6 transition-all duration-500 flex items-center justify-center"
        style={circleStyle}
      >
        {resolvedTheme === "dark" ? <BsFillMoonStarsFill color="#F8B4E3" size="15"/> : <BsFillSunFill color="#38B8FF" size="18"/>}
      </span>
    </label>
  );
};
