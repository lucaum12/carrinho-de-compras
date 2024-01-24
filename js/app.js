limpar();

function adicionar() {
  let produtos = document.getElementById("produto").value;
  let nomeProduto = produtos.split("-")[0];
  let valorUnitario = parseFloat(produtos.split("R$")[1]);
  let quantidade = document.getElementById("quantidade").value;
  let carrinho = document.getElementById("lista-produtos");
  let valorTotal = document.getElementById("valor-total").textContent;
  let preçoFinal = document.getElementById("valor-total");
  let preço = parseFloat(valorTotal.split("R$")[1]);

  if(quantidade <= 0) {
    alert("Por favor, insira uma quantidade válida!");
  } else {
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>
  </section>`;
  }

  let valorSubtotal = (valorUnitario * quantidade) + preço;

  preçoFinal.innerHTML = `<span class="texto-azul" id="valor-total">R$${valorSubtotal.toFixed(2)}</span>`;
  document.getElementById("quantidade").value = "";
}

function limpar() {
  document.getElementById("valor-total").innerHTML = "R$0.00";
  document.getElementById("quantidade").value = "";
  document.getElementById("lista-produtos").innerHTML = "";
}