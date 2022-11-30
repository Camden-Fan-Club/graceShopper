import { useStoreState, useStoreActions } from "easy-peasy";

export default function useUsers() {
  const registerUser = useStoreActions(
    (action) => useStoreActions.users.registerUser
  );

  const users = useStoreState((state) => state.users.data);
  const loginUser = useStoreActions((action) => useStoreActions.users.data);
  const fetchUsers = useStoreActions((actions) => actions.users.fetchUsers);
}
