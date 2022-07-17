import React, { useState } from "react";
import Navbar from "./Navbar";
import ProductList from "./ProductList";

function HomePage() {
  const [cartList, setCartList] = useState([]);
  return (
    <>
      <div>
        <Navbar count={cartList.length} />
        <ProductList setCartList={setCartList} cartList={cartList} />
      </div>
    </>
  );
}

export default HomePage;
