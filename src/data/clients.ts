export interface Client {
  id: string;
  name: string;
  logo?: string;
}

export const clients: Client[] = [
  { id: "fady", name: "Fady El Raheb" },
  { id: "semsem", name: "Semsem Mercedes" },
  { id: "salam", name: "El Salam Co." },
  { id: "skinlove", name: "Skinlove" },
  { id: "coffeemaker", name: "CoffeeMaker.eg" },
  { id: "mobily", name: "Mobily" },
  { id: "roots", name: "Roots | بذور" },
];
