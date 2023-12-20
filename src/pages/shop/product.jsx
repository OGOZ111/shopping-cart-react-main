import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import Swal from "sweetalert2";
import "./product.css";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  const shownotif = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Item added to cart",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleClickTryMe = () => {
    Swal.fire({
      title: "Product Details",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper commodo lectus, vel interdum elit volutpat in. Nulla facilisi. Quisque dapibus, libero a commodo venenatis, sem turpis euismod augue, non dignissim libero tortor at nisl. Fusce a nunc vel velit vehicula accumsan. Morbi bibendum, risus vel varius bibendum, ligula sem viverra nunc, vel efficitur elit justo eu quam. Maecenas tincidunt consequat purus, eu bibendum quam iaculis vitae.",
    });
  };

  return (
    <div className="product">
      <img onClick={handleClickTryMe} src={productImage} alt={productName} />
      <div className="hover-text">Click for details</div>
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>€{price}</p>
      </div>
      <button
        className="addToCartBttn"
        onClick={() => {
          addToCart(id);
          shownotif();
        }}
      >
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
