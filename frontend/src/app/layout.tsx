import type { Metadata } from "next";
import "./globals.css";

// Definição dos metadados da página
export const metadata: Metadata = {
  title: "Gerenciador de Cursos",
  description: "Teste Técnico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
