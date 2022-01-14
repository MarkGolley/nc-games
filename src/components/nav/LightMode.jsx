import React, { useState } from "react";

const LightMode = ({ children }) => {
  const [lightMode, setLightMode] = useState(false);

  const toggleMode = () => setLightMode((curr) => !curr);

  return (
    <div>
      <button onClick={toggleMode}>{lightMode ? "Light" : "Dark"}</button>
    </div>
  );
};

export default LightMode;
