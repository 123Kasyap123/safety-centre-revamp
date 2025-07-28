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
    <section className="py-20 bg-frnd-red">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          
          {/* Main heading */}
          <h1 className="text-4xl font-bold tracking-tight text-frnd-red-foreground mb-6 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
            {subtitle}
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={onPrimaryCta}
              size="lg"
              className="bg-white text-frnd-red hover:bg-white/95 font-semibold"
            >
              <Shield className="h-5 w-5 mr-2" />
              {primaryCta}
            </Button>
            <Button 
              onClick={onSecondaryCta}
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white bg-white/20 hover:bg-white hover:text-frnd-red font-semibold"
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