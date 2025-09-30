import { skills, skillCategories } from "@/data/skills";
import SkillBadge from "@/components/SkillBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Layers, Database, Wrench } from "lucide-react";

const categoryIcons = {
  Languages: Code,
  Frameworks: Layers,
  Databases: Database,
  Tools: Wrench,
};

const Skills = () => {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold">
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h1>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit for building robust desktop applications and modern web experiences
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = categoryIcons[category];
            const categorySkills = skills.filter((s) => s.category === category);
            
            return (
              <Card
                key={category}
                className="rounded-2xl border-border/50 hover:shadow-elegant transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {categorySkills.map((skill, skillIndex) => (
                      <SkillBadge
                        key={skill.name}
                        name={skill.name}
                        delay={(categoryIndex * 100) + (skillIndex * 50)}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 max-w-3xl mx-auto">
          <Card className="rounded-2xl border-border/50 bg-gradient-to-br from-primary/5 to-accent/5 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <CardContent className="p-8 text-center space-y-4">
              <h3 className="text-2xl font-bold">Always Learning</h3>
              <p className="text-foreground/70 leading-relaxed">
                Technology evolves rapidly, and so do I. I'm constantly exploring new tools, frameworks, and best practices to deliver cutting-edge solutions. Currently diving deeper into cloud architectures and AI integration.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skills;
