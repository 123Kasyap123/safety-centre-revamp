import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Clock } from "lucide-react";

interface Officer {
  title: string;
  name: string;
  email: string;
  address: string;
  sla: string;
  note?: string;
}

interface ComplianceGovernanceProps {
  title: string;
  subtitle: string;
  officers: Officer[];
}

export const ComplianceGovernance = ({ title, subtitle, officers }: ComplianceGovernanceProps) => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-4">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground">
              Official Points of Contact for Compliance and Grievance Redressal
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {officers.map((officer, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {officer.title}
                    </h3>
                    <p className="text-xl font-medium text-primary">
                      {officer.name}
                    </p>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <a 
                        href={`mailto:${officer.email}`}
                        className="text-sm text-primary hover:underline break-all"
                      >
                        {officer.email}
                      </a>
                    </div>
                    
                    
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                      <Badge variant="secondary" className="text-xs">
                        {officer.sla}
                      </Badge>
                    </div>
                  </div>
                  
                  {officer.note && (
                    <div className="mt-4 p-3 bg-muted/50 rounded-lg border-l-4 border-primary/40">
                      <p className="text-xs text-muted-foreground italic">
                        {officer.note}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};