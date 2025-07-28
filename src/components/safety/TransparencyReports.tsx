import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
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

// Mock data for previous reports grouped by year - in real implementation, this would come from API/CMS
const mockReportsByYear = {
  "2025": [
    { month: "March", date: "2025-03" },
    { month: "February", date: "2025-02" },
    { month: "January", date: "2025-01" }
  ],
  "2024": [
    { month: "December", date: "2024-12" },
    { month: "November", date: "2024-11" },
    { month: "October", date: "2024-10" },
    { month: "September", date: "2024-09" },
    { month: "August", date: "2024-08" },
    { month: "July", date: "2024-07" },
    { month: "June", date: "2024-06" },
    { month: "May", date: "2024-05" },
    { month: "April", date: "2024-04" },
    { month: "March", date: "2024-03" },
    { month: "February", date: "2024-02" },
    { month: "January", date: "2024-01" }
  ]
};

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
                      {alvarezStudy.text.replace(/(\d+%)/g, '<strong>$1</strong>').split('<strong>').map((part, index) => {
                        if (part.includes('</strong>')) {
                          const [boldText, ...rest] = part.split('</strong>');
                          return (
                            <span key={index}>
                              <strong>{boldText}</strong>
                              {rest.join('</strong>')}
                            </span>
                          );
                        }
                        return part;
                      })}
                    </p>
                  </div>
                </div>
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
                  <TooltipProvider>
                    <div className="relative w-32 h-32">
                      {/* Simple donut chart representation */}
                      <svg className="w-32 h-32 transform rotate-0" viewBox="0 0 36 36">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <path
                              d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="#e5e7eb"
                              strokeWidth="3"
                              className="cursor-pointer"
                            />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>4.71%</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <path
                              d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="hsl(var(--safety-green))"
                              strokeWidth="3"
                              strokeDasharray="95.29, 100"
                              className="cursor-pointer"
                            />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>95.29%</p>
                          </TooltipContent>
                        </Tooltip>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold text-safety-green">95.29%</span>
                      </div>
                    </div>
                  </TooltipProvider>
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
                
                <Accordion type="single" collapsible defaultValue="2025">
                  {Object.entries(mockReportsByYear)
                    .sort(([a], [b]) => parseInt(b) - parseInt(a)) // Sort years in descending order
                    .map(([year, reports]) => (
                    <AccordionItem key={year} value={year}>
                      <AccordionTrigger className="hover:no-underline">
                        {year} Reports
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4 pt-4">
                          {reports.map((report, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between p-4 border border-border rounded-lg bg-background"
                            >
                              <div>
                                <h4 className="font-medium text-foreground">
                                  {report.month} {year}
                                </h4>
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
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};