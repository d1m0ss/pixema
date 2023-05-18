import { FC, ReactNode, createContext, useContext, useState } from "react";

type theme = "light" | "dark";

interface IAppContext {
  theme: theme;
  searchValue: string;
  toggleTheme: () => void;
  isDarkTheme: () => boolean;
  setSearchTitle: (value: string) => void;
}

export const AppContext = createContext<IAppContext>({
  theme: "light",
  searchValue: "",
  toggleTheme: () => {},
  isDarkTheme: () => false,
  setSearchTitle: () => {},
});

interface IAppProvider {
  children: ReactNode;
}

export const AppProvider: FC<IAppProvider> = ({ children }) => {
  const [theme, setTheme] = useState<theme>("light");
  const [searchValue, setSearchValue] = useState<string>("Astronaut");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const isDarkTheme = () => theme === "dark";
  const setSearchTitle = (value: string) => setSearchValue(value === "" ? "Astronaut" : value);

  return <AppContext.Provider value={{ theme, searchValue, toggleTheme, isDarkTheme, setSearchTitle }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
