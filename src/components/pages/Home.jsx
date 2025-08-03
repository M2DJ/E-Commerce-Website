import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      try{
        const res = await getProducts();
        setProducts(res);
      } catch(err) {
        setError(err);
        console.log(err);
      }
    };

    loadProducts();
  }, []);
  console.log(products);
  return <div>
    <ul></ul>
  </div>;
};

export default Home;
