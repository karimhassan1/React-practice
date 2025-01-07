import { createContext } from "react";
const userContext = createContext({
  user: {
    name: "karim Hassan",
    email: "Karimhassan263372@gmail.com",
  },
});
export default userContext;
