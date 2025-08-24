import { useEffect, useState } from "react";
import { getCategories, getProducts } from "../../services/api";
import ProductsCard from "../ProductsCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [id, setId] = useState(1);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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

    const loadCategories = async (id) => {
      try {
        setLoading(true);
        const res = await getCategories(id);
        setProducts(res);
        setError(null);
      } catch (err) {
        setError("Failed to load categories");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
    loadCategories(id);
  }, [id]);

  if (error) {
    return (
      <div className="w-full mt-30 flex flex-col items-center">
        <p className="text-4xl font-bold text-red-500 mb-3">{error}</p>
        <p className="text-xl">Check back later</p>
      </div>
    );
  }

  return (
    <div className="p-3 mb-10">
      <div>
        <ul>
          <li>
            <button onClick={() => setId(0)}>All</button>
          </li>
          <li>
            <button onClick={() => setId(1)}>Clothes</button>
          </li>
          <li>
            <button onClick={() => setId(3)}>Furniture</button>
          </li>
          <li>
            <button onClick={() => setId(2)}>Electronics</button>
          </li>
          <li>
            <button onClick={() => setId(4)}>Shoes</button>
          </li>
          <li>
            <button onClick={() => setId(5)}>Miscellaneous</button>
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-3 gap-3 justify-items-center-safe">
        {loading && <p>Loading...</p>}
        {products.map((pro) => (
          <ProductsCard product={pro} key={pro.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
