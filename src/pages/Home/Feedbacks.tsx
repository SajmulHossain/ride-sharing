import Heading from "@/components/Heading";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Rating, RatingButton } from "@/components/ui/shadcn-io/rating";
import { feedbacks } from "@/constant/feedbacks";
import Autoplay from "embla-carousel-autoplay";

const Feedbacks = () => {
  return (
    <section className="section">
      <Heading heading="Feedbacks" />

      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {feedbacks.map(
            ({ name, rating, feedback, avatar, location }, index) => (
              <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3">
                <Card className="h-full">
                  <CardContent className="flex flex-col">
                    <div className="flex items-center gap-4 grow">
                      <img
                        src={avatar}
                        className="size-16 rounded-full outline-2 outline-primary outline-offset-2"
                        alt={`${name}'s avatar`}
                      />
                      <div>
                        <h2 className="font-bold text-xl">{name}</h2>
                        <CardDescription>{location}</CardDescription>
                      </div>
                    </div>

                    <CardDescription className="mt-4 grow">{feedback}</CardDescription>
                    <div className="flex flex-col items-center gap-3 mt-3">
                      <Rating value={rating} readOnly>
                        {Array.from({ length: 5 }).map((_, index) => (
                          <RatingButton
                            className="text-yellow-500"
                            key={index}
                          />
                        ))}
                      </Rating>
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground">
                          Rating: {rating} out of 5
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            )
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Feedbacks;
