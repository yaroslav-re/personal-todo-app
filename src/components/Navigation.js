import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const clearLocalStorage = () => {
    window.localStorage.clear();
    window.location.reload();
  };

  return (
    <div>
      <button
        onClick={() => {
          clearLocalStorage();
        }}
        className="text-white/50 text-lg hover:text-white/75"
      >
        Log Out
      </button>
    </div>
  );
};

export default Navigation;
