import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import ProductsCard from "../ProductsCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const res = await getProducts();
        setProducts(res);
      } catch (err) {
        setError(err);
        console.log(err);
      }
    };

    loadProducts();
  }, []);

  return (
    <div className="p-3">
      <div className="grid grid-cols-5 gap-3 justify-items-center-safe">
        {products&&products['products']&&products['products'].map(pro=><ProductsCard product={pro} key={pro.id}/>)}
      </div>
    </div>
  );
};

export default Home;
