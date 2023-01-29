import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <button>
        <Link
          to="/login"
          className="text-white/50 text-lg hover:text-white/75 pr-4"
        >
          Log In
        </Link>
      </button>
      <button>
        <Link
          to="/signup"
          className="text-white/50 text-lg hover:text-white/75"
        >
          Sign Up
        </Link>
      </button>
    </div>
  );
};

export default Navigation;
