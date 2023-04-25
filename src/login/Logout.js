import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  return (
    <div className="center">
      <h1>
        Logout
        <br />
        LogoutLogoutLogoutLogoutLogout
      </h1>
      <button onClick={() => navigate("/")}>back to home page</button>
    </div>
  );
};

export default Logout;
