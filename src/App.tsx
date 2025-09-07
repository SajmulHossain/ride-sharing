import { Outlet } from "react-router";
import MainLayout from "./layout/MainLayout";
import SwitchRide from "./components/SwitchRide";
import SOS from "./components/SOS";

const App = () => {
  // const { isLoading } = useGetMeQuery(undefined);
  // if (isLoading) {
  //   return (
  //     <div className="min-h-screen grid place-items-center">
  //       <LoaderPinwheel />
  //     </div>
  //   );
  // }

  return (
    <MainLayout>
      <SwitchRide />
      <SOS />
      <Outlet />
    </MainLayout>
  );
};

export default App;
