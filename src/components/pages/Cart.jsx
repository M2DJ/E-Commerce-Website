
const Cart = () => {
  return (
    <div className="w-full h-[400px] flex justify-center items-center">
      <div className="min-w-[450px] min-h-[250px] text-center rounded-lg bg-gray-300 flex flex-col justify-center">
        <h1 className="text-red-500 text-4xl font-bold mb-5">No items in cart yet</h1>
        <p>Start adding items to your cart and you will see them here!</p>
      </div>
    </div>
  )
}

export default Cart