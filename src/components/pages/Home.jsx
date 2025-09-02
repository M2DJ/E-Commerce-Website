import { useEffect, useRef, useState } from "react";
import {
  checkCategories,
  getCategories,
  getProducts,
} from "../../services/api";
import ProductsCard from "../ProductsCard";
import DarkMode from "../DarkMode";
import { useCartContext } from "../../context/CartContext";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [id, setId] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const checkIdOfCategoriesRef = useRef([]);

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

  useEffect(() => {
    const loadCheckcategories = async () => {
      try {
        const res = await checkCategories();

        checkIdOfCategoriesRef.current.length = 0;
        for (let i = 0; i < 5; i++) {
          checkIdOfCategoriesRef.current.push({
            id: res[i].id,
            name: res[i].name,
          });
        }
      } catch (e) {
        console.log(e);
      }
    };

    loadCheckcategories();
  }, []);

  const handleCategories = (id) => {
    if (id === 0) {
      setCategories(products);
      setId(0);
    } else {
      setId(id);
    }
  };

  if (error) {
    return (
      <div className="w-full mt-30 flex flex-col items-center">
        <p className="text-4xl font-bold text-red-500 mb-3">{error}</p>
        <p className="text-xl">Check back later</p>
      </div>
    );
  }
  
  return (
    <div className=''>
      <div className='p-3 mb-10 flex'>
        <div className="w-35">
          <p className="mb-1 text-xl font-bold">Categories</p>
          <ul className="ml-4 text-lg">
            <li>
              <button
                className={`w-35 text-start hover:font-semibold ${
                  id == 0
                    ? "bg-gradient-to-r from-blue-500 to-white-500 text-white pl-1 font-semibold transition-all duration-200 ease-in-out"
                    : ""
                }`}
                onClick={() => handleCategories(0)}
              >
                All
              </button>
            </li>
            {checkIdOfCategoriesRef.current.map((cat) => (
              <li key={cat.id} className={`w-35 text-start hover:font-semibold ${
                  id == cat.id
                    ? "bg-gradient-to-r from-blue-500 to-white-500 text-white pl-1 font-semibold transition-all duration-200 ease-in-out"
                    : ""
                }`}>
                <button onClick={() => handleCategories(cat.id)}>
                  {cat.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-3 gap-y-5 justify-items-center-safe grow-2">
          {loading && <p>Loading...</p>}
          {id === 0
            ? products.map((pro) => <ProductsCard product={pro} key={pro.id} />)
            : categories.map((pro) => (
                <ProductsCard product={pro} key={pro.id} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
