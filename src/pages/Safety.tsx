import { useEffect } from "react";
import { Hero } from "@/components/safety/Hero";
import { MultiLayerSafety } from "@/components/safety/MultiLayerSafety";
import { CommunityGuidelines } from "@/components/safety/CommunityGuidelines";
import { TransparencyReports } from "@/components/safety/TransparencyReports";
import { ComplianceGovernance } from "@/components/safety/ComplianceGovernance";
import { FAQs } from "@/components/safety/FAQs";
import { ExternalResources } from "@/components/safety/ExternalResources";
import Header from "@/components/Header";
import safetyContent from "@/content/safety.json";

const Safety = () => {
  useEffect(() => {
    // Analytics tracking for page view
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'safety_centre_view', {
        page_title: 'FRND Safety Centre',
        page_location: window.location.href
      });
    }
  }, []);

  // Replace placeholders with actual config values
  const processContent = (content: any, config: any) => {
    const processString = (str: string): string => {
      return str.replace(/\{\{(\w+)\}\}/g, (match, key) => {
        return config[key] || match;
      });
    };

    const processObject = (obj: any): any => {
      if (typeof obj === 'string') {
        return processString(obj);
      }
      if (Array.isArray(obj)) {
        return obj.map(processObject);
      }
      if (typeof obj === 'object' && obj !== null) {
        const processed: any = {};
        for (const [key, value] of Object.entries(obj)) {
          processed[key] = processObject(value);
        }
        return processed;
      }
      return obj;
    };

    return processObject(content);
  };

  const processedContent = processContent(safetyContent, safetyContent.config);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      // Analytics tracking for CTA clicks
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'safety_cta_read_more', {
          section: sectionId
        });
      }
    }
  };

  const scrollToTransparency = () => {
    const element = document.getElementById('transparency-reports');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      // Analytics tracking for transparency report CTA
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'safety_cta_view_report');
      }
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      {/* SEO Meta Tags - would normally be handled by Head component in Next.js */}
      <title>{processedContent.meta.title}</title>
      <meta name="description" content={processedContent.meta.description} />
      <meta name="keywords" content={processedContent.meta.keywords} />
      
      {/* OpenGraph Meta Tags */}
      <meta property="og:title" content={processedContent.meta.title} />
      <meta property="og:description" content={processedContent.meta.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : ''} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={processedContent.meta.title} />
      <meta name="twitter:description" content={processedContent.meta.description} />

      <Hero
        title={processedContent.hero.title}
        subtitle={processedContent.hero.subtitle}
        primaryCta={processedContent.hero.primaryCta}
        secondaryCta={processedContent.hero.secondaryCta}
        onPrimaryCta={() => scrollToSection('multi-layer-safety')}
        onSecondaryCta={scrollToTransparency}
      />

      <MultiLayerSafety
        title={processedContent.multiLayerSafety.title}
        subtitle={processedContent.multiLayerSafety.subtitle}
        layers={processedContent.multiLayerSafety.layers}
      />

      <CommunityGuidelines
        title={processedContent.communityGuidelines.title}
        intro={processedContent.communityGuidelines.intro}
        allowed={processedContent.communityGuidelines.allowed}
        banner={processedContent.communityGuidelines.banner}
        notAllowed={processedContent.communityGuidelines.notAllowed}
      />

      <TransparencyReports
        title={processedContent.transparency.title}
        subtitle={processedContent.transparency.subtitle}
        alvarezStudy={processedContent.transparency.alvarezStudy}
        statement={processedContent.transparency.statement}
        latestReport={processedContent.transparency.latestReport}
        previousReports={processedContent.transparency.previousReports}
      />

      <ComplianceGovernance
        title={processedContent.compliance.title}
        subtitle={processedContent.compliance.subtitle}
        officers={processedContent.compliance.officers}
      />

      <FAQs
        title={processedContent.faqs.title}
        items={processedContent.faqs.items}
      />

      <ExternalResources
        title={processedContent.externalResources.title}
        subtitle={processedContent.externalResources.subtitle}
        resources={processedContent.externalResources.resources}
      />
    </div>
  );
};

export default Safety;