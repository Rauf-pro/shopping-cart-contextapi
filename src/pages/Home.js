import "./Home.css";
import products from "../data";
import ProductCart from "../components/productCart/ProductCart";

const Home = () => {
  return (
    <div className="products__wrapper">
      {products.map((product) => (
        <ProductCart key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
