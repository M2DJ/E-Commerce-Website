import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import ProductsCard from "../ProductsCard";
import { useCartContext } from "../../context/CartContext";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { cart } = useCartContext();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const res = await getProducts();
        setProducts(res);
        setError(null);
      } catch (err) {
        setError("Failed to load products");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (error) {
    return <div></div>;
  }

  console.log(cart);

  return (
    <div className="p-3 mb-10">
      {error && <p>{error}</p>}
      <div className="grid grid-cols-5 gap-3 justify-items-center-safe">
        {loading ? (
          <p>Loading...</p>
        ) : (
          products &&
          products["products"] &&
          products["products"].map((pro) => (
            <ProductsCard product={pro} key={pro.id} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
