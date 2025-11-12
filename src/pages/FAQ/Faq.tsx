import Heading from "@/components/common/Heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator
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
          <Accordion type="multiple">
            {faqs.map(({ group, items }) => (
              <>
                <CommandGroup heading={group.toLocaleUpperCase()}>
                  {items.map(({ answer, id, question }) => (
                    <CommandItem key={id}>
                      <AccordionItem className="w-full" value={id.toString()}>
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