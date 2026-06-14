import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <header className="premium-header">
      <div className="header-logo">✨ React Project</div>
      <nav className="header-nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <button
        className={`theme-btn ${isDark ? "dark" : "light"}`}
        onClick={() => setIsDark(!isDark)}
      >
        {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
