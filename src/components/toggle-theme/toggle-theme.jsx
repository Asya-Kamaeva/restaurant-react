import { useTheme } from "../theme-context/use-theme";
import Button from "../button/button";

export const ToggleTheme = () => {
  const { toggleTheme } = useTheme();

  return <Button text={"Toggle Theme"} action={toggleTheme} />;
};
