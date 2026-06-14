import { createContext, useState, useContext } from "react";

const DataContext = createContext();

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData must be used within DataProvider");
  return context;
};

export const DataProvider = ({ children }) => {
  const [dataType, setDataType] = useState(null); // 'users', 'products', 'carts'
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null); // for modal/detail view

  return (
    <DataContext.Provider
      value={{
        dataType,
        setDataType,
        data,
        setData,
        loading,
        setLoading,
        error,
        setError,
        selectedItem,
        setSelectedItem,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
