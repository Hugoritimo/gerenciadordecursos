"use client"; // Indica que este é um componente client-side (rodando no navegador)

import { useEffect, useState } from "react"; // Importa hooks para trabalhar com estado e efeitos colaterais
import axios from "axios"; // Biblioteca para fazer requisições HTTP

// Este componente exibe os detalhes de um curso baseado no seu `id`
export default function CursoDetalhe({ params }: { params: { id: string } }) {
  // Estados para gerenciar o curso, o carregamento e possíveis erros
  const [curso, setCurso] = useState(null); // Armazena o curso obtido da API
  const [loading, setLoading] = useState(true); // Indica se os dados ainda estão sendo carregados
  const [error, setError] = useState(null); // Armazena qualquer erro que ocorrer ao buscar o curso

  // `useEffect` é usado para buscar os detalhes do curso assim que o `id` estiver disponível
  useEffect(() => {
    if (params.id) {
      // Se houver um `id` de curso, faz a requisição para a API
      axios
        .get(`http://localhost:3001/cursos/${params.id}`) // Faz uma chamada GET para buscar o curso pelo `id`
        .then((response) => {
          setCurso(response.data); // Define o estado `curso` com os dados recebidos
          setLoading(false); // Indica que o carregamento terminou
        })
        .catch((error) => {
          // Caso ocorra algum erro ao buscar os dados
          console.error("Erro ao buscar curso:", error); // Mostra o erro no console
          setError("Erro ao carregar o curso."); // Define uma mensagem de erro no estado
          setLoading(false); // Indica que o carregamento terminou (mesmo com erro)
        });
    }
  }, [params.id]); // Executa o efeito quando o `params.id` muda

  // Se ainda estiver carregando, mostra uma mensagem de carregamento
  if (loading) return <div>Carregando...</div>;
  // Se ocorreu um erro, exibe a mensagem de erro
  if (error) return <div>{error}</div>;
  // Se não encontrou o curso, exibe uma mensagem correspondente
  if (!curso) return <div>Curso não encontrado</div>;

  // Renderiza os detalhes do curso
  return (
    <div>
      {/* Mostra o título do curso */}
      <h1>{curso.titulo}</h1>
      {/* Mostra a descrição do curso */}
      <p>{curso.descricao}</p>
      {/* Mostra o preço do curso */}
      <p>Preço: {curso.preco}</p>
    </div>
  );
}
