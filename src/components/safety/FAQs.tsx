import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQsProps {
  title: string;
  items: FAQ[];
}

export const FAQs = ({ title, items }: FAQsProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <HelpCircle className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            </div>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {items.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`} 
                className="border rounded-lg px-4 bg-card hover:bg-card-hover transition-colors"
              >
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};