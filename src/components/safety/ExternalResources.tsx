import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, ExternalLink, Shield } from "lucide-react";

interface Resource {
  name: string;
  number?: string;
  url?: string;
  description: string;
  type: "phone" | "website";
}

interface ExternalResourcesProps {
  title: string;
  subtitle: string;
  resources: Resource[];
}

export const ExternalResources = ({ title, subtitle, resources }: ExternalResourcesProps) => {
  const handleResourceClick = (resource: Resource) => {
    // Analytics tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'external_resource_click', {
        resource_name: resource.name,
        resource_type: resource.type
      });
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="h-8 w-8 text-safety-blue" />
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            </div>
            <p className="text-lg text-muted-foreground">
              {subtitle}
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2">
            {resources.map((resource, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-safety-blue/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-lg flex-shrink-0 ${
                      resource.type === 'phone' 
                        ? 'bg-safety-green/10 text-safety-green' 
                        : 'bg-safety-blue/10 text-safety-blue'
                    }`}>
                      {resource.type === 'phone' ? (
                        <Phone className="h-6 w-6" />
                      ) : (
                        <ExternalLink className="h-6 w-6" />
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {resource.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {resource.description}
                      </p>
                      
                      {resource.type === 'phone' && resource.number ? (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          asChild
                          onClick={() => handleResourceClick(resource)}
                          className="group"
                        >
                          <a href={`tel:${resource.number}`} className="inline-flex items-center">
                            <Phone className="mr-2 h-4 w-4" />
                            {resource.number}
                          </a>
                        </Button>
                      ) : resource.url ? (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          asChild
                          onClick={() => handleResourceClick(resource)}
                          className="group"
                        >
                          <a 
                            href={resource.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center"
                          >
                            Visit Website
                            <ExternalLink className="ml-2 h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </a>
                        </Button>
                      ) : null}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              These resources are provided by official government agencies and organizations. 
              All links open in a new tab for your security.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};