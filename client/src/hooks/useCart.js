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
  const deleteItem = useStoreActions((actions) => actions.cart.deleteItem);

  return {
    fetchCart,
    cart,
    addItemToCart,
    updateQuantity,
    deleteItem,
  };
}
