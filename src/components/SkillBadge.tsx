interface SkillBadgeProps {
  name: string;
  logo: string;
  delay?: number;
}

const SkillBadge = ({ name, logo, delay = 0 }: SkillBadgeProps) => {
  return (
    <div
      className="flex flex-col items-center gap-3 p-4 rounded-xl border-2 border-border/50 hover:border-primary hover:bg-primary/5 transition-all duration-300 cursor-default animate-fade-in group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 flex items-center justify-center">
        <img 
          src={logo} 
          alt={name}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <span className="text-sm font-medium text-center">{name}</span>
    </div>
  );
};

export default SkillBadge;
