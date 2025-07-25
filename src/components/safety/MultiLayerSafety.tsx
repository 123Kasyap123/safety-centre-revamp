import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Bot, Video, Users, Phone, AlertCircle } from "lucide-react";

interface Layer {
  icon: string;
  title: string;
  description: string;
  subItems?: string[];
}

interface MultiLayerSafetyProps {
  title: string;
  subtitle: string;
  layers: Layer[];
}

const iconMap = {
  "shield-check": ShieldCheck,
  "bot": Bot,
  "video": Video,
  "users": Users,
};

export const MultiLayerSafety = ({ title, subtitle, layers }: MultiLayerSafetyProps) => {
  return (
    <section id="multi-layer-safety" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {subtitle}
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {layers.map((layer, index) => {
            const IconComponent = iconMap[layer.icon as keyof typeof iconMap] || ShieldCheck;
            
            return (
              <Card key={index} className="border border-border bg-card hover:bg-card-hover transition-colors">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-safety-green/10">
                    <IconComponent className="h-6 w-6 text-safety-green" />
                  </div>
                  
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {layer.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {layer.description}
                  </p>
                  
                  {layer.subItems && (
                    <div className="space-y-2">
                      {layer.subItems.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start gap-2 text-sm">
                          {item.includes("Report:") ? (
                            <AlertCircle className="h-4 w-4 text-warning mt-0.5 flex-shrink-0" />
                          ) : (
                            <Phone className="h-4 w-4 text-safety-green mt-0.5 flex-shrink-0" />
                          )}
                          <span className="text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};