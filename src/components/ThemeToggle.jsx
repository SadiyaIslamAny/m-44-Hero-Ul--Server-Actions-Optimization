"use client";
import { useTheme } from "next-themes";
import { Sun, Moon } from "@gravity-ui/icons";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="flex items-center gap-2"
    >
      {theme === "dark" ? (
        <Sun className="size-5" />
      ) : (
        <Moon className="size-5" />
      )}
    </button>
  );
};

export default ThemeToggle;