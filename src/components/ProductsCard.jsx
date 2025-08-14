const ProductsCard = ({ product }) => {
  let name = product.title;

  return (
    <div
      className="max-w-50 
                    max-h-fit 
                    p-4
                    border-2
                    border-transparent
                    hover:shadow-md 
                    hover:shadow-blue-500/50 
                    hover:border-2
                    hover:border-blue-500 
                    hover:rounded-lg
                    flex 
                    flex-col"
    >
      <div>
        <img className="max-h-30 max-w-30 m-auto" src={product.image} />
        <h1>
          {name.length > 20 && name.slice(0,50) + "..."}
        </h1>
      </div>
      <div className="mb-5">
        <p>{product.price}$</p>
      </div>
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
        <button className="text-white">Add to cart</button>
      </div>
    </div>
  );
};

export default ProductsCard;
