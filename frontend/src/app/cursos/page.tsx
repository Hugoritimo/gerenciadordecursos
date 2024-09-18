"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ListaDeCursos() {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    // Faz a requisição para buscar todos os cursos
    axios
      .get("http://localhost:3001/cursos") // A URL deve ser a mesma do backend
      .then((response) => {
        setCursos(response.data); // Atualiza o estado com os cursos recebidos
      })
      .catch((error) => {
        console.error("Erro ao buscar cursos:", error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Cursos</h1>
      <ul>
        {cursos.map((curso) => (
          <li key={curso.id}>
            <h2>{curso.titulo}</h2>
            <p>Preço: {curso.preco}</p>
            <p>Descrição: {curso.descricao}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
