export interface Servicio {
  id: number;
  numero: string;
  nombre: string;
  pilar: string;
  descripcion: string;
  icono: string;
}

export const servicios: Servicio[] = [
  {
    id: 1,
    numero: "01",
    nombre: "Diagnóstico de claridad operativa",
    pilar: "Dirección y Norte Estratégico",
    descripcion:
      "Identificamos con precisión dónde está el desorden, qué lo genera y cuál es el punto de entrada más efectivo para ordenar la operación.",
    icono: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v6"/><path d="M8 11h6"/></svg>`,
  },
  {
    id: 2,
    numero: "02",
    nombre: "Liberación del tiempo del dueño/gerente",
    pilar: "Traducción Organizacional",
    descripcion:
      "Diseñamos los procesos y responsabilidades que permiten que la operación funcione sin que todo dependa siempre de la misma persona.",
    icono: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  },
  {
    id: 3,
    numero: "03",
    nombre: "Diseño e implementación de sistemas de gestión vivo",
    pilar: "Traducción Organizacional",
    descripcion:
      "Instalamos un sistema simple que define cómo se decide, cómo se compromete, cómo se ejecuta y cómo se mejora.",
    icono: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>`,
  },
  {
    id: 4,
    numero: "04",
    nombre: "Implementación de rituales de gestión",
    pilar: "Comunicación y Coordinación",
    descripcion:
      "Creamos rutinas concretas de coordinación que mantienen el sistema vivo sin agregar burocracia.",
    icono: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/></svg>`,
  },
  {
    id: 5,
    numero: "05",
    nombre: "Mentoría para la transición estratégica",
    pilar: "Confianza y Liderazgo",
    descripcion:
      "Acompañamos a dueños y directores en el proceso de soltar la operación y enfocarse en la dirección.",
    icono: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  },
];
