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

  console.log(cart);
  
  if(error){
    return <div className="w-full mt-30 flex flex-col items-center">
      <p className="text-4xl font-bold text-red-500 mb-3">{error}</p>
      <p className="text-xl">Check back later</p>
    </div>
  }

  return (
    <div className="p-3 mb-10">
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
