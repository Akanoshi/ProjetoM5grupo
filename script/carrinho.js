// funções para mostrar e ocultar o carrinhoo
console.log(document.getElementsByClassName("button-hover-background").length)
function mostrarCarrinho() {
    let carrinho = document.querySelector('#carrinho')
    carrinho.style.display = 'block';
} 

function esconderCarrinho() {
    let carrinho = document.querySelector('#carrinho')
    carrinho.style.display= 'none';
}

// variaveis carinho
    // atualizar quantidade
const quantidadeCarrinho = document.getElementsByClassName("product-qtd-input")
for (var i = 0; i < quantidadeCarrinho.length; i++) {
    quantidadeCarrinho[i].addEventListener("change", atualizarTotal)
}
    // remover produto

const removerProduto = document.getElementsByClassName("remove-product-button")
for (var i = 0; i < removerProduto.length; i++) {
    removerProduto[i].addEventListener("click", removerProd)
}

function removerProd(event) {
    event.target.parentElement.parentElement.remove()
    atualizarTotal()
}

function checarVazio(event) {
    if (event.target.value === "0") {
      event.target.parentElement.parentElement.remove()
    }
}
    // botao de adcionar item
 const botaoCompra = document.getElementsByClassName("button-hover-background")
console.log(botaoCompra)
for (var i = 0; i < botaoCompra.length; i++) {
    botaoCompra[i].addEventListener("click", addAoCarrinho)
} 


    // finalizar compra
    // VOLTAR AQUI 
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    function terminarCompra() {
        if (valorTotal === "0,00") {
            alert("Carrinho Vazio!")
        } else {
            alert(`
            Valeu! Sua compra foi: R$${valorTotal}
            `)
        }
    document.querySelector(".cart-table tbody").innerHTML = ""
    atualizarTotal()
    }

const finalizarCompra = document.getElementsByClassName("purchase-button")
    finalizarCompra.addEventListener("click", terminarCompra)



// add ao carrinho

function addAoCarrinho(event) {
    const button = event.target
    const infoProdutos = button.parentElement.parentElement
    const imgProduto = infoProdutos.getElementsByClassName("img-produto")[0].src
    const nomeProduto = infoProdutos.getElementsByClassName("nome-produto")[0].innerText
    const precoProduto = infoProdutos.getElementsByClassName("preco-produto")[0].innerText

    // verificação
    // tá dando muito erro nisso, resolver depois. serve pra não repitir o ítem e sim aumentar a quantidade se clicar de nvo em compra

//     const produtoVerifica = document.getElementsByClassName("nome-produto")
//     for (var i = 0; i < produtoVerifica.length; i++) {
//         if (produtoVerifica[i].innerText === nomeProduto) {
//            produtoVerifica[i].parentElement.parentElement.getElementsByClassName("product-qtd-input")[0].value++
//             return
//     }
// }

   let novoProduto = document.createElement("tr")
   novoProduto.classList.add("cart-product")

   novoProduto.innerHTML = 
   `
        <td class="product-identification">
            <img src=${imgProduto} class="img-produto">
            <strong id="name" class="cart-product-title" class="nome-produto">${nomeProduto}</strong>
        </td>
        <td>
            <span class="cart-product-price" class="preco-produto">${precoProduto}</span>
        </td>
        <td>
            <input type="number" value="1" min="0" class="product-qtd-input">
            <button type="button" class="remove-product-button">Remover</button>
        </td>
   `
    const tableBody = document.querySelector(".cart-table tbody")
    tableBody.append(novoProduto)

    atualizarTotal()

    novoProduto.getElementsByClassName("product-qtd-input")[0].addEventListener("change", atualizarTotal)
    novoProduto.getElementsByClassName("remove-product-button")[0].addEventListener("click", removerProd)
    

    if (carrinho.style.display != 'block') {
        carrinho.style.display = 'block';
    }
}

// atualizar preço

function atualizarTotal() {
let valorTotal = 0
const produtosCarrinho = document.getElementsByClassName("cart-product")
for (var i = 0; i < produtosCarrinho.length; i++) {
    const produtoPreco = produtosCarrinho[i].getElementsByClassName("cart-product-price")[0].innerText.replace("R$", "").replace(",",".")
    const produtoQt = produtosCarrinho[i].getElementsByClassName("product-qtd-input")[0].value

    valorTotal = valorTotal + (produtoPreco * produtoQt)
}
valorTotal = valorTotal.toFixed(2)
valorTotal = valorTotal.replace(".",",")
document.querySelector(".cart-total-container span").innerText = "R$" + valorTotal
}

        // função delete

        function deletar(url, body) {
            console.log(body)
            let request = new XMLHttpRequest();
            request.open('DELETE', url, true);
            request.setRequestHeader('Content-Type', 'application/json')
            request.send(JSON.stringify(body));
        
            request.onload = function () {
                console.log(this.responseText)
            }
            console.log('item comprado!')
            return request.responseText;
        }
        
        function deletarItens() {
            const nome = document.getElementById('name').innerText;
            let url = "http://localhost:3000/deletarItens" 
             const body = {
                "nome": nome
             }
        
             deletar(url, body)
        }
        
        
        document.getElementById('concluir').addEventListener("onclick", deletarItens())


        // Concluindo compra e excluindo no banco de dados

    function concluirCompra() {

        deletarItens()

        // para fechar o carrinho após a compra
        esconderCarrinho()
}