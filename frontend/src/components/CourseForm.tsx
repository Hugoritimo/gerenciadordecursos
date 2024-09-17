import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Text,
  Flex,
} from "@chakra-ui/react";

export default function CourseForm({ onSubmit, initialData }) {
  return (
    <Flex justify="center" align="center" mt="100px">
      <Stack direction={["column", "row"]} spacing={10} align="flex-start">
        {/* Área de Upload da Imagem */}
        <Box
          bg="gray.400"
          p={8}
          borderRadius="md"
          textAlign="center"
          width="200px"
          height="250px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Text color="white">upload da imagem</Text>
        </Box>

        {/* Formulário de Cadastro */}
        <Box as="form" width="100%" maxW="500px" onSubmit={onSubmit}>
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormLabel fontWeight="bold" color="gray.600">
                Título do Vídeo
              </FormLabel>
              <Input type="text" placeholder="Insira o título" bg="gray.50" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontWeight="bold" color="gray.600">
                Carga Horária
              </FormLabel>
              <Input
                type="text"
                placeholder="Insira a carga horária"
                bg="gray.50"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontWeight="bold" color="gray.600">
                Preço
              </FormLabel>
              <Input type="number" placeholder="Insira o preço" bg="gray.50" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontWeight="bold" color="gray.600">
                Preço com Desconto
              </FormLabel>
              <Input
                type="number"
                placeholder="Insira o preço com desconto"
                bg="gray.50"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontWeight="bold" color="gray.600">
                Conteúdo
              </FormLabel>
              <Textarea placeholder="Descreva o conteúdo" bg="gray.50" />
            </FormControl>

            {/* Botão de Cadastro */}
            <Button
              type="submit"
              bg="black"
              color="white"
              _hover={{ bg: "gray.800" }}
              width="100%"
              py={6} /* Aumentando a altura do botão */
              fontSize="lg" /* Tornando o texto maior */
            >
              Cadastrar Curso
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
