import { useCartContext } from "../context/CartContext";

const ProductsCard = ({ product }) => {
  const { addToCart, isInCart } = useCartContext();

  const inCart = isInCart(product.id);

  const handleCartClick = () => {
    addToCart(product);
  };

  return (
    <div
      className="max-w-80 
                    max-h-150 
                    p-4
                    border-3
                    border-transparent
                    hover:shadow-md 
                    hover:shadow-blue-500/80 
                    hover:border-3
                    hover:border-blue-500 
                    hover:rounded-lg
                    flex 
                    flex-col"
    >
      <div>
        <img className="max-h-70 max-w-70 m-auto mb-2" src={product.images[0]} />
        <h1>
          {product.title}
        </h1>
      </div>
      <div className="mb-5">
        <p>{product.price}$</p>
      </div>
      {inCart ? (
        <div>
          <p className="w-40 h-10 flex justify-center items-center font-bold text-2xl text-green-500">In Cart</p>
        </div>
      ) : (
        <div
          className="   w-40
                                  h-10 
                                  m-auto 
                                  text-center 
                                  text-xl 
                                  shadow-md 
                                  shadow-black 
                                  bg-blue-500 border 
                                  border-blue-500 
                                  rounded-md 
                                  flex 
                                  items-center 
                                  justify-center
                                  hover:scale-105
                                  hover:shadow-lg
                                  hover:text-white
                                  hover:font-bold
                                  transition-all
                                  duration-200
                                  ease-in-out"
        >
          <button className="text-white" onClick={handleCartClick}>
            Add to Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductsCard;
