import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export const useTheme = () => {
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    // Initialize theme from localStorage or system preference
    const stored = localStorage.getItem("anamta-theme") as Theme | null;
    if (stored && (stored === "light" || stored === "dark")) {
      setThemeState(stored);
      document.documentElement.setAttribute("data-theme", stored);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initialTheme: Theme = prefersDark ? "dark" : "light";
      setThemeState(initialTheme);
      document.documentElement.setAttribute("data-theme", initialTheme);
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("anamta-theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const toggleTheme = () => {
    const newTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return { theme, setTheme, toggleTheme };
};

