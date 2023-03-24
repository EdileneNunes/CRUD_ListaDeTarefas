let produto = [];

function cadastrar() {
  let cadastroDoProduto = document.getElementById("cadastroDoProduto").value;

  if (cadastroDoProduto == "") {
    alert("Campo obrigatório!!!");
    return
  }

  // Pega a lista de produtos do localStorage
  let produtoString = localStorage.getItem("chaveDoProduto", cadastroDoProduto);
  produto = JSON.parse(produtoString);

  if (produtoString == null) {
    produto = [];
  }

  produto.push(cadastroDoProduto);

  // Armazena o array de produtos no localStorage
  localStorage.setItem("chaveDoProduto", JSON.stringify(produto));

  // Limpa o campo de cadastro após a operação
  document.getElementById("cadastroDoProduto").value = "";

  alert("Cadastrado!!!!!!!!!!!!!!");
}

function pesquisar() {
  let pesquisaDoProduto = document.getElementById("pesquisarProduto").value;
  let mostrarProduto = " ";
  produto = JSON.parse(localStorage.getItem("chaveDoProduto"));
  for (i = 0; i < produto.length; i++) {
    if (pesquisaDoProduto == produto[i]) {
      mostrarProduto = produto[i];
    }
  }
  document.getElementById("mostrar").innerHTML = mostrarProduto;
}

function alterar() {
  let selecionaProduto = document.getElementById("prudutoAtual");
  produto = JSON.parse(localStorage.getItem("chaveDoProduto"));
  for (i = 0; i < produto.length; i++) {
    if (selecionaProduto.value == produto[i]) {
      let novoProduto = document.getElementById("novoPruduto");
      produto[i] = novoProduto.value;
      alert("Produto alterado!!!");
    }
  }
  localStorage.setItem("chaveDoProduto", JSON.stringify(produto));
}

function deletarProduto() {
  let excluirProduto = document.getElementById("deletar");
  let posicaoVetor;
  produto = JSON.parse(localStorage.getItem("chaveDoProduto"));
  for (i = 0; i < produto.length; i++) {
    if (excluirProduto.value == produto[i]) {
      posicaoVetor = i;
      produto.splice(posicaoVetor, 1);
      alert("Produto excluído com sucesso!!!");
    }
  }
  localStorage.setItem("chaveDoProduto", JSON.stringify(produto));
}
