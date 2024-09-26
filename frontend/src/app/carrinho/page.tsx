// Função para adicionar um curso ao carrinho, recebendo o `cursoId` como parâmetro
const adicionarAoCarrinho = (cursoId: number) => {
  // Faz uma requisição HTTP POST para o endpoint do carrinho
  axios
    .post("http://localhost:3001/carrinho", { cursoId }) // Envia o `cursoId` no corpo da requisição
    .then((response) => {
      // Caso a requisição seja bem-sucedida
      // `response` é a resposta do servidor (provavelmente com informações sobre o carrinho)
      console.log("Curso adicionado ao carrinho", response.data); // Mostra uma mensagem de sucesso no console
    })
    .catch((error) => {
      // Caso ocorra algum erro durante a requisição (problema de conexão, servidor, etc.)
      console.error("Erro ao adicionar curso ao carrinho", error); // Mostra uma mensagem de erro no console
    });
};
