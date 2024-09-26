// Importa componentes do Chakra UI para layout, texto e botões
import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router"; // Importa `useRouter` para navegação entre páginas

// Função principal do componente `Home`, que é a página inicial da aplicação
export default function Home() {
  const router = useRouter(); // Usa o hook `useRouter` para navegar entre rotas no Next.js

  // Renderiza a página
  return (
    // `Box` é um contêiner flexível e customizável do Chakra UI
    <Box
      display="flex" // Define como `flex` para organizar o layout de forma flexível
      flexDirection="column" // Define a direção dos itens como coluna
      justifyContent="center" // Centraliza o conteúdo verticalmente
      alignItems="center" // Centraliza o conteúdo horizontalmente
      minHeight="100vh" // Define uma altura mínima para cobrir toda a tela (viewport)
      bg="gray.100" // Define a cor de fundo como um tom claro de cinza
      padding="2rem" // Adiciona um `padding` ao redor do conteúdo
    >
      {/* `VStack` é um empilhamento vertical com espaçamento entre itens */}
      <VStack spacing={8}>
        {/* Título principal da página */}
        <Heading as="h1" size="2xl" textAlign="center">
          Bem-vindo à Página Inicial
        </Heading>

        {/* Texto descritivo da página */}
        <Text fontSize="lg" color="gray.600" textAlign="center">
          Aqui você pode navegar pelas seções do aplicativo e acessar as
          funcionalidades.
        </Text>

        {/* Botão para navegar para a página de perfil */}
        <Button
          colorScheme="teal" // Cor do botão (usando o tema `teal` do Chakra UI)
          size="lg" // Tamanho do botão (`lg` para grande)
          onClick={() => router.push("/profile")} // Redireciona para a rota `/profile` ao clicar no botão
        >
          Acessar Perfil
        </Button>
      </VStack>
    </Box>
  );
}
