import React, { useState, useEffect } from "react";
import Product from "./Product";

function ProductList({ setCartList, cartList }) {
  const [productList, setproductList] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetchProducts = () => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((result) => result.json())
      .then((response) => {
        setproductList(response);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addItemToCart = (product) => {
    const productExists = cartList.find((item) => {
      return item.id === product.id;
    });
    if (productExists) {
      setCartList(
        cartList.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          }

          return item;
        })
      );
    } else {
      setCartList([...cartList, { ...product, quantity: 1 }]);
    }
  };

  const DecrementQuantity = (id) => {
    const newCartList = cartList
      .map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        }

        return item;
      })
      .filter((item) => item.quantity !== 0);
    setCartList(newCartList);
  };

  return (
    <>
      <div className="product-list-page">
        <div className="product-list-category">
          <div className="product-list-title">Clothing and Accessories</div>
        </div>
        {isLoading ? (
          <div className="notify_loading">Loading....</div>
        ) : (
          <div className="product-list-container">
            {productList.map((product) => {
              return (
                <Product
                  key={product.id}
                  {...product}
                  productData={product}
                  addItem={addItemToCart}
                  DecrementQuantity={DecrementQuantity}
                  cartList={cartList}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default ProductList;
