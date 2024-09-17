// pages/index.tsx
import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bg="gray.100"
      padding="2rem"
    >
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Bem-vindo à Página Inicial
        </Heading>
        <Text fontSize="lg" color="gray.600" textAlign="center">
          Aqui você pode navegar pelas seções do aplicativo e acessar as
          funcionalidades.
        </Text>
        <Button
          colorScheme="teal"
          size="lg"
          onClick={() => router.push("/profile")}
        >
          Acessar Perfil
        </Button>
      </VStack>
    </Box>
  );
}
