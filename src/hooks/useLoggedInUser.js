import { useSelector } from "react-redux";

export default function useLoggedInUser() {
  const { user } = useSelector((state) => state.auth);
  return user?.full_name || "";
}
