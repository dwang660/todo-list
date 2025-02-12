import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-pink-500 to-pink-400 text-white text-center p-6 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold tracking-wide uppercase">
        My Todo List
      </h1>
      <p className="text-sm mt-2 opacity-80">Stay orgnized and productive ✨</p>
    </header>
  );
};

export default Header;
