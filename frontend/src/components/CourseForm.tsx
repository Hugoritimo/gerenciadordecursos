import { useState, useEffect } from "react";

export default function CourseForm({ onSubmit, initialData }) {
  const [titulo, setTitulo] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");
  const [duracao, setDuracao] = useState("");
  const [precoComDesconto, setPrecoComDesconto] = useState("");
  const [conteudo, setConteudo] = useState("");

  useEffect(() => {
    if (initialData) {
      setTitulo(initialData.titulo);
      setPreco(initialData.preco);
      setDescricao(initialData.descricao);
      setDuracao(initialData.duracao);
      setPrecoComDesconto(initialData.precoComDesconto);
      setConteudo(initialData.conteudo);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const courseData = {
      titulo,
      preco: parseFloat(preco),
      descricao,
      duracao,
      precoComDesconto: parseFloat(precoComDesconto),
      conteudo,
    };
    onSubmit(courseData); // Envia os dados para o componente pai
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block text-gray-800">Título do Curso:</label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:border-primary-color"
          required
        />
      </div>
      <div>
        <label className="block text-gray-800">Preço:</label>
        <input
          type="number"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:border-primary-color"
          required
        />
      </div>
      <div>
        <label className="block text-gray-800">Descrição:</label>
        <input
          type="text"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:border-primary-color"
          required
        />
      </div>
      <div>
        <label className="block text-gray-800">Duração:</label>
        <input
          type="text"
          value={duracao}
          onChange={(e) => setDuracao(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:border-primary-color"
          required
        />
      </div>
      <div>
        <label className="block text-gray-800">Preço com Desconto:</label>
        <input
          type="number"
          value={precoComDesconto}
          onChange={(e) => setPrecoComDesconto(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:border-primary-color"
        />
      </div>
      <div>
        <label className="block text-gray-800">Conteúdo:</label>
        <textarea
          value={conteudo}
          onChange={(e) => setConteudo(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:border-primary-color"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-primary-color text-white py-2 rounded-md hover:bg-yellow-600 transition"
      >
        {initialData ? "Atualizar Curso" : "Adicionar Curso"}
      </button>
    </form>
  );
}
