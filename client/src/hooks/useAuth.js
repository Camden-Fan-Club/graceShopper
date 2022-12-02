import { useStoreState, useStoreActions } from "easy-peasy";

export default function useAuth() {
  const createUser = useStoreActions((actions) => actions.auth.createUser);

  const users = useStoreState((state) => state.auth.data);
  const selectedUser = useStoreState((state) => state.auth.selectedUser);
  const loginUser = useStoreActions((actions) => actions.auth.loginUser);
  const fetchUsers = useStoreActions((actions) => actions.auth.fetchUsers);
  const logoutUser = useStoreActions((actions) => actions.auth.logoutUser);

  return {
    createUser,
    users,
    loginUser,
    fetchUsers,
    selectedUser,
    logoutUser,
  };
}
