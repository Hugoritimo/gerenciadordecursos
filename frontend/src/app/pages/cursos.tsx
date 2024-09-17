// pages/cursos.tsx
import { useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import CourseList from "../components/CourseList";

export default function Cursos() {
  // Lista de cursos inicial
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

  // Função onDelete para excluir um curso
  const handleDeleteCourse = (courseToDelete, index) => {
    // Remove o curso com base no índice
    const updatedCourses = courses.filter((_, i) => i !== index);
    setCourses(updatedCourses); // Atualiza o estado com a lista de cursos sem o curso deletado
  };

  return (
    <Box p="4rem">
      <Heading textAlign="center" mb="2rem">
        Sistema de Gerenciamento de Cursos
      </Heading>

      {/* Lista de Cursos - Passando a função onDelete */}
      <CourseList
        courses={courses}
        onDelete={handleDeleteCourse} // Passa a função onDelete para CourseList
      />
    </Box>
  );
}
