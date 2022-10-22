import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <button>
        <Link to="/todo">TodoDescription</Link>
      </button>
      <button>
        <Link to="/login">TodoLogin</Link>
      </button>
      <button>
        <Link to="/signup">TodoSignup</Link>
      </button>
    </div>
  );
};

export default Navigation;
