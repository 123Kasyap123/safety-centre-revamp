import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, TrendingUp, Award } from "lucide-react";

interface TransparencyReportsProps {
  title: string;
  subtitle: string;
  alvarezStudy: {
    text: string;
  };
  statement: string;
  latestReport: {
    text: string;
  };
  previousReports: {
    title: string;
    description: string;
  };
}

// Mock data for previous reports - in real implementation, this would come from API/CMS
const mockReports = [
  { month: "December", year: "2024", compliance: "95.29%", date: "2024-12" },
  { month: "November", year: "2024", compliance: "94.87%", date: "2024-11" },
  { month: "October", year: "2024", compliance: "95.12%", date: "2024-10" },
  { month: "September", year: "2024", compliance: "94.95%", date: "2024-09" },
  { month: "August", year: "2024", compliance: "95.01%", date: "2024-08" },
];

export const TransparencyReports = ({ 
  title, 
  subtitle, 
  alvarezStudy, 
  statement, 
  latestReport, 
  previousReports 
}: TransparencyReportsProps) => {
  const handleDownload = (reportDate: string) => {
    // Analytics tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'download_transparency_report', {
        report_date: reportDate
      });
    }
    
    // In real implementation, this would trigger actual PDF download
    console.log(`Downloading report for ${reportDate}`);
  };

  return (
    <section id="transparency-reports" className="py-20 bg-transparency-mint">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-4">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {subtitle}
            </p>
          </div>
          
          <div className="space-y-8">
            {/* Alvarez Study Card */}
            <Card className="border border-safety-green/20 bg-card">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-safety-green/10 rounded-lg">
                    <Award className="h-8 w-8 text-safety-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Independent Study Results
                    </h3>
                    <p className="text-card-foreground text-lg leading-relaxed">
                      {alvarezStudy.text}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FRND Statement */}
            <Card className="border border-border bg-card">
              <CardContent className="p-8">
                <p className="text-muted-foreground leading-relaxed">
                  {statement}
                </p>
              </CardContent>
            </Card>

            {/* Latest Report */}
            <Card className="border border-border bg-card">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-safety-green/10 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-safety-green" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Latest Monthly Report</h3>
                </div>
                <p className="text-card-foreground text-lg mb-6">
                  {latestReport.text}
                </p>
                <div className="flex items-center justify-center">
                  <div className="relative w-32 h-32">
                    {/* Simple donut chart representation */}
                    <svg className="w-32 h-32 transform rotate-0" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="3"
                      />
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="hsl(var(--safety-green))"
                        strokeWidth="3"
                        strokeDasharray="95.29, 100"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-safety-green">95.29%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          
            {/* Previous Reports */}
            <Card className="border border-border bg-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {previousReports.title}
                </h3>
                <p className="text-muted-foreground mb-6">{previousReports.description}</p>
                
                <Accordion type="single" collapsible>
                  <AccordionItem value="previous-reports">
                    <AccordionTrigger className="hover:no-underline">
                      View Previous Reports
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-4">
                        {mockReports.map((report, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-4 border border-border rounded-lg bg-background"
                          >
                            <div>
                              <h4 className="font-medium text-foreground">
                                {report.month} {report.year}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                Compliance: {report.compliance}
                              </p>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleDownload(report.date)}
                              className="border-border hover:bg-card-hover"
                            >
                              <Download className="h-4 w-4 mr-2" />
                              Download PDF
                            </Button>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};