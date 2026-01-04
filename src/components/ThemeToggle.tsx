import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className={cn(
        "relative w-10 h-10 rounded-full transition-colors",
        "hover:bg-bg-subtle border border-border-subtle"
      )}
      aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
    >
      <Sun className={cn(
        "absolute w-5 h-5 transition-all",
        theme === "light" ? "rotate-0 opacity-100" : "rotate-90 opacity-0"
      )} />
      <Moon className={cn(
        "absolute w-5 h-5 transition-all",
        theme === "dark" ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
      )} />
    </Button>
  );
};

export default ThemeToggle;

