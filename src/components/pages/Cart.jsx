import { useCartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, deleteFromCart, increaseQuantity, decreaseQuantity } =
    useCartContext();

  const handleIncrease = (productId) => {
    increaseQuantity(productId);
  };

  const handleDecrease = (productId) => {
    var item = cart.find(pro => pro.id === productId);

    if(item.quantity > 1){
      decreaseQuantity(productId);
    } else {
      deleteFromCart(item.id);
    }
  };

  if (cart.length == 0) {
    return (
      <div className="w-full h-[400px] flex justify-center items-center">
        <div className="min-w-[450px] min-h-[250px] text-center rounded-lg bg-gray-300 flex flex-col justify-center">
          <h1 className="text-red-500 text-4xl font-bold mb-5">
            No items in cart yet
          </h1>
          <p>Start adding items to your cart and you will see them here!</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="p-3 h-full">
        <div className="min-h-[50vh] flex flex-col items-center">
          <div className="grow-2 max-h-[60vh] overflow-y-scroll">
            {cart.map((pro) => (
              <div key={pro.id} className="p-3 flex justify-center">
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
                        onClick={() => handleIncrease(pro.id)}
                      >
                        +
                      </button>
                      <p className="w-13 border text-center">{pro.quantity}</p>
                      <button
                        className="min-w-6 bg-red-500"
                        onClick={() => handleDecrease(pro.id)}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <button className="min-w-142 min-h-12 bg-blue-500 text-white border rounded-lg text-2xl">
              Check Out
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default Cart;
