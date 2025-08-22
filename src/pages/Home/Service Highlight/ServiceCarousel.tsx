import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { serviceHighlights } from "@/constant/serviceHighlights";
import { Autoplay } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {serviceHighlights.map(({title, description, icon, id}) => (
          <SwiperSlide key={id}>
            <Card>
              <CardHeader>
                <CardTitle>{title + icon}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
