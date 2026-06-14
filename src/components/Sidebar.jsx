import { useData } from "../context/DataContext";

const Sidebar = () => {
  const { setDataType, setData, setError, setSelectedItem, dataType } =
    useData();

  const handleClick = (type) => {
    setDataType(type);
    setData(null);
    setError(null);
    setSelectedItem(null);
  };

  const menuItems = [
    { type: "users", label: "👥 Users" },
    { type: "products", label: "📦 Products" },
    { type: "carts", label: "🛒 Carts" },
    { type: "posts", label: "📝 Posts" },
    { type: "recipes", label: "🍳 Recipes" },
  ];

  return (
    <aside className="sidebar">
      <h3>📁 Data Explorer</h3>
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.type}
            onClick={() => handleClick(item.type)}
            className={dataType === item.type ? "active" : ""}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
