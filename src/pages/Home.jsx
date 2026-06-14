const Home = () => {
  const features = [
    {
      icon: "⚛️",
      title: "React Hooks",
      desc: "useState, useEffect, useContext in action",
    },
    {
      icon: "🌐",
      title: "Context API",
      desc: "Global state management without prop drilling",
    },
    {
      icon: "🔄",
      title: "React Router",
      desc: "Seamless navigation between pages",
    },
    {
      icon: "📡",
      title: "API Integration",
      desc: "Fetch real data from DummyJSON",
    },
    {
      icon: "🎨",
      title: "Glassmorphism UI",
      desc: "Modern premium design system",
    },
    {
      icon: "🌙",
      title: "Dark/Light Mode",
      desc: "Toggle themes with persistence",
    },
  ];

  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>React Hooks</h1>
        <p className="hero-subtitle">
          Master modern React with Context API, Routing
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Explore Data</button>
        </div>
      </div>

      <div className="features-section">
        <h2>What's inside?</h2>
        <div className="feature-grid">
          {features.map((f, idx) => (
            <div key={idx} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="stats-section">
        <div className="stat-item">
          <span className="stat-number">5+</span>
          <span className="stat-label">Data Endpoints</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">100+</span>
          <span className="stat-label">Demo Items</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">Real-time</span>
          <span className="stat-label">API Calls</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
