import React, { useContext } from "react";
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
  const { filteredProducts } = useContext(ShopContext);

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
          <CategorySortButton className="button" categoryId={5}>
            Kids
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
          <CategorySortButton className="button" categoryId={9}>
            Other
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
