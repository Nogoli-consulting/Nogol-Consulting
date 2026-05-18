export interface PasoProceso {
  numero: number;
  titulo: string;
  descripcion: string;
}

export const proceso: PasoProceso[] = [
  {
    numero: 1,
    titulo: "Diagnóstico",
    descripcion: "Entiendo la realidad operativa actual de tu empresa.",
  },
  {
    numero: 2,
    titulo: "Diseño",
    descripcion: "Definimos el sistema de trabajo que necesita tu organización.",
  },
  {
    numero: 3,
    titulo: "Implementación",
    descripcion: "Instalamos el sistema con el equipo, no para el equipo.",
  },
  {
    numero: 4,
    titulo: "Seguimiento",
    descripcion: "Auditorías livianas para que el sistema se sostenga.",
  },
];
