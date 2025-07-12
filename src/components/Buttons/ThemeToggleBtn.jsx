import { useEffect, useState } from "react";
import MoonIcon from "../Icons/MoonIcon";
import SunIcon from "../Icons/SunIcon";

export default function ThemeToggleBtn({ className = "" }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

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
