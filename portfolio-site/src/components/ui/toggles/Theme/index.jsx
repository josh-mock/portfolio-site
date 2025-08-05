"use client";
import { useEffect, useState } from "react";
import MoonIcon from "../../icons/Moon";
import SunIcon from "../../icons/Sun";

export default function ThemeToggle({ className = "" }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (theme === "dark-mode") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme((prev) => (prev === "dark-mode" ? "light" : "dark-mode"));
  };

  return (
    <button
      onClick={handleThemeToggle}
      className={className}
      aria-label="Toggle Theme"
    >
      {theme === "dark-mode" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
