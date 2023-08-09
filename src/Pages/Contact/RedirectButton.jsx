import React from "react";
import { Link } from "react-router-dom";

const RedirectButton = () => {
  return (
    <div>
      <Link to="/content">
        <button>Redirect to Content</button>
      </Link>
    </div>
  );
};

export default RedirectButton;
