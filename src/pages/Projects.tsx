import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Monitor, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"all" | "desktop" | "web">("all");

  const desktopProjects = projects.filter((p) => p.category === "desktop");
  const webProjects = projects.filter((p) => p.category === "web");
  const allProjects = projects;

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-primary bg-clip-text text-transparent">{t("projects.title")}</span>
          </h1>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            {t("projects.subtitle")}
          </p>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as typeof activeTab)} className="space-y-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 rounded-xl h-12">
            <TabsTrigger value="all" className="rounded-lg">
              {t("projects.all")}
            </TabsTrigger>
            <TabsTrigger value="desktop" className="rounded-lg">
              <Monitor className="h-4 w-4 mr-2" />
              {t("projects.desktop")}
            </TabsTrigger>
            <TabsTrigger value="web" className="rounded-lg">
              <Globe className="h-4 w-4 mr-2" />
              {t("projects.web")}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            {/* Desktop Apps Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Monitor className="h-6 w-6 text-primary" />
                {t("projects.desktopApps")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {desktopProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>

            {/* Web Apps Section */}
            <div className="space-y-6 pt-8">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Globe className="h-6 w-6 text-primary" />
                {t("projects.webApps")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {webProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="desktop">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {desktopProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="web">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {webProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Projects;
