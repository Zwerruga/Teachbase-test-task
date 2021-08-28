import React, { memo } from "react";
import { Link } from "react-router-dom";

export default memo(function home() {
  return (
    <div className="home">
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  );
});
