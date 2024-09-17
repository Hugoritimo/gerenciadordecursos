// src/pages/_app.tsx
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/global.css"; // Importando o CSS global

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
