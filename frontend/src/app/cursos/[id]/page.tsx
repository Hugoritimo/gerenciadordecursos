"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CursoDetalhe({ params }: { params: { id: string } }) {
  const [curso, setCurso] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (params.id) {
      axios
        .get(`http://localhost:3001/cursos/${params.id}`)
        .then((response) => {
          setCurso(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Erro ao buscar curso:", error);
          setError("Erro ao carregar o curso.");
          setLoading(false);
        });
    }
  }, [params.id]);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;
  if (!curso) return <div>Curso não encontrado</div>;

  return (
    <div>
      <h1>{curso.titulo}</h1>
      <p>{curso.descricao}</p>
      <p>Preço: {curso.preco}</p>
    </div>
  );
}
