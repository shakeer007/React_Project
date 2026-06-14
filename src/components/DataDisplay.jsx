import { useEffect, useRef } from "react";
import { useData } from "../context/DataContext";
import { fetchData } from "../utils/api";
import UserCard from "./UserCard";
import ProductCard from "./ProductCard";
import CartCard from "./CartCard";
import PostCard from "./PostCard";
import RecipeCard from "./RecipeCard";
import LoadingSpinner from "./LoadingSpinner";

const DataDisplay = () => {
  const {
    dataType,
    data,
    setData,
    loading,
    setLoading,
    error,
    setError,
    setSelectedItem,
  } = useData();
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!dataType) return;

    const loadData = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await fetchData(dataType);
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [dataType, setData, setLoading, setError]);

  useEffect(() => {
    if (!loading && data && data.length > 0 && sectionRef.current) {
      setTimeout(() => {
        sectionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [loading, data]);

  if (!dataType) {
    return (
      <div className="placeholder">
        👈 Select an option from sidebar to view data
      </div>
    );
  }

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="error">❌ Error: {error}</div>;
  if (!data || data.length === 0)
    return <div className="placeholder">No data found</div>;

  const handleCardClick = (item) => {
    setSelectedItem(item);
    alert(
      `Clicked on ${dataType.slice(0, -1)}: ${item.title || item.name || item.firstName || `Cart ${item.id}`}\nCheck console for full object`,
    );
    console.log("Selected item:", item);
  };

  const renderCard = (item) => {
    switch (dataType) {
      case "users":
        return <UserCard key={item.id} user={item} onClick={handleCardClick} />;
      case "products":
        return (
          <ProductCard key={item.id} product={item} onClick={handleCardClick} />
        );
      case "carts":
        return <CartCard key={item.id} cart={item} onClick={handleCardClick} />;
      case "posts":
        return <PostCard key={item.id} post={item} onClick={handleCardClick} />;
      case "recipes":
        return (
          <RecipeCard key={item.id} recipe={item} onClick={handleCardClick} />
        );
      default:
        return null;
    }
  };

  return (
    <div
      id="data-display-section"
      ref={sectionRef}
      className="data-display"
      style={{ scrollMarginTop: "80px" }}
    >
      <h2>{dataType.charAt(0).toUpperCase() + dataType.slice(1)}</h2>
      <div className="data-grid">{data.map((item) => renderCard(item))}</div>
    </div>
  );
};

export default DataDisplay;
