import React from "react";
import Product from "./components/Product";
import { productsList } from "./store/productsList";
import './App.css'

const App = () => {
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
