"use client";
import MoonIcon from "@/components/ui/icons/Moon";
import SunIcon from "@/components/ui/icons/Sun";
import { useEffect, useState } from "react";

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
