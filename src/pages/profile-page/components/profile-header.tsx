import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { IUser } from "@/types";
import { format } from "date-fns";
import { Calendar, Mail } from "lucide-react";

export default function ProfileHeader({ user }: { user: IUser | undefined }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
          <div className="relative">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src="https://bundui-images.netlify.app/avatars/08.png"
                alt="Profile"
              />
              <AvatarFallback className="text-2xl">{user?.name.split(" ").map(d => d.charAt(0))}</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex flex-col gap-2 md:flex-row md:items-center">
              <h2 className="text-2xl font-bold">{user?.name}</h2>
              <Badge variant="secondary" className="capitalize">
                {user?.role}
              </Badge>
            </div>

            <div className="text-muted-foreground flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Mail className="size-4" />
                {user?.email}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="size-4" />
                Joined {format(new Date(user?.createdAt || new Date()), "PPP")}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
