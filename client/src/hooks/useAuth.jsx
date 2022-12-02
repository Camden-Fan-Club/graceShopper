import { useStoreState, useStoreActions } from "easy-peasy";

export default function useAuth() {
  const createUser = useStoreActions((actions) => actions.auth.createUser);

  const users = useStoreState((state) => state.auth.data);
  const loginUser = useStoreActions((actions) => actions.auth.loginUser);
  const fetchUsers = useStoreActions((actions) => actions.auth.fetchUsers);

  return {
    createUser,
    users,
    loginUser,
    fetchUsers,
  };
}
