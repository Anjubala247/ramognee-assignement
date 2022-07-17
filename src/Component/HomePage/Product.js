import React from "react";
import "./index.css";

function Product(props) {
  const onAddItemToCart = () => {
    props.addItem(props.productData);
  };

  const onDecrementQuantity = () => {
    props.DecrementQuantity(props.id);
  };

  const isProductInCart = props.cartList.find((item) => item.id === props.id);
  return (
    <>
      <div className="product-container">
        <img alt="example" src={props.image} width="100%" height="200px" />

        <div className="product-title">{props.title}</div>
        {!!props.price && (
          <div className="product-price">
            <div>Rs {props.price} </div>
          </div>
        )}

        {isProductInCart ? (
          <div className="product-add_to_cart-btn">
            <span onClick={onDecrementQuantity}>-</span>
            <span>{isProductInCart.quantity}</span>
            <span onClick={onAddItemToCart}>+</span>
          </div>
        ) : (
          <button onClick={onAddItemToCart} className="product-add_to_cart-btn">
            Add to Cart
          </button>
        )}
      </div>
    </>
  );
}

export default Product;
