// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider> {/* ChakraProvider ao redor de toda a aplicação */}
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
