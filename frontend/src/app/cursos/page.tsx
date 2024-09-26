"use client"; // Indica que este é um componente client-side em Next.js (executado no navegador)

// Importa `useEffect` e `useState` do React
// `useEffect` é usado para executar efeitos colaterais (como buscar dados de uma API)
// `useState` é usado para criar e gerenciar o estado do componente (armazenar dados)
import { useEffect, useState } from "react";
import axios from "axios"; // Importa a biblioteca `axios` para fazer requisições HTTP

// Define o componente `CursoDetalhe` que recebe um `params` como props (parâmetro)
export default function CursoDetalhe({ params }: { params: { id: string } }) {
  // Define os estados para gerenciar o curso, status de carregamento e erros
  const [curso, setCurso] = useState(null); // Armazena o curso obtido da API
  const [loading, setLoading] = useState(true); // Estado de carregamento, inicialmente `true`
  const [error, setError] = useState(null); // Armazena qualquer mensagem de erro que ocorra

  // `useEffect` é usado para buscar os detalhes do curso quando o `id` estiver disponível
  useEffect(() => {
    // Verifica se existe um `id` nos parâmetros
    if (params.id) {
      // Faz uma requisição `GET` para buscar o curso com base no `id`
      axios
        .get(`http://localhost:3001/cursos/${params.id}`)
        .then((response) => {
          // Quando a requisição é bem-sucedida
          setCurso(response.data); // Armazena os dados do curso no estado `curso`
          setLoading(false); // Define o estado `loading` como `false`, pois a requisição terminou
        })
        .catch((error) => {
          // Se ocorrer um erro ao buscar os dados do curso
          console.error("Erro ao buscar curso:", error); // Mostra o erro no console
          setError("Erro ao carregar o curso."); // Define uma mensagem de erro no estado
          setLoading(false); // Também define `loading` como `false` pois a requisição falhou
        });
    }
  }, [params.id]); // Este efeito é executado sempre que `params.id` muda

  // Renderização condicional para diferentes estados (carregando, erro, ou curso encontrado)
  if (loading) return <div>Carregando...</div>; // Se ainda estiver carregando, exibe uma mensagem de "Carregando..."
  if (error) return <div>{error}</div>; // Se ocorreu um erro, exibe a mensagem de erro
  if (!curso) return <div>Curso não encontrado</div>; // Se não encontrou o curso, exibe uma mensagem de "Curso não encontrado"

  // Se o curso foi encontrado e carregado corretamente, exibe os detalhes
  return (
    <div>
      {/* Título do curso */}
      <h1>{curso.titulo}</h1>
      {/* Descrição do curso */}
      <p>{curso.descricao}</p>
      {/* Preço do curso */}
      <p>Preço: {curso.preco}</p>
    </div>
  );
}
