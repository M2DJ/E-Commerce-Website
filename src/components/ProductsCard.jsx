const ProductsCard = ({ product }) => {
  return (
    <div className="max-w-50 max-h-fit p-3 border border-black rounded-lg flex flex-col">
      <div>
        <img className="max-h-30 max-w-30 m-auto" src={product.image} />
        <h1>{product.title}</h1>
      </div>
      <div className="mb-5">
        <p>{product.price}$</p>
      </div>
    </div>
  );
};

export default ProductsCard;
