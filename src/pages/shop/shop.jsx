import React, { useContext, useEffect } from "react";
import axios from "axios";
import { ShopContext } from "../../context/shop-context";
import { Product } from "./product";
import "./shop.css";
import { TextField } from "@mui/material";

const CategorySortButton = ({ categoryId, children }) => {
  const { setSelectedCategory } = useContext(ShopContext);

  const handleSortByCategory = () => {
    setSelectedCategory(categoryId);
  };

  return (
    <button className="button" onClick={handleSortByCategory}>
      {children}
    </button>
  );
};

export const Shop = () => {
  const { filteredProducts, setFilteredProducts } = useContext(ShopContext);

  useEffect(() => {
    axios
      .get("https://api.jsonbin.io/v3/b/6583208e1f5677401f110220")
      .then((response) => {
        setFilteredProducts(response.data.record);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [setFilteredProducts]);

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1></h1>
        <div className="button-container">
          <CategorySortButton className="button" categoryId={1}>
            Kitchen
          </CategorySortButton>
          <CategorySortButton className="button" categoryId={2}>
            Garden
          </CategorySortButton>
          <CategorySortButton className="button" categoryId={3}>
            Pets
          </CategorySortButton>
          <CategorySortButton className="button" categoryId={4}>
            Clothing
          </CategorySortButton>
          <CategorySortButton className="button" categoryId={6}>
            Office
          </CategorySortButton>
          <CategorySortButton className="button" categoryId={7}>
            Car
          </CategorySortButton>
          <CategorySortButton className="button" categoryId={8}>
            Seasonal
          </CategorySortButton>
        </div>
      </div>

      <div className="bar">
        <TextField
          id="outlined-basic"
          label="Search Products"
          variant="outlined"
        />
      </div>

      <div className="products">
        {filteredProducts.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};
