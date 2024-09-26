// Importa `useState` para gerenciar o estado do componente
// Importa componentes do Chakra UI para layout e estilo
import { useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import CourseList from "../components/CourseList"; // Importa o componente `CourseList` para renderizar a lista de cursos

// Função principal do componente `Cursos`, que exibe a lista de cursos e permite gerenciá-los
export default function Cursos() {
  // Estado inicial `courses`, contendo uma lista de cursos (como exemplo)
  const [courses, setCourses] = useState([
    {
      name: "Curso A",
      price: "150.00",
      duration: "10",
      discountPrice: "120.00",
      content: "Conteúdo do Curso A",
    },
    {
      name: "Curso B",
      price: "200.00",
      duration: "12",
      discountPrice: "180.00",
      content: "Conteúdo do Curso B",
    },
  ]);

  // Função que lida com a exclusão de um curso da lista
  const handleDeleteCourse = (courseToDelete, index) => {
    // Cria uma nova lista de cursos sem o curso que foi excluído
    const updatedCourses = courses.filter((_, i) => i !== index);
    // Atualiza o estado `courses` para refletir a nova lista de cursos
    setCourses(updatedCourses);
  };

  // Retorna o JSX que será renderizado na página
  return (
    <Box p="4rem">
      {/* Título da página */}
      <Heading textAlign="center" mb="2rem">
        Sistema de Gerenciamento de Cursos
      </Heading>

      {/* Renderiza a lista de cursos usando o componente `CourseList` */}
      {/* Passa a lista de cursos e a função de exclusão como props */}
      <CourseList
        courses={courses}
        onDelete={handleDeleteCourse} // Função para excluir curso é passada como prop
      />
    </Box>
  );
}
