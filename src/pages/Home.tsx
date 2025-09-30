import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Briefcase } from "lucide-react";
import LogoGrid from "@/components/LogoGrid";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        
        <div className="container relative z-10 mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4">
              <Code className="h-4 w-4" />
              <span>Software Engineer</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Abanoub Refaat
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Building powerful desktop applications and modern web experiences that transform businesses
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link to="/projects">
                <Button size="lg" className="rounded-xl bg-gradient-primary hover:opacity-90 transition-opacity group">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/contact">
                <Button size="lg" variant="outline" className="rounded-xl border-2 group">
                  <Briefcase className="mr-2 h-4 w-4" />
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted By</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Proud to have delivered solutions for amazing clients across various industries
            </p>
          </div>
          
          <LogoGrid />
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center space-y-2 animate-fade-in-up">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                8+
              </div>
              <div className="text-foreground/70 font-medium">Projects Delivered</div>
            </div>
            
            <div className="text-center space-y-2 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                7+
              </div>
              <div className="text-foreground/70 font-medium">Happy Clients</div>
            </div>
            
            <div className="text-center space-y-2 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                10+
              </div>
              <div className="text-foreground/70 font-medium">Technologies</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
