import { createContext, useContext, useState, useEffect } from "react";
import { mockTransactions } from "../data/mockData";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(mockTransactions);
  const [role, setRole] = useState("admin");

 //toggle
  const [theme, setTheme] = useState("dark");

  // Apply theme to body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <AppContext.Provider value={{
      transactions,
      setTransactions,
      role,
      setRole,
      theme,
      setTheme
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);