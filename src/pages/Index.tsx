import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, ArrowRight, Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-primary to-brand-secondary py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 opacity-20"></div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Welcome to FRND
            </h1>
            <p className="mb-10 text-xl text-white/90 sm:text-2xl lg:text-xl lg:leading-8">
              Building meaningful connections in a safe and trusted environment
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
              <Button
                asChild
                size="lg"
                className="bg-white text-brand-primary hover:bg-white/90 hover:text-brand-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Link to="/safety" className="group">
                  Learn About Safety
                  <Shield className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-4">
              Why Choose FRND?
            </h2>
            <p className="text-lg text-muted-foreground">
              We're committed to creating the safest platform for genuine connections
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="mb-4 mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-safety-green/10 text-safety-green">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Safety First
                </h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive safety measures with 24/7 monitoring and instant reporting
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="mb-4 mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-trust-purple/10 text-trust-purple">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Verified Community
                </h3>
                <p className="text-sm text-muted-foreground">
                  KYC verification ensures authentic profiles and genuine connections
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="mb-4 mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-brand-secondary/20 text-brand-primary">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Meaningful Connections
                </h3>
                <p className="text-sm text-muted-foreground">
                  Designed to foster genuine relationships and respectful interactions
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="group">
              <Link to="/safety">
                Explore Our Safety Centre
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
