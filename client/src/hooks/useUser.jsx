import { useStoreState, useStoreActions } from "easy-peasy";

export default function useUsers() {
  const createUser = useStoreActions(
    (actions) => useStoreActions.users.createUser
  );

  const users = useStoreState((state) => state.users.data);
  const loginUser = useStoreActions((actions) => useStoreActions.users.data);
  const fetchUsers = useStoreActions((actions) => actions.users.fetchUsers);

  return {
    createUser,
    users,
    loginUser,
    fetchUsers,
  };
}
