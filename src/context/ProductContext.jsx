/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import data from "../context/data.json"; // Import the JSON data directly

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(data); // Initialize directly with data
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);




  useEffect(() => {
    // Set categories from the data
    const uniqueCategories = [
      "all",
      ...new Set(data.map((product) => product.category)),
    ];
    setCategories(uniqueCategories);
  }, []);

  useEffect(() => {
    // Filter products whenever the selected category changes
    if (selectedCategory === "all") {
      setFilteredProducts(data);
    } else {
      setFilteredProducts(
        data.filter((product) => product.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        // Update quantity or just return existing cart (implementation may vary)
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <ProductContext.Provider
      value={{
        selectedProduct,
        setSelectedProduct,
        cart,
        addToCart,
        setCart,
        filteredProducts,
        categories,
        selectedCategory,
        setSelectedCategory,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
