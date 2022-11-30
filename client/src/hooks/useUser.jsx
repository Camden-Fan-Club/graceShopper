import { useStoreState, useStoreActions } from "easy-peasy";

export default function useUsers() {
  const createUser = useStoreActions((actions) => actions.users.createUser);

  const users = useStoreState((state) => state.users.data);
  const loginUser = useStoreActions((actions) => actions.users.data);
  const fetchUsers = useStoreActions((actions) => actions.users.fetchUsers);

  return {
    createUser,
    users,
    loginUser,
    fetchUsers,
  };
}
