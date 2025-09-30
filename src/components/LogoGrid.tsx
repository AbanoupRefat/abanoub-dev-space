import { clients } from "@/data/clients";

const LogoGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center">
      {clients.map((client, index) => (
        <div
          key={client.id}
          className="flex items-center justify-center p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-soft transition-all duration-300 animate-fade-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <span className="text-sm font-semibold text-foreground/70 text-center">
            {client.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default LogoGrid;
