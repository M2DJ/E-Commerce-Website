const ProductsCard = ({ product }) => {
  return (
    <div className="max-w-50 max-h-fit p-3 border rounded-lg flex flex-col">
      <div>
        <img className="max-h-30 max-w-30 m-auto" src={product.image} />
        <h1>
          {product.title.length > 20
            ? product.title.slice(0, 50) + "..."
            : product.title}
        </h1>
      </div>
      <div className="mb-5">
        <p>{product.price}$</p>
      </div>
      <div className="w-40 h-10 m-auto text-center text-xl bg-blue-500 border rounded-md flex items-center justify-center">
        <button className="text-white">Add to cart</button>
      </div>
    </div>
  );
};

export default ProductsCard;
