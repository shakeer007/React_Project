import { useState } from "react";

const ProductCard = ({ product, onClick }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="card" onClick={() => onClick(product)}>
      <img
        src={
          imgError
            ? "https://via.placeholder.com/300x200?text=No+Image"
            : product.thumbnail
        }
        alt={product.title}
        className="card-image"
        onError={() => setImgError(true)}
      />
      <div className="card-content">
        <h3>{product.title}</h3>
        <p>🏷️ {product.brand}</p>
        <p>
          💰 ${product.price}{" "}
          {product.discountPercentage > 0 && (
            <span
              style={{ textDecoration: "line-through", fontSize: "0.8rem" }}
            >
              $
              {(product.price * (1 + product.discountPercentage / 100)).toFixed(
                2,
              )}
            </span>
          )}
        </p>
        <p>
          ⭐ {product.rating} | 📦 Stock: {product.stock}
        </p>
        <p>📂 {product.category}</p>
        {product.tags && <p>🔖 {product.tags.slice(0, 2).join(", ")}</p>}
      </div>
    </div>
  );
};

export default ProductCard;
