export interface Skill {
  name: string;
  category: "Languages" | "Frameworks" | "Databases" | "Tools";
  icon?: string;
}

export const skills: Skill[] = [
  // Languages
  { name: "C#", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "SQL", category: "Languages" },
  
  // Frameworks
  { name: "WinForms", category: "Frameworks" },
  { name: "Next.js", category: "Frameworks" },
  { name: "React", category: "Frameworks" },
  { name: "Tailwind CSS", category: "Frameworks" },
  { name: "Streamlit", category: "Frameworks" },
  
  // Databases
  { name: "SQL Server", category: "Databases" },
  { name: "SQLite", category: "Databases" },
  { name: "Supabase", category: "Databases" },
  { name: "PostgreSQL", category: "Databases" },
  
  // Tools
  { name: "Git", category: "Tools" },
  { name: "GitHub", category: "Tools" },
  { name: "Visual Studio", category: "Tools" },
  { name: "VS Code", category: "Tools" },
];

export const skillCategories = ["Languages", "Frameworks", "Databases", "Tools"] as const;
