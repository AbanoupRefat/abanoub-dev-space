import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Project } from "@/data/projects";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden rounded-2xl border-border/50 bg-card hover:shadow-elegant transition-all duration-300 hover:scale-[1.02]">
      {/* Project Image Placeholder */}
      <div className="aspect-video bg-gradient-primary opacity-10 group-hover:opacity-20 transition-opacity" />
      
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
            <div className="flex items-center gap-2">
              {project.clientLogo && (
                <img 
                  src={project.clientLogo} 
                  alt={project.client}
                  className="w-6 h-6 object-contain"
                />
              )}
              <CardDescription className="text-sm text-muted-foreground">
                {project.client}
              </CardDescription>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-foreground/80 leading-relaxed">
          {project.description}
        </p>

        {/* Features */}
        <div className="space-y-2">
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Key Features
          </h4>
          <ul className="text-xs text-foreground/70 space-y-1">
            {project.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="space-y-2">
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs font-medium"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* View Details Button */}
        <Button
          variant="outline"
          className="w-full rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
          asChild
        >
          <Link to={`/projects/${project.id}`}>
            View Details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
