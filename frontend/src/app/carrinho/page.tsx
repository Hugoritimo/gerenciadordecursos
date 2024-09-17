const adicionarAoCarrinho = (cursoId: number) => {
  axios
    .post("http://localhost:3001/carrinho", { cursoId })
    .then((response) => {
      console.log("Curso adicionado ao carrinho", response.data);
    })
    .catch((error) => {
      console.error("Erro ao adicionar curso ao carrinho", error);
    });
};
