// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let produtoMN = document.createElement("div")
produtoMN.classList.add("produtosMaisOuMenos")

produtoMN.innerHTML = 
`
<div class="box">
    <img src="./imgArtefatos/${caminho}" alt="" class="img-produto">
    <h1 class="nome-produto">${nome}</h1>
    <p class="preco-produto">R$ ${preco}</p>
    <div class="icon">
    <ion-icon name="bag-outline" class="button-hover-background"></ion-icon>
</div>
`
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let produtoNovo = document.createElement("div")
produtoNovo.classList.add("produtosMaisOuMenos")

produtoNovo.innerHTML = 
`
<div class="box">
    <h3>Novo</h3>
    <img src="./imgArtefatos/${caminho}" alt="" class="img-produto">
    <h1 class="nome-produto">${nome}</h1>
    <p class="preco-produto">R$ ${preco}</p>
    <div><button class="button-hover-background">Adiciona ao Carinho</button></div>
</div>
`
