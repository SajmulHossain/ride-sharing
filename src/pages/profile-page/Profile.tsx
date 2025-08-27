import ProfileHeader from "./components/profile-header";
import ProfileContent from "./components/profile-content";
import { useGetMeQuery } from "@/redux/features/auth/auth.api";
import DashboardSkeleton from "../Dashboard/DashboardSkeleton";

export default function Profile() {
  const {data, isLoading} = useGetMeQuery(undefined);

  if(isLoading) {
    return <DashboardSkeleton />
  }
  return (
    <div className="container mx-auto space-y-6 px-4 py-10">
      <ProfileHeader user={data} />
      <ProfileContent user={data} />
    </div>
  );
}
