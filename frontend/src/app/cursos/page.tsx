import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";

export default function CursoDetalhe() {
  const router = useRouter();
  const { id } = router.query; // Captura o ID da URL
  const [curso, setCurso] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      // Substitua pela URL correta do seu backend
      axios
        .get(`http://localhost:3001/cursos/${id}`) // O 3001 é o porto do NestJS
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
  }, [id]); // Executa quando o 'id' muda

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!curso) {
    return <div>Curso não encontrado</div>;
  }

  return (
    <div>
      <h1>{curso.titulo}</h1>
      <p>{curso.descricao}</p>
      <p>Preço: {curso.preco}</p>
      {/* Adicione outros detalhes do curso, se necessário */}
    </div>
  );
}
