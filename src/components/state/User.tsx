import { useState } from "react";

type AuthUser = {
  name: string;
  mailId: string;
};

export const User = () => {
  const [user, setUser] = useState<null | AuthUser>(null);
  const handleLogin = () => {
    setUser({
      name: "Rejo",
      mailId: "someone@gmail.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is:{user?.name}</div>
      <div>User email is{user?.mailId}</div>
    </div>
  );
};
