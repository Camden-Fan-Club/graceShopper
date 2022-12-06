import { useStoreState, useStoreActions } from "easy-peasy";

export default function useCart() {
  const fetchCart = useStoreActions((actions) => actions.cart.fetchCart);
  const cart = useStoreState((state) => state.cart.data);
  const addItemToCart = useStoreActions(
    (actions) => actions.cart.addItemToCart
  );
  const updateQuantity = useStoreActions(
    (actions) => actions.cart.updateQuantity
  );

  //UPDATE ITEM(quantity) IN CART
  //DELETE ITEM FROM CART
  return {
    fetchCart,
    cart,
    addItemToCart,
    updateQuantity,
  };
}
