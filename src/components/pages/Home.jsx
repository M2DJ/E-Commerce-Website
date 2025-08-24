import { useEffect, useState } from "react";
import { getCategories, getProducts } from "../../services/api";
import ProductsCard from "../ProductsCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [id, setId] = useState(0);
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

    loadProducts();
  }, []);

  useEffect(() => {
    const loadCategories = async (id) => {
      try {
        setLoading(true);
        const res = await getCategories(id);
        setCategories(res);
        setError(null);
      } catch (err) {
        setError("Failed to load categories");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    loadCategories(id);
  }, [id]);

  const handleCategories = (id) => {
    id === 0 ? setCategories(products) : setId(id);
  }

  if (error) {
    return (
      <div className="w-full mt-30 flex flex-col items-center">
        <p className="text-4xl font-bold text-red-500 mb-3">{error}</p>
        <p className="text-xl">Check back later</p>
      </div>
    );
  }

  return (
    <div className="p-3 mb-10 flex">
      <div>
        <p className="mb-1">Categories</p>
        <ul className="ml-4">
          <li>
            <button onClick={() => handleCategories(0)}>All</button>
          </li>
          <li>
            <button onClick={() => handleCategories(1)}>Clothes</button>
          </li>
          <li>
            <button onClick={() => handleCategories(3)}>Furniture</button>
          </li>
          <li>
            <button onClick={() => handleCategories(2)}>Electronics</button>
          </li>
          <li>
            <button onClick={() => handleCategories(4)}>Shoes</button>
          </li>
          <li>
            <button onClick={() => handleCategories(5)}>Miscellaneous</button>
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-3 gap-3 justify-items-center-safe grow-2">
        {loading && <p>Loading...</p>}
        {id === 0
          ? products.map((pro) => <ProductsCard product={pro} key={pro.id} />)
          : categories.map((pro) => (
              <ProductsCard product={pro} key={pro.id} />
            ))}
      </div>
    </div>
  );
};

export default Home;
