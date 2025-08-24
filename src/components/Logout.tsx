import { useAppDispatch } from "@/redux/hook";
import { Button } from "./ui/button";
import { authApi, useLogoutMutation } from "@/redux/features/auth/auth.api";
import { sendResponse } from "@/utils/sendResponse";

const Logout = ({...props}) => {
  const [logout, { isLoading }] = useLogoutMutation();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    await sendResponse(() => logout(undefined), "Logout");
    dispatch(authApi.util.resetApiState());
  };
  return (
    <Button {...props} onClick={handleLogout} disabled={isLoading} variant="outline">
      Logout
    </Button>
  );
};

export default Logout;
