"use client";
import { useState, useEffect } from "react";
import CourseForm from "../components/CourseForm";
import CourseList from "../components/CourseList";
import Navbar from "../components/UI/Navbar";
import { useRouter } from "next/navigation";
import axios from "axios"; // Para fazer requisições ao backend

export default function Home() {
  const [courses, setCourses] = useState([]);
  const [editingCourse, setEditingCourse] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const router = useRouter();

  // Carregar cursos do backend
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:3001/cursos");
        setCourses(response.data); // Carregar cursos no estado
      } catch (error) {
        console.error("Erro ao carregar cursos do backend:", error);
      }
    };

    fetchCourses();
  }, []);

  // Adicionar ou editar curso
  const handleAddOrEditCourse = async (courseData) => {
    try {
      if (editingCourse !== null) {
        console.log("Editando curso:", courseData); // Verifique o curso que está sendo enviado
        const response = await axios.put(
          `http://localhost:3001/cursos/${editingCourse.id}`,
          courseData
        );
        console.log("Resposta ao editar curso:", response.data); // Verifique a resposta do backend
        const updatedCourses = [...courses];
        updatedCourses[editingIndex] = response.data;
        setCourses(updatedCourses);
        setEditingCourse(null);
        setEditingIndex(null);
      } else {
        console.log("Adicionando novo curso:", courseData); // Verifique os dados que estão sendo enviados
        const response = await axios.post(
          "http://localhost:3001/cursos",
          courseData
        );
        console.log("Novo curso adicionado:", response.data); // Log para verificar a resposta
        setCourses([...courses, response.data]); // Atualiza a lista de cursos
      }
    } catch (error) {
      console.error("Erro ao adicionar/editar curso:", error);
    }
  };

  // Editar curso
  const handleEditCourse = (course, index) => {
    setEditingCourse(course);
    setEditingIndex(index);
  };

  // Excluir curso
  const handleDeleteCourse = async (index) => {
    const courseToDelete = courses[index];
    try {
      await axios.delete(`http://localhost:3001/cursos/${courseToDelete.id}`);
      const updatedCourses = courses.filter((_, i) => i !== index);
      setCourses(updatedCourses);
    } catch (error) {
      console.error("Erro ao excluir curso:", error);
    }
  };

  // Visualizar detalhes do curso
  const handleViewDetails = (id) => {
    router.push(`/cursos/${id}`);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto bg-white p-6 shadow-lg rounded-md max-w-xl">
          <h1 className="text-2xl font-bold mb-6">Gerenciar Cursos</h1>
          <CourseForm
            onSubmit={handleAddOrEditCourse}
            initialData={editingCourse}
          />
          <CourseList
            courses={courses}
            onEdit={handleEditCourse}
            onDelete={handleDeleteCourse}
            onViewDetails={handleViewDetails}
          />
        </div>
      </div>
    </div>
  );
}
