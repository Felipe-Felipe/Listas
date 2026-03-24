import { produtos } from "./produtos.js";

const elemento = {
  btnCurva: document.querySelectorAll(".btnCurva"),
  containerDisplay: document.querySelector("#containerDisplay"),
  btnListarTodos: document.querySelector("#btnListarTodos"),
};
 console.log(elemento.btnListarTodos);

elemento.btnCurva.forEach((item) => {
  item.addEventListener("click", (evento) => {
    // console.log(evento.target.id);
    listarProdutosPorCurvaABC(evento.target.id);
  });
});
function listarProdutosPorCurvaABC(curva) {
  let produtosCurva = produtos.filter((produto) => produto.curva_abc === curva);
  //console.table(produtosCurva);
  inserirDadosCurvaABC(produtosCurva);
}



function inserirDadosCurvaABC(dados) {
  elemento.containerDisplay.innerHTML = ""; // Limpa o conteúdo do container antes de inserir os novos dados
    //Criar um objeto para gerar os paragrafos (ainda sem dados - Puro !)
    let colunasGRID = {
        id: document.createElement("p"),
        nome: document.createElement("p"),
        preco_venda: document.createElement("p"),
        estoque: document.createElement("p"),
    };
    // Definindo o valor que cada paragrafo terá ( Exemplo; ID, NOME, PREÇO VENDA, ESTOQUE )
    colunasGRID.id.innerText = "ID";
    colunasGRID.nome.innerText = "NOME";
    colunasGRID.preco_venda.innerText = "PREÇO VENDA";
    colunasGRID.estoque.innerText = "ESTOQUE";
    elemento.containerDisplay.append(colunasGRID.id, colunasGRID.nome, colunasGRID.preco_venda, colunasGRID.estoque);


  console.table(dados);
  // método para listar os campos id, nome, preco_venda e estoque do array de objetos "dados" (que é o resultado da função listarProdutosPorCurvaABC) em um formato de tabela no console. 
  let dadosFiltrados = dados

  dadosFiltrados.forEach((item) => {
    let produto = {
      id: item.id,
      nome: item.nome,
      preco_venda: item.preco_venda,
      estoque: item.estoque,
    };
    // Criação dos paragrafos das colunas
    let id = document.createElement("p");
    let nome = document.createElement("p");
    let preco_venda = document.createElement("p");
    let estoque = document.createElement("p");
    // Definição de texto de cada coluna
    id.innerText = produto.id;
    nome.innerText = produto.nome;
    preco_venda.innerText = produto.preco_venda;
    estoque.innerText = produto.estoque;

    elemento.containerDisplay.append(id, nome, preco_venda, estoque);

  });
}
 elemento.btnListarTodos.addEventListener("click", (evento) => {
  console.log(evento);
 });
  let listarProdutos = produtos.map((produto) => {
  return {
    id: produto.id,
    nome: produto.nome,
  };
});