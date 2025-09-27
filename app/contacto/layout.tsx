import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contacto - Dr. Javier del Rosario Urólogo",
  description: "Agenda tu consulta en nuestras 3 ubicaciones: The Panama Clinic, CHSF-Coronado, Centro Médico del Caribe-Colón",
  keywords: "contacto urólogo panamá, agendar consulta urología, panama clinic, coronado, colón, cliniweb",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}