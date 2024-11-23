import { store } from "../../store";
import SingleCart from "./SingleCart";

const Home = () => {
  const productList = store.getState().productList;

  return (
    <div className="flex gap-3 flex-wrap justify-between">
      {productList.map(({ id, image, title, price, rating }) => (
        <SingleCart
          key={id}
          id={id}
          image={image}
          title={title}
          price={price}
          rating={rating}
        />
      ))}
    </div>
  );
};

export default Home;
