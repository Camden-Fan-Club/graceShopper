import { useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import useCart from "../hooks/useCart";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { checkoutCart, cart } = useCart();
  const { selectedUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("selected user", selectedUser.id);
    await checkoutCart({ userId: selectedUser.id, orderId: cart.id });
    navigate("/");
  };

  return (
    <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-1">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div class="flex flex-wrap -mx-3 mb-6 ">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              class="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              placeholder="Card Number"
              type="text"
            ></input>
          </div>
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              class="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              placeholder="Expiration"
              type="text"
            ></input>
          </div>
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              class="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              placeholder="CVV"
              type="text"
            ></input>
          </div>
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              class="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              placeholder="Address"
              type="text"
            ></input>
          </div>
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              class="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              placeholder="Zip Code"
              type="text"
            ></input>
          </div>
        </div>

        <button
          class="bg-gray-600 hover:bg-bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Confirm Purchase
        </button>
      </form>
    </div>
  );
}
