import { produtos } from "./produtos.js";

const elemento = {
  btnCurva: document.querySelectorAll(".btnCurva"),
  containerDisplay: document.querySelector("#containerDisplay"),
};
 console.log(elemento.containerDisplay)

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
}