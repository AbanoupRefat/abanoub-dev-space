import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button asChild>
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="mb-8 animate-fade-in"
          asChild
        >
          <Link to="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        {/* Project Header */}
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-4 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              {project.clientLogo && (
                <img 
                  src={project.clientLogo} 
                  alt={project.client}
                  className="w-12 h-12 object-contain"
                />
              )}
              <h1 className="text-4xl md:text-5xl font-bold">
                {project.title}
              </h1>
            </div>
            <p className="text-xl text-foreground/70">{project.client}</p>
          </div>

          {/* Project Images */}
          {project.images && project.images.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up">
              {project.images.map((image, index) => (
                <Card key={index} className="overflow-hidden rounded-2xl border-border/50">
                  <div className="aspect-video bg-gradient-primary opacity-10">
                    {/* Image placeholder - in production, these would be actual images */}
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Project Description */}
          <Card className="rounded-2xl border-border/50 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <CardContent className="p-8 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">About This Project</h2>
                <p className="text-foreground/80 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-xl font-bold mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary mt-1 text-lg">•</span>
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-xl font-bold mb-4">Technology Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-sm font-medium px-4 py-2"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Category Badge */}
              <div>
                <Badge
                  variant="outline"
                  className="text-sm font-medium px-4 py-2"
                >
                  {project.category === "desktop" ? "Desktop Application" : "Web Application"}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
