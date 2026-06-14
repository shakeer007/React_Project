const LoadingSpinner = () => (
  <div className="loading">
    <div
      className="spinner"
      style={{
        border: "4px solid rgba(0,0,0,0.1)",
        width: "36px",
        height: "36px",
        borderRadius: "50%",
        borderLeftColor: "#4f46e5",
        animation: "spin 1s linear infinite",
        margin: "0 auto 1rem",
      }}
    ></div>
    <p>Loading data...</p>
    <style>{`
      @keyframes spin { to { transform: rotate(360deg); } }
    `}</style>
  </div>
);
export default LoadingSpinner;
