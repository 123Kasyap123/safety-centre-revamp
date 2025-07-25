import { Button } from "@/components/ui/button";
import { Shield, FileText } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  onPrimaryCta: () => void;
  onSecondaryCta: () => void;
}

export const Hero = ({ title, subtitle, primaryCta, secondaryCta, onPrimaryCta, onSecondaryCta }: HeroProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-safety-green/10 border border-safety-green/20 rounded-full">
            <Shield className="h-4 w-4 text-safety-green" />
            <span className="text-sm font-medium text-safety-green">FRND Safety Centre</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
            {subtitle}
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={onPrimaryCta}
              size="lg"
              className="bg-safety-green hover:bg-safety-green/90 text-safety-green-foreground"
            >
              <Shield className="h-5 w-5 mr-2" />
              {primaryCta}
            </Button>
            <Button 
              onClick={onSecondaryCta}
              variant="outline" 
              size="lg"
              className="border-border hover:bg-card-hover"
            >
              <FileText className="h-5 w-5 mr-2" />
              {secondaryCta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};