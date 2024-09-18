import { Box, Flex, Text } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box bg="teal.500" p="4">
      <Flex justify="center">
        <Text color="white" fontSize="lg" fontWeight="bold">
          Gerenciamento de Cursos
        </Text>
      </Flex>
    </Box>
  );
}
