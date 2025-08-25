import { useEffect, useState } from "react";
import { checkCategories, getCategories, getProducts } from "../../services/api";
import ProductsCard from "../ProductsCard";
import ContactUs from "../ContactUs";

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

  useEffect(() => {
    const loadCheckcategories = async() => {
      try{
        const res = await checkCategories();
        console.log(res);
      } catch(e) {
        console.log(e);
      }
    }

    loadCheckcategories();
  }, [])

  const handleCategories = (id) => {
    if(id === 0){
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
    <div className="p-3 mb-10 flex">
      <div className="w-35">
        <p className="mb-1 text-xl font-bold">Categories</p>
        <ul
          className={`
                        ml-4 
                        text-lg
                        `}
        >
          <li>
            <button
              className={`w-35 text-start hover:font-semibold ${id == 0 ? 'bg-gradient-to-r from-blue-500 to-white-500 text-white pl-1 font-semibold' : ''}`}
              onClick={() => handleCategories(0)}
            >
              All
            </button>
          </li>
          <li>
            <button
              className={`w-35 text-start hover:font-semibold ${id == 13 ? 'bg-gradient-to-r from-blue-500 to-white-500 text-white pl-1 font-semibold' : ''}`}
              onClick={() => handleCategories(13)}
            >
              Clothes
            </button>
          </li>
          <li>
            <button
              className={`w-35 text-start hover:font-semibold ${id == 15 ? 'bg-gradient-to-r from-blue-500 to-white-500 text-white pl-1 font-semibold' : ''}`}
              onClick={() => handleCategories(15)}
            >
              Furniture
            </button>
          </li>
          <li>
            <button
              className={`w-35 text-start hover:font-semibold ${id == 14 ? 'bg-gradient-to-r from-blue-500 to-white-500 text-white pl-1 font-semibold' : ''}`}
              onClick={() => handleCategories(14)}
            >
              Electronics
            </button>
          </li>
          <li>
            <button
              className={`w-35 text-start hover:font-semibold ${id == 16 ? 'bg-gradient-to-r from-blue-500 to-white-500 text-white pl-1 font-semibold' : ''}`}
              onClick={() => handleCategories(16)}
            >
              Shoes
            </button>
          </li>
          <li>
            <button
              className={`w-35 text-start hover:font-semibold ${id == 17 ? 'bg-gradient-to-r from-blue-500 to-white-500 text-white pl-1 font-semibold' : ''}`}
              onClick={() => handleCategories(17)}
            >
              Miscellaneous
            </button>
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
