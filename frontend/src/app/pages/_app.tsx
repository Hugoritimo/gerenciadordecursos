// Importa o `ChakraProvider` da biblioteca `@chakra-ui/react`
// `ChakraProvider` é um componente que configura o Chakra UI como o sistema de design para a aplicação
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/global.css"; // Importa estilos globais da aplicação (arquivo CSS)

// Função `MyApp` é um componente especial em Next.js que sobrescreve o padrão de como as páginas são renderizadas
// `Component` é a página atual sendo renderizada
// `pageProps` são as props que essa página recebe
function MyApp({ Component, pageProps }) {
  return (
    // `ChakraProvider` envolve toda a aplicação para que os componentes do Chakra UI estejam disponíveis globalmente
    <ChakraProvider>
      {/* Renderiza a página atual com suas props */}
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

// Exporta `MyApp` como o componente padrão, que será usado para todas as páginas
export default MyApp;
