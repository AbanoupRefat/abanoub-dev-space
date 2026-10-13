export interface Project {
  id: string;
  title: string;
  client: string;
  clientLogo?: string;
  description: string;
  features: string[];
  techStack: string[];
  category: "desktop" | "web";
  image?: string;
  images?: string[];
}

export const projects: Project[] = [
  // Desktop Apps
  {
    id: "cwa-recorder",
    title: "Code With Abanoub Recorder",
    client: "Code With Abanoub",
    description: "Windows desktop screen recorder built for recording programming lessons, with a record, review and mark workflow and a built-in export pipeline.",
    features: [
      "Drives a bundled OBS Studio engine through obs-websocket",
      "Record, review and mark workflow for lesson takes",
      "Rust FFmpeg export pipeline",
      "Native Windows capture path (in active development)"
    ],
    techStack: ["Tauri v2", "Rust", "React", "TypeScript", "FFmpeg", "OBS"],
    category: "desktop"
  },
  {
    id: "jewellery-management",
    title: "Jewellery Management System",
    client: "Fady El Raheb",
    description: "Comprehensive management system for jewelry inventory, sales, and customer tracking with advanced reporting capabilities.",
    features: [
      "Inventory management with gold/silver tracking",
      "Sales and invoicing system",
      "Customer database management",
      "Real-time reporting and analytics"
    ],
    techStack: ["C#", "WinForms", "SQL Server", "Crystal Reports"],
    category: "desktop"
  },
  {
    id: "car-spare-parts",
    title: "Car Spare Parts Management",
    client: "Semsem Mercedes",
    description: "Complete inventory and sales management solution for automotive spare parts with barcode integration.",
    features: [
      "Multi-warehouse inventory control",
      "Barcode scanning integration",
      "Purchase order management",
      "Sales and profit tracking"
    ],
    techStack: ["C#", "WinForms", "SQL Server"],
    category: "desktop"
  },
  {
    id: "cement-blocks-inventory",
    title: "Cement & Blocks Inventory System",
    client: "El Salam Co.",
    description: "Specialized inventory system for construction materials with weight-based calculations and delivery tracking.",
    features: [
      "Weight-based inventory management",
      "Delivery schedule tracking",
      "Customer credit management",
      "Production monitoring"
    ],
    techStack: ["C#", "WinForms", "SQLite"],
    category: "desktop"
  },
  {
    id: "skincare-system",
    title: "Multi-Branch Skincare System",
    client: "Skinlove",
    description: "Cloud-based POS and inventory system for multiple skincare clinic branches with real-time synchronization.",
    features: [
      "Multi-branch support with cloud sync",
      "Customer appointment scheduling",
      "Product and service management",
      "Employee performance tracking"
    ],
    techStack: ["C#", "WinForms", "Supabase", "PostgreSQL"],
    category: "desktop"
  },
  {
    id: "coffeemaker-stock",
    title: "Stock Management System",
    client: "CoffeeMaker.eg",
    description: "Lightweight stock management system for e-commerce inventory with seamless online store integration.",
    features: [
      "Product inventory tracking",
      "Low stock alerts",
      "Sales integration with e-commerce",
      "Supplier management"
    ],
    techStack: ["C#", "WinForms", "SQLite"],
    category: "desktop"
  },
  {
    id: "mobile-store-system",
    title: "Mobile Store Stock System",
    client: "Mobily",
    description: "Specialized system for mobile phone retail with IMEI tracking and warranty management.",
    features: [
      "IMEI tracking for devices",
      "Warranty management",
      "Customer installment plans",
      "Accessories inventory"
    ],
    techStack: ["C#", "WinForms", "SQLite"],
    category: "desktop"
  },
  // Web Apps
  {
    id: "da3wa",
    title: "Da3wa Interactive Wedding Invitations",
    client: "Da3wa",
    description: "Reusable, config-driven wedding invitation web app, re-skinned per couple, with heavy animation and a scroll-snap storytelling flow.",
    features: [
      "Interactive gate opener with hinge physics",
      "Countdown with calendar (.ics) download",
      "Draggable story timeline and guest book",
      "Location page with Google Maps and per-client theming"
    ],
    techStack: ["React", "Vite", "GSAP", "Howler.js", "Vercel"],
    category: "web"
  },
  {
    id: "barber-queue",
    title: "Barber Queue & Reservation System",
    client: "Private Client",
    description: "Walk-in friendly queue and reservation system for a multi-barber shop, with a customer web app, an admin queue screen and a desktop reporter for receipts and bonuses.",
    features: [
      "Live queue tracking with ETA based on a rolling average of real service times",
      "Admin controls to block reservations, reorder the queue and reserve manually",
      "Receipt entry, daily reports, expenses and bonus configuration",
      "Realtime updates across customer and admin screens"
    ],
    techStack: ["Supabase", "PostgreSQL", "Realtime"],
    category: "web"
  },
  {
    id: "coffeemaker-ecommerce",
    title: "CoffeeMaker E-commerce Platform",
    client: "CoffeeMaker.eg",
    description: "Full-featured e-commerce website for premium coffee products with modern design and smooth user experience.",
    features: [
      "Product catalog with filtering",
      "Shopping cart and checkout",
      "Order management dashboard",
      "Customer accounts and order history"
    ],
    techStack: ["React", "Tailwind CSS", "Supabase", "TypeScript"],
    category: "web",
    image: "https://coffeemakereg.com"
  },
  {
    id: "roots-bamboo",
    title: "Roots | بذور Landing Page",
    client: "Roots | بذور",
    description: "Beautiful, eco-friendly landing page for bamboo straws brand with bilingual support and modern animations.",
    features: [
      "Bilingual (Arabic/English) support",
      "Product showcase with animations",
      "Contact form integration",
      "Responsive design"
    ],
    techStack: ["React", "Tailwind CSS", "TypeScript"],
    category: "web"
  }
];
