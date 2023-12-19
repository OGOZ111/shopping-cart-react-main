import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { House } from "phosphor-react";

export const Header = () => {
  return (
    <>
      <header>
        <div className="header">
          <div className="header_left">
            <Link to="/"> </Link>
            <img
              className="logo"
              src="/images/Bluegency_White.svg"
              alt="bluegency"
            />
            <div className="headerMenu">
              <button id="menu">
                Menu{" "}
                <img
                  className="dropdown"
                  src="images/dropdown_icon.png"
                  alt="dropdown"
                />
              </button>
              <div className="dropdown_header">
                <a href="">Kitchen</a>
                <a href="">Garden</a>
                <a href="">Pets</a>
                <a href="">Clothing</a>
                <a href="">Kids</a>
                <a href="">Office</a>
                <a href="">Car</a>
                <a href="">Seasonal</a>
              </div>
            </div>
          </div>

          <div className="header_center">
            <input className="searchBar" type="search" placeholder="Search" />
            <button className="searchButton">
              <img
                className="search-icon"
                src="\images\searchIcon.png"
                alt="search"
              />
            </button>
          </div>

          <div className="header_right">
            <Link to="/user">
              <img className="user" src="\images\userIcon.png" alt="user" />
            </Link>

            <Link to="/">
              <House size={32} />
            </Link>

            <div className="checkout1">
              <div className="cart-count1">
                <Link to="/cart">
                  <img
                    className="cart1"
                    src="\images\shoppingCart.png"
                    alt="cart"
                  />
                </Link>

                <div className="items-count1">3</div>
              </div>
              <div className="price1">€ 0.00</div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
