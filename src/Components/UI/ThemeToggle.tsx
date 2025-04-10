import { Moon, Sun } from "lucide-react";
import { useThemeStore } from "@/Stores";

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle:React.FC<ThemeToggleProps> = ({ className }) => {
  const { theme, toggleTheme } = useThemeStore();
  return (
    <button className={`${className || ""} z-50`} onClick={toggleTheme}>
      {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;
