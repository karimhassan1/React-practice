import { useContext, useState } from "react";
import userContext from "./userContext";
const createContext = () => {
  const { user, setUser } = useContext(userContext);
  return (
    <div className="m-10">
      <div>
        <span>For Name:</span>
        <input
          type="text"
          value={user.name}
          className="ms-1 ps-1 border"
          onChange={(e) => setUser({ name: e.target.value, email: user.email })}
        />
        <span className="ms-10">For Email:</span>
        <input
          type="text"
          value={user.email}
          className="border ms-1 ps-1"
          onChange={(e) => setUser({ name: user.name, email: e.target.value })}
        />
      </div>
      <div>
        <span>Name : {user.name}</span>
        <span className="ms-5">Email : {user.email}</span>
      </div>
    </div>
  );
};
export default createContext;
