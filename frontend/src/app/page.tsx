"use client";
import { useState, useEffect } from "react";
import { Box, Container, useToast } from "@chakra-ui/react";
import CourseForm from "../components/CourseForm";
import CourseList from "../components/CourseList";
import Navbar from "../components/UI/Navbar"; // Ajuste o caminho se necessário
import { useRouter } from "next/navigation"; // Correto para Next.js

export default function Home() {
  const [courses, setCourses] = useState([]);
  const [editingCourse, setEditingCourse] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const toast = useToast(); // Inicializa o Toast
  const router = useRouter(); // Inicializa o roteador corretamente

  // Carregar cursos salvos no localStorage ao iniciar (somente no lado do cliente)
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const savedCourses = JSON.parse(localStorage.getItem("courses")) || [];
        setCourses(savedCourses);
      } catch (error) {
        console.error("Erro ao carregar cursos do localStorage:", error);
      }
    }
  }, []);

  // Atualizar localStorage quando a lista de cursos mudar (somente no lado do cliente)
  useEffect(() => {
    if (typeof window !== "undefined" && courses.length > 0) {
      try {
        const serializableCourses = courses.map((course) => {
          return { ...course }; // Garantir que estamos serializando objetos simples
        });
        localStorage.setItem("courses", JSON.stringify(serializableCourses));
      } catch (error) {
        console.error("Erro ao salvar cursos no localStorage:", error);
      }
    }
  }, [courses]);

  // Função para adicionar ou editar curso
  const handleAddOrEditCourse = (courseData) => {
    if (editingCourse !== null) {
      const updatedCourses = [...courses];
      updatedCourses[editingIndex] = courseData;
      setCourses(updatedCourses);
      setEditingCourse(null);
      setEditingIndex(null);

      toast({
        title: "Curso atualizado.",
        description: `O curso ${courseData.name} foi atualizado com sucesso.`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      const newCourse = { ...courseData, id: Date.now().toString() };
      setCourses([...courses, newCourse]);

      toast({
        title: "Curso adicionado.",
        description: `O curso ${newCourse.name} foi adicionado com sucesso.`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  // Função para editar curso
  const handleEditCourse = (course, index) => {
    setEditingCourse(course);
    setEditingIndex(index);
  };

  // Função para excluir curso
  const handleDeleteCourse = (index) => {
    const updatedCourses = courses.filter((_, i) => i !== index);
    setCourses(updatedCourses);

    toast({
      title: "Curso excluído.",
      description: "O curso foi removido com sucesso.",
      status: "warning",
      duration: 3000,
      isClosable: true,
    });
  };

  // Função para visualizar os detalhes do curso
  const handleViewDetails = (id) => {
    router.push(`/cursos/${id}`);
  };

  return (
    <Box bg="gray.100" minHeight="100vh" p="2rem">
      <Navbar />
      <Container
        maxW="container.lg"
        mt="2rem"
        boxShadow="lg"
        p="2rem"
        bg="white"
        borderRadius="md"
      >
        {/* Formulário de Adicionar/Editar Cursos */}
        <CourseForm
          onSubmit={handleAddOrEditCourse}
          initialData={editingCourse}
        />

        {/* Lista de Cursos */}
        <CourseList
          courses={courses}
          onEdit={handleEditCourse}
          onDelete={handleDeleteCourse}
          onViewDetails={handleViewDetails} // Função para ver detalhes
        />
      </Container>
    </Box>
  );
}
