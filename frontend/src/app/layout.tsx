import type { Metadata } from "next"; // Importa o tipo `Metadata` do Next.js para definir informações da página
import "./globals.css"; // Importa estilos globais para toda a aplicação

// Definição dos metadados da página (como título e descrição)
// Esses metadados serão usados para melhorar a apresentação da página nos navegadores e redes sociais
export const metadata: Metadata = {
  title: "Gerenciador de Cursos", // Título da página que aparecerá na aba do navegador
  description: "Teste Técnico INAED", // Descrição que aparecerá ao compartilhar a página ou nos resultados de busca
};

// Define o layout raiz (`RootLayout`) que envolverá todas as páginas da aplicação
export default function RootLayout({
  children,
}: {
  children: React.ReactNode; // `children` representa o conteúdo das páginas que serão renderizadas dentro deste layout
}) {
  // Renderiza a estrutura HTML e o conteúdo da aplicação
  return (
    // Elemento `<html>` que define o idioma da página como português do Brasil
    <html lang="pt-BR">
      {/* `<body>` com a classe `antialiased` para melhorar a suavização de fontes */}
      <body className="antialiased">
        {/* Renderiza o conteúdo das páginas que serão filhos deste layout */}
        {children}
      </body>
    </html>
  );
}
