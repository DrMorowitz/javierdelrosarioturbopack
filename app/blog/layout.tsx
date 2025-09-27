import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blog del Dr. Javier del Rosario - Educación Urológica en Panamá",
  description: "Blog educativo sobre urología en Panamá. Información sobre cálculos renales, próstata, síntomas de alerta, prevención y procedimientos urológicos. Contenido médico confiable.",
  keywords: "blog urología panamá, educación urológica, cálculos renales información, síntomas urinarios, prevención urológica, procedimientos explicados",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}