import { useDispatch, useSelector } from "react-redux";
import { clearCart, getTotalPrice } from "../../redux/slices/cartSlice";
import { Link } from "react-router";
import { ArrowBigLeft } from "lucide-react";
import CartItem from "./CartItem";
import Button from "../sharedUI/buttons/Button";
import EmptyCart from "./EmptyCart";

function Cart() {
  const cart = useSelector((state) => state.cart.value);
  const userName = useSelector((state) => state.user.userName);
  const dispatch = useDispatch();
  const totalPrice = useSelector(getTotalPrice);

  function handleClearCart() {
    dispatch(clearCart());
  }

  if (cart.length === 0) return <EmptyCart />;

  return (
    <div className="p-2">
      <Link
        to="/menu"
        className="flex font-extrabold gap-1 hover:text-yellow-400"
      >
        <ArrowBigLeft />
        Back to menu
      </Link>
      <div className="mx-8 my-5 flex flex-col gap-8">
        <h2 className="text-xl font-bold">Your cart,{userName}</h2>
        <ul className="flex flex-col gap-4">
          {cart.map((item) => (
            <CartItem item={item} key={item.pizzaId} />
          ))}
        </ul>
        <div className="flex justify-between ">
          <div className="flex gap-3">
            <Link to="/order/new">
              <Button btnName="ORDER PIZZAS" size="w-40" />
            </Link>
            <button
              onClick={handleClearCart}
              className="h-14 w-36  rounded-full  text-slate-500 border-2 border-slate-500 font-bold self-center hover:bg-gray-400 hover:text-black"
            >
              CLEAR CART
            </button>
          </div>
          <span className="text-lg font-bold">Total Price : {totalPrice}</span>
        </div>
      </div>
    </div>
  );
}

export default Cart;
