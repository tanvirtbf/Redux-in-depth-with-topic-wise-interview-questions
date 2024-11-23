import React from "react";
import "./App.css";
import Product from "./components/Product";
import { store } from "./store/script";
import { useSelector } from "react-redux";

const App = () => {

  const productsList = useSelector((state) => state.products)

  return (
    <div className="products-container">
      {productsList.map(({ id, title, rating, price, image }) => (
        <Product
          key={id}
          title={title}
          rating={rating.rate}
          price={price}
          imageUrl={image}
        />
      ))}
    </div>
  );
};

export default App;
