import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Code, Globe, Sparkles } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Software engineer passionate about creating efficient solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction Card */}
          <Card className="rounded-2xl border-border/50 animate-fade-in-up">
            <CardContent className="p-8 space-y-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2 className="text-2xl font-bold mb-4">Hello! 👋</h2>
                <p className="text-foreground/80 leading-relaxed">
                  I'm Abanoub Refaat, a software engineer specializing in desktop and web application development. 
                  With a strong foundation in C# and modern web technologies, I create solutions that help businesses 
                  streamline their operations and scale efficiently.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  My journey in software development has taken me across diverse industries - from jewelry management 
                  to e-commerce platforms. I take pride in understanding unique business needs and translating them 
                  into robust, user-friendly applications.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* What I Do */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <Card className="rounded-2xl border-border/50 hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6 space-y-4 text-center">
                <div className="inline-flex p-3 rounded-xl bg-primary/10">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Desktop Apps</h3>
                <p className="text-sm text-foreground/70">
                  Building powerful Windows applications with C# and .NET that handle complex business logic
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-border/50 hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6 space-y-4 text-center">
                <div className="inline-flex p-3 rounded-xl bg-accent/10">
                  <Globe className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold">Web Development</h3>
                <p className="text-sm text-foreground/70">
                  Creating modern, responsive web applications with React, TypeScript, and Tailwind CSS
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-border/50 hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6 space-y-4 text-center">
                <div className="inline-flex p-3 rounded-xl bg-primary/10">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">AI Integration</h3>
                <p className="text-sm text-foreground/70">
                  Experimenting with AI technologies to enhance applications with intelligent features
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Career Highlights */}
          <Card className="rounded-2xl border-border/50 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <CardContent className="p-8 space-y-6">
              <h2 className="text-2xl font-bold">Career Highlights</h2>
              
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4 space-y-2">
                  <h3 className="font-semibold text-lg">Desktop Application Specialist</h3>
                  <p className="text-sm text-foreground/70">
                    Developed 6+ enterprise-level desktop applications for inventory management, POS systems, 
                    and business operations across various industries.
                  </p>
                </div>

                <div className="border-l-2 border-accent pl-4 space-y-2">
                  <h3 className="font-semibold text-lg">Full-Stack Web Developer</h3>
                  <p className="text-sm text-foreground/70">
                    Built modern e-commerce platforms and landing pages using React, Supabase, and Tailwind CSS, 
                    delivering seamless user experiences.
                  </p>
                </div>

                <div className="border-l-2 border-primary pl-4 space-y-2">
                  <h3 className="font-semibold text-lg">Database Architecture</h3>
                  <p className="text-sm text-foreground/70">
                    Designed and implemented efficient database solutions using SQL Server, SQLite, and PostgreSQL 
                    for optimal performance and scalability.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Download CV */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <Button
              size="lg"
              className="rounded-xl bg-gradient-primary hover:opacity-90 transition-opacity"
              onClick={() => {
                // In a real scenario, this would download a PDF
                alert("CV download would start here");
              }}
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
