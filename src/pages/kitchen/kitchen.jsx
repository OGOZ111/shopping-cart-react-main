import React from "react";
import { KITCHENPRODUCTS } from "../../products";
import { Product } from "../kitchen/product";
import "./kitchen.css";

export const Shop2 = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Kitchen</h1>
      </div>

      <div className="products">
        {KITCHENPRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
