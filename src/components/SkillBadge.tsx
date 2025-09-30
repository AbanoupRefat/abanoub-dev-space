import { Badge } from "./ui/badge";

interface SkillBadgeProps {
  name: string;
  delay?: number;
}

const SkillBadge = ({ name, delay = 0 }: SkillBadgeProps) => {
  return (
    <Badge
      variant="outline"
      className="text-sm font-medium px-4 py-2 rounded-xl border-2 hover:border-primary hover:bg-primary/5 transition-all duration-300 cursor-default animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      {name}
    </Badge>
  );
};

export default SkillBadge;
