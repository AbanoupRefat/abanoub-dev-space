import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Code, Globe, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-primary bg-clip-text text-transparent">{t("about.title")}</span>
          </h1>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            {t("about.subtitle")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction Card */}
          <Card className="rounded-2xl border-border/50 animate-fade-in-up">
            <CardContent className="p-8 space-y-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-foreground/80 leading-relaxed">
                  {t("about.intro")}
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
                <h3 className="text-xl font-bold">{t("about.desktopExp")}</h3>
                <p className="text-sm text-foreground/70">
                  {t("about.desktopExpDesc")}
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-border/50 hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6 space-y-4 text-center">
                <div className="inline-flex p-3 rounded-xl bg-accent/10">
                  <Globe className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold">{t("about.webExp")}</h3>
                <p className="text-sm text-foreground/70">
                  {t("about.webExpDesc")}
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-border/50 hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6 space-y-4 text-center">
                <div className="inline-flex p-3 rounded-xl bg-primary/10">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{t("about.aiExp")}</h3>
                <p className="text-sm text-foreground/70">
                  {t("about.aiExpDesc")}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Career Highlights */}
          <Card className="rounded-2xl border-border/50 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <CardContent className="p-8 space-y-6">
              <h2 className="text-2xl font-bold">{t("about.careerTitle")}</h2>
            </CardContent>
          </Card>

          {/* Download CV */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <Button
              size="lg"
              className="rounded-xl bg-gradient-primary hover:opacity-90 transition-opacity"
              asChild
            >
              <a
                href="https://docs.google.com/document/d/1bZbjmW6df-frtfODZQXVgKl35Xa8rx6X/edit?usp=sharing&ouid=111859888948996290145&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-5 w-5" />
                {t("about.downloadCV")}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
