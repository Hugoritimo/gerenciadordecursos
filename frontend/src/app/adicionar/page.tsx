"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function AdicionarCurso() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/cursos", {
        titulo,
        descricao,
        preco,
      });
      router.push("/cursos"); // Redireciona para a página de listagem de cursos
    } catch (error) {
      console.error("Erro ao adicionar curso:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Título"
        required
      />
      <textarea
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        placeholder="Descrição"
        required
      />
      <input
        type="number"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
        placeholder="Preço"
        required
      />
      <button type="submit">Adicionar Curso</button>
    </form>
  );
}
