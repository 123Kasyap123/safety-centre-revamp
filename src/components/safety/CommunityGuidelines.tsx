import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertTriangle, ChevronDown } from "lucide-react";
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
}

export const CommunityGuidelines = ({ title, intro, allowed, banner }: CommunityGuidelinesProps) => {
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
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-warning flex-shrink-0" />
                <div className="flex-1">
                  <span className="text-muted-foreground text-sm">
                    {banner.text}
                    <Button variant="outline" size="sm" asChild className="inline-flex ml-2 text-xs px-2 py-1">
                      <a href={banner.linkUrl}>
                        {banner.linkText}
                      </a>
                    </Button>
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};