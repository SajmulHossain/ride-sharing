import Heading from "@/components/Heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { faqs } from "@/constant/faq";

const Faq = () => {
  
  return (
    <section className="section">
      <Heading heading="Frequently Asked Question" />
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList className="max-h-full">
          <CommandEmpty>No results found.</CommandEmpty>
          <Accordion type="single">
            {faqs.map(({ group, items }) => (
              <>
                <CommandGroup heading={group.toLocaleUpperCase()}>
                  {items.map(({ answer, id, question }) => (
                    <CommandItem key={id}>
                      <AccordionItem value={id.toString()}>
                        <AccordionTrigger>{question}</AccordionTrigger>
                        <AccordionContent>{answer}</AccordionContent>
                      </AccordionItem>
                    </CommandItem>
                  ))}
                </CommandGroup>
                <CommandSeparator />
              </>
            ))}
          </Accordion>
        </CommandList>
      </Command>
    </section>
  );
};

export default Faq;

      // <Accordion type="single" collapsible>
      //   {serviceHighlights.map(({ title, icon, description }, index) => (
      //     <AccordionItem key={index} value={title}>
      //       <AccordionTrigger>{title + icon}</AccordionTrigger>
      //       <AccordionContent>{description}</AccordionContent>
      //     </AccordionItem>
      //   ))}
      // </Accordion>;