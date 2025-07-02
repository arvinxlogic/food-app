import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Default User",
  setLoggedInUser: () => {}, // Add setter function
});

export default UserContext;
