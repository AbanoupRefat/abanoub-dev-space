export interface Skill {
  name: string;
  category: "Languages" | "Frameworks" | "Databases" | "Tools";
  logo: string;
}

export const skills: Skill[] = [
  // Languages
  { name: "C#", category: "Languages", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { name: "JavaScript", category: "Languages", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", category: "Languages", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Python", category: "Languages", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "SQL", category: "Languages", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  
  // Frameworks
  { name: "WinForms", category: "Frameworks", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
  { name: "Next.js", category: "Frameworks", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "React", category: "Frameworks", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Tailwind CSS", category: "Frameworks", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Streamlit", category: "Frameworks", logo: "https://streamlit.io/images/brand/streamlit-mark-color.svg" },
  
  // Databases
  { name: "SQL Server", category: "Databases", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
  { name: "SQLite", category: "Databases", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
  { name: "Supabase", category: "Databases", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
  { name: "PostgreSQL", category: "Databases", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  
  // Tools
  { name: "Git", category: "Tools", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", category: "Tools", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Visual Studio", category: "Tools", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" },
  { name: "VS Code", category: "Tools", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
];

export const skillCategories = ["Languages", "Frameworks", "Databases", "Tools"] as const;
