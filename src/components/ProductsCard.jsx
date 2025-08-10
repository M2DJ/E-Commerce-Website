const ProductsCard = ({ product }) => {
  return (
    <div>
      {/* title, description, image(3 images for every product(in an array)), price */}
      <div>
        <img src={product.image} />
        <h1>{product.title}</h1>
        <h2>{product.description}</h2>
      </div>
      <div>
        <p>{product.price}$</p>
      </div>
    </div>
  );
};

export default ProductsCard;
