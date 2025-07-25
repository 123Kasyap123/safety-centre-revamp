import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertTriangle, ChevronDown, ExternalLink } from "lucide-react";
import { useState } from "react";

interface CommunityGuidelinesProps {
  title: string;
  intro: string;
  allowed: string[];
  banner: {
    text: string;
    linkText: string;
    linkUrl: string;
  };
  notAllowed: {
    title: string;
    items: string[];
  };
}

export const CommunityGuidelines = ({ title, intro, allowed, banner, notAllowed }: CommunityGuidelinesProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-8 text-center">
            {title}
          </h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">{intro}</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {allowed.map((item, index) => (
                <div key={index} className="flex items-center gap-3 rounded-lg bg-background p-4 border">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <Card className="mb-8 border-warning/20 bg-warning/5">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-warning flex-shrink-0 mt-0.5" />
                <div className="space-y-3 flex-1">
                  <p className="text-foreground">{banner.text}</p>
                  <Button variant="outline" size="sm" asChild className="group">
                    <a href={banner.linkUrl} className="inline-flex items-center">
                      {banner.linkText}
                      <ExternalLink className="ml-2 h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleTrigger asChild>
              <Button 
                variant="outline" 
                className="w-full justify-between group"
                aria-expanded={isOpen}
                aria-controls="not-allowed-content"
              >
                <span className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-destructive" />
                  {notAllowed.title}
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent 
              id="not-allowed-content"
              className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
            >
              <Card className="mt-4 border-destructive/20 bg-destructive/5">
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {notAllowed.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="h-2 w-2 rounded-full bg-destructive mt-2 flex-shrink-0"></div>
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </section>
  );
};