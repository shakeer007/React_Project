import { useState } from "react";

const CartCard = ({ cart, onClick }) => {
  const [expanded, setExpanded] = useState(false);
  const totalItems = cart.products.reduce((sum, p) => sum + p.quantity, 0);

  return (
    <div className="card" onClick={() => onClick(cart)}>
      <div className="card-content">
        <h3>🛒 Cart #{cart.id}</h3>
        <p>👤 User ID: {cart.userId}</p>
        <p>📦 Items: {totalItems}</p>
        <p>💵 Total: ${cart.total}</p>
        <p>🏷️ Discounted: ${cart.discountedTotal}</p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setExpanded(!expanded);
          }}
          style={{
            marginTop: "0.5rem",
            background: "#4f46e5",
            color: "white",
            border: "none",
            padding: "0.3rem 0.8rem",
            borderRadius: "20px",
            cursor: "pointer",
          }}
        >
          {expanded ? "Hide Products" : "Show Products"}
        </button>
        {expanded && (
          <ul style={{ marginTop: "0.8rem", paddingLeft: "1rem" }}>
            {cart.products.map((p) => (
              <li key={p.id}>
                {p.title} - Qty: {p.quantity} - ${p.total}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default CartCard;
