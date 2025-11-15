import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const CommonRideSkeleton = () => {
  return (
    <div>
      {Array.from({ length: 6 }).map((_, index) => (
        <Card key={index}>
          <CardContent className="space-y-3">
            <Badge className="mb-2 animate-pulse h-6 w-20"></Badge>

            <div className="space-y-1">
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-4 w-36" />
            </div>

            <Skeleton className="h-6 w-48" />

            <div className="flex flex-wrap gap-2 mt-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="border rounded-2xl py-2 px-4 space-y-2 flex-1">
                  <Skeleton className="h-4 w-20" />
                  <Badge variant="secondary">
                    <Skeleton className="h-4 w-32" />
                  </Badge>
                </div>
              ))}
            </div>

            <Button disabled className="mt-4 animate-pulse w-32"></Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CommonRideSkeleton;