import { Outlet } from "react-router";
import MainLayout from "./layout/MainLayout";

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
      <Outlet />
    </MainLayout>
  );
};

export default App;
