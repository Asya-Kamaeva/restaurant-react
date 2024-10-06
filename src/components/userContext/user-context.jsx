import { useState } from "react";
import { UserContext } from ".";

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const addUser = () => setUser("Alex");
  const resetUser = () => setUser("");
  return (
    <UserContext.Provider value={{ user, addUser, resetUser }}>
      {children}
    </UserContext.Provider>
  );
};
