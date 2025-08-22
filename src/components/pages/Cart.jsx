import { useCartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, deleteFromCart, amount, increaseAmount, decreaseAmount } = useCartContext();

  const handleDecrease = (e) => {
    console.log(e.target.id);
    // if(amount >= 1){
    //   decreaseAmount();
    // } else {
    //   deleteFromCart(e.target.id)
    // }
  };

  return cart.map((pro) => (
    <div className="p-3 flex justify-center">
      <div className="min-w-200 max-h-36 p-3 flex border rounded-lg">
        <div className="mr-2">
          <img className="max-h-30 max-w-30" src={pro.images[0]} />
        </div>
        <div>
          <h1 className="text-xl">{pro.title}</h1>
          <p className="mb-9 text-lg italic">${pro.price}</p>
          <div className="max-w-25 flex justify-between">
            <button
              className="min-w-6 bg-green-500"
              onClick={() => increaseAmount()}
            >
              +
            </button>
            <p className="w-13 border text-center">{amount}</p>
            <button
              className="min-w-6 bg-red-500"
              onClick={handleDecrease}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  ));

  // if (cart.length == 0) {
  //   return (
  //     <div className="w-full h-[400px] flex justify-center items-center">
  //       <div className="min-w-[450px] min-h-[250px] text-center rounded-lg bg-gray-300 flex flex-col justify-center">
  //         <h1 className="text-red-500 text-4xl font-bold mb-5">
  //           No items in cart yet
  //         </h1>
  //         <p>Start adding items to your cart and you will see them here!</p>
  //       </div>
  //     </div>
  //   );
  // } else {
  //   return <div className="p-3">

  //   </div>;
  // }
};

export default Cart;
