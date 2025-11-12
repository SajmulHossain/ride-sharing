import Heading from "@/components/common/Heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { serviceHighlights } from "@/constant/serviceHighlights";

const ServiceHighlight = () => {
  return (
    <section className="section">
      <Heading heading="Service Highlights" />
      <Accordion type="single" collapsible>
        {serviceHighlights.map(({ title, icon, description }, index) => (
          <AccordionItem key={index} value={title}>
            <AccordionTrigger>{title + icon}</AccordionTrigger>
            <AccordionContent>{description}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default ServiceHighlight;