const About = () => {
  const techStack = [
    "React 18",
    "Vite",
    "React Router v6",
    "Context API",
    "Fetch API",
    "CSS3 (Glassmorphism)",
  ];

  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About This Project</h1>
        <p>Built with ❤️ to demonstrate advanced React patterns</p>
      </div>

      <div className="about-content">
        <div className="about-card">
          <h2>🎯 Purpose</h2>
          <p>
            This application serves as a comprehensive demo of React hooks,
            Context API, routing, and API data fetching with a beautiful,
            premium user interface.
          </p>
        </div>

        <div className="about-card">
          <h2>🛠️ Tech Stack</h2>
          <div className="tech-stack">
            {techStack.map((tech) => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="about-card">
          <h2>📦 Data Sources</h2>
          <p>
            All data is fetched from{" "}
            <a
              href="https://dummyjson.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              DummyJSON
            </a>{" "}
            – a free fake REST API.
          </p>
          <ul>
            <li>Users (with images, addresses, hair/eye color)</li>
            <li>Products (thumbnails, prices, ratings, tags)</li>
            <li>Carts (nested products, totals)</li>
            <li>Posts (titles, bodies, reactions)</li>
            <li>Recipes (images, cuisine, difficulty)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
