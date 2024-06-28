import { createContext } from "react";

const userContext = createContext({
    isLoggedUser : "Default User",
});

export default userContext;