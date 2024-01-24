let subTotal = 0;
document.getElementById("valor-total").textContent = "R$0,00";
document.getElementById("lista-produtos").textContent = "";

function adicionar() {
  let produtosDisponiveis = document.getElementById("produto").value;
  let nomeProduto = produtosDisponiveis.split("-")[0];
  let valorUnitario = parseFloat(produtosDisponiveis.split("R$")[1]);
  let quantidade = document.getElementById("quantidade").value;
  let carrinho = document.getElementById("lista-produtos");
  let valorTotal = document.getElementById("valor-total");

  if(quantidade <= 0 || isNaN(quantidade)) {
    alert("Insira uma quantidade válida!")
    document.getElementById("quantidade").value = "";
  } else {
    subTotal = subTotal + valorUnitario * quantidade;

    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul"> ${quantidade}x </span> ${nomeProduto} <span class="texto-azul"> R$${valorUnitario},00 </span>
    </section>`;
  }

  valorTotal.innerHTML = `<span class="texto-azul" id="valor-total"> R$${subTotal},00 </span>`;

  document.getElementById("quantidade").value = "";
}

function limpar() {
  subTotal = 0;
  document.getElementById("quantidade").value = "";
  document.getElementById("lista-produtos").textContent = "";
  document.getElementById("valor-total").textContent = "R$0,00";
}