"use client"; // Indica que este componente é executado no client-side (navegador)

// Importações necessárias
import { useState, useEffect } from "react";
import CourseForm from "../components/CourseForm"; // Componente de formulário para adicionar/editar cursos
import CourseList from "../components/CourseList"; // Componente que renderiza a lista de cursos
import Navbar from "../components/UI/Navbar"; // Barra de navegação para a aplicação
import { useRouter } from "next/navigation"; // Hook para navegar entre páginas no Next.js
import axios from "axios"; // Biblioteca para fazer requisições HTTP ao backend

// Componente principal da página `Home`
export default function Home() {
  // Estados para gerenciar a lista de cursos e o estado de edição
  const [courses, setCourses] = useState([]); // Armazena a lista de cursos
  const [editingCourse, setEditingCourse] = useState(null); // Armazena o curso que está sendo editado
  const [editingIndex, setEditingIndex] = useState(null); // Armazena o índice do curso em edição
  const router = useRouter(); // Hook para navegação entre páginas

  // `useEffect` para carregar os cursos do backend ao montar o componente
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // Faz uma requisição `GET` para buscar os cursos no backend
        const response = await axios.get("http://localhost:3001/cursos");
        setCourses(response.data); // Atualiza o estado com os cursos obtidos
      } catch (error) {
        console.error("Erro ao carregar cursos do backend:", error); // Mostra erros no console
      }
    };

    fetchCourses(); // Executa a função de busca
  }, []);

  // Função para adicionar ou editar um curso
  const handleAddOrEditCourse = async (courseData) => {
    try {
      if (editingCourse !== null) {
        // Caso esteja editando um curso existente
        console.log("Editando curso:", courseData); // Log para verificar o curso sendo editado
        // Faz uma requisição `PUT` para atualizar o curso no backend
        const response = await axios.put(
          `http://localhost:3001/cursos/${editingCourse.id}`,
          courseData
        );
        console.log("Resposta ao editar curso:", response.data); // Verifica a resposta do backend
        // Atualiza o curso na lista de cursos
        const updatedCourses = [...courses];
        updatedCourses[editingIndex] = response.data;
        setCourses(updatedCourses); // Atualiza o estado com os cursos atualizados
        setEditingCourse(null); // Limpa o estado de edição
        setEditingIndex(null);
      } else {
        // Caso esteja adicionando um novo curso
        console.log("Adicionando novo curso:", courseData); // Verifica os dados que estão sendo enviados
        // Faz uma requisição `POST` para adicionar o curso ao backend
        const response = await axios.post(
          "http://localhost:3001/cursos",
          courseData
        );
        console.log("Novo curso adicionado:", response.data); // Log para verificar a resposta
        setCourses([...courses, response.data]); // Adiciona o novo curso à lista
      }
    } catch (error) {
      console.error("Erro ao adicionar/editar curso:", error); // Mostra erros no console
    }
  };

  // Função para editar um curso (preencher o formulário com os dados do curso selecionado)
  const handleEditCourse = (course, index) => {
    setEditingCourse(course); // Define o curso a ser editado
    setEditingIndex(index); // Armazena o índice do curso para atualização
  };

  // Função para excluir um curso
  const handleDeleteCourse = async (index) => {
    const courseToDelete = courses[index]; // Obtém o curso a ser excluído
    try {
      // Faz uma requisição `DELETE` para remover o curso do backend
      await axios.delete(`http://localhost:3001/cursos/${courseToDelete.id}`);
      // Filtra a lista de cursos para remover o curso excluído
      const updatedCourses = courses.filter((_, i) => i !== index);
      setCourses(updatedCourses); // Atualiza o estado com a lista de cursos atualizada
    } catch (error) {
      console.error("Erro ao excluir curso:", error); // Mostra erros no console
    }
  };

  // Função para visualizar os detalhes de um curso (redireciona para a página de detalhes)
  const handleViewDetails = (id) => {
    router.push(`/cursos/${id}`); // Navega para a rota `/cursos/[id]`
  };

  // Retorna a estrutura da página `Home`
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Renderiza a barra de navegação */}
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto bg-white p-6 shadow-lg rounded-md max-w-xl">
          {/* Título principal */}
          <h1 className="text-2xl font-bold mb-6">Gerenciar Cursos</h1>

          {/* Formulário para adicionar/editar cursos */}
          <CourseForm
            onSubmit={handleAddOrEditCourse} // Função de callback para adicionar/editar curso
            initialData={editingCourse} // Dados iniciais para edição
          />

          {/* Lista de cursos */}
          <CourseList
            courses={courses} // Passa a lista de cursos como prop
            onEdit={handleEditCourse} // Função para editar curso
            onDelete={handleDeleteCourse} // Função para excluir curso
            onViewDetails={handleViewDetails} // Função para visualizar detalhes
          />
        </div>
      </div>
    </div>
  );
}
