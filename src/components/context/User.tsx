import { useContext } from "react";
import { UserContext } from "./UserContext";

export const User = () => {
  const userContext = useContext(UserContext);
  const handlLogin = () => {
    userContext.setUser({
      name: "John doe",
      email: "johndoe@example.com",
    });
  };
  const handlLogout = () => {
    userContext.setUser(null);
  };

  return (
    <div>
      <button onClick={handlLogin}>Login</button>
      <button onClick={handlLogout}>Logout</button>
      <div>User name is:{userContext.user?.name}</div>
      <div>User email is:{userContext.user?.email}</div>
    </div>
  );
};
