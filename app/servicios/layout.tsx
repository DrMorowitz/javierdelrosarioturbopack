import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Servicios de Urología Especializada - Dr. Javier del Rosario",
  description: "Procedimientos especializados con tecnología de vanguardia y seguimiento personalizado",
  keywords: "servicios urología, cirugías próstata, cálculos renales, biopsias próstata, consultas urológicas, panamá",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}