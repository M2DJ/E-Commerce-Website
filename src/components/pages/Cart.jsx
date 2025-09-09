import { useEffect, useState } from "react";
import { useCartContext } from "../../context/CartContext";

const Cart = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { cart, deleteFromCart, increaseQuantity, decreaseQuantity } =
    useCartContext();

  const Amount = cart.reduce((currentTotal, item) => {
    return item.price * item.quantity + currentTotal;
  }, 0);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const handleIncrease = (productId) => {
    increaseQuantity(productId);
  };

  const handleDecrease = (productId) => {
    var item = cart.find((pro) => pro.id === productId);

    if (item.quantity > 1) {
      decreaseQuantity(productId);
    } else {
      deleteFromCart(item.id);
    }
  };

  if (cart.length == 0) {
    return (
      <div className="w-full h-[400px] flex justify-center items-center">
        <div className={`${windowWidth <= 320 || windowWidth <=375 ? 'max-w-[290px]' : windowWidth <= 768 ? 'max-w-[350px]' : windowWidth >= 1024 && windowWidth <= 1440 ? 'max-w-[450px]' : 'max-w-[950px] min-h-[350px]'} min-h-[250px] text-center rounded-lg bg-gray-300 flex flex-col justify-center`}>
          <h1 className={`text-red-500 ${windowWidth <= 320 || windowWidth <=375 ? 'text-2xl' : windowWidth <= 768 ? 'text-3xl' : windowWidth >= 1024 && windowWidth <= 1440 ? 'text-5xl' : 'text-8xl'} font-bold mb-5`}>
            No items in cart yet
          </h1>
          <p className={`${windowWidth > 1440 && 'text-3xl mt-2'}`}>Start adding items to your cart and you will see them here!</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="p-3 h-full">
        <div className="min-h-[50vh] min-w-100 flex flex-col items-center">
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
          <div className="w-200 flex">
            <p>Amount: {Amount}$</p>
          </div>
          <div>
            <button className="min-w-142 min-h-12 bg-blue-500 text-white border rounded-lg text-2xl mt-5">
              Check Out
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default Cart;
