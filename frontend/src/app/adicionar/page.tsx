"use client"; // Indica que este é um componente client-side em Next.js

// Importa hooks e bibliotecas necessárias
import { useState } from "react"; // Hook para gerenciar estado (variáveis) dentro do componente
import axios from "axios"; // Biblioteca para fazer requisições HTTP
import { useRouter } from "next/router"; // Hook para navegar (redirecionar) entre páginas

// Função que representa o componente de adicionar curso
export default function AdicionarCurso() {
  // Estados para armazenar os valores dos campos do formulário
  const [titulo, setTitulo] = useState(""); // Estado para armazenar o título do curso
  const [descricao, setDescricao] = useState(""); // Estado para armazenar a descrição do curso
  const [preco, setPreco] = useState(""); // Estado para armazenar o preço do curso
  const router = useRouter(); // Hook para redirecionar o usuário para outras páginas

  // Função chamada quando o formulário é enviado
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que a página recarregue ao enviar o formulário
    try {
      // Faz uma requisição POST para a API para criar um novo curso
      await axios.post("http://localhost:3001/cursos", {
        titulo,
        descricao,
        preco,
      });
      // Se a requisição der certo, redireciona o usuário para a página de listagem de cursos
      router.push("/cursos");
    } catch (error) {
      // Caso aconteça algum erro na requisição, mostra uma mensagem de erro no console
      console.error("Erro ao adicionar curso:", error);
    }
  };

  // JSX (HTML do React) para renderizar o formulário de adicionar curso
  return (
    <form onSubmit={handleSubmit}>
      {/* Campo para inserir o título do curso */}
      <input
        type="text"
        value={titulo} // Liga o valor do input ao estado `titulo`
        onChange={(e) => setTitulo(e.target.value)} // Atualiza o estado quando o usuário digita
        placeholder="Título" // Texto que aparece no campo vazio
        required // Faz com que esse campo seja obrigatório
      />
      {/* Campo para inserir a descrição do curso */}
      <textarea
        value={descricao} // Liga o valor do textarea ao estado `descricao`
        onChange={(e) => setDescricao(e.target.value)} // Atualiza o estado quando o usuário digita
        placeholder="Descrição" // Texto que aparece no campo vazio
        required // Faz com que esse campo seja obrigatório
      />
      {/* Campo para inserir o preço do curso */}
      <input
        type="number"
        value={preco} // Liga o valor do input ao estado `preco`
        onChange={(e) => setPreco(e.target.value)} // Atualiza o estado quando o usuário digita
        placeholder="Preço" // Texto que aparece no campo vazio
        required // Faz com que esse campo seja obrigatório
      />
      {/* Botão para enviar o formulário */}
      <button type="submit">Adicionar Curso</button>
    </form>
  );
}
