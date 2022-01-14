import React, { useState } from "react";

const Login = ({ children }) => {
  const [login, setLogin] = useState(false);

  const toggleMode = () => setLogin((curr) => !curr);

  return (
    <div>
      <button onClick={toggleMode}>{login ? "Logout" : "Login"}</button>
    </div>
  );
};

export default Login;
