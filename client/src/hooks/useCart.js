import { useStoreState, useStoreActions } from "easy-peasy";

export default function useCart() {
  const fetchCart = useStoreActions((actions) => actions.cart.fetchCart);
  const cart = useStoreState((state) => state.cart.data);
  //UPDATE ITEM(quantity) IN CART
  //DELETE ITEM FROM CART
  return {
    fetchCart,
    cart,
  };
}
