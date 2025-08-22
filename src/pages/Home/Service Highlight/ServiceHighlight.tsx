import Heading from "@/components/Heading";
import ServiceCarousel from "./ServiceCarousel";

const ServiceHighlight = () => {
  return (
    <section className="section">
      <Heading heading="Service Highlights" />
      <div className="max-w-[600px] mx-auto">
        <ServiceCarousel />
      </div>
    </section>
  );
};

export default ServiceHighlight;