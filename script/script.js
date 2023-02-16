/*     function getContent() {
        fetch('http://localhost:3000/produtos').then((resp) => {
  
        return resp.json()
        
        console.log(resp)
    })
    .then((data) => {
        const arrayy = data.results
    console.log(arrayy)
        })
    }
 */
    async function getContent() {
        try {
            const response = await fetch('http://localhost:3000/produtos')
            const data = await response.json()
    
            console.log(data)
            console.log(response)
            show(data)
        } catch (error) {
            console.error(error)
        }
    }
        getContent()
    
        function show(data) {
            let output = ''
            let output2 = ''
            let output3 = ''
            let X = 0
        
            for(let produto of data) {
                if (produto.secao == 1) {
                output += `<div class="box">
                                <h3>Ofertas</h3>
                                    <img src="./imgArtefatos/${produto.img}" alt="" class="img-produto">
                                    <h1 class="nome-produto">${produto.nome}</h1>
                                    <p class="preco-produto">R$ ${produto.valor}</p>
                                    <div><button class="button-hover-background">Adiciona ao Carinho</button></div>
                            </div>`
        
            document.querySelector('#produtoPromocao').innerHTML = output

            } else if (produto.secao == 3) {
                output3 += `<div class="box">
                        <img src="./imgArtefatos/${produto.img}" alt="" class="img-produto">
                        <h1 class="nome-produto">${produto.nome}</h1>
                        <p class="preco-produto">R$ ${produto.valor}</p>
                        <div class="icon">
                            <ion-icon name="bag-outline" class="button-hover-background"></ion-icon>
                        </div>
                    </div>`

            document.querySelector('#produtosOK2').innerHTML = output3

            } else if (produto.secao == 2) {
                output2 += `
                <div class="box">
                    <h3>Novo</h3>
                    <img src="./imgArtefatos/${produto.img}" alt="" class="img-produto">
                    <h1 class="nome-produto">${produto.nome}</h1>
                    <p class="preco-produto">R$ ${produto.valor}</p>
                    <div><button class="button-hover-background">Adiciona ao Carinho</button></div>
                </div>`

                document.querySelector('#produtosOK').innerHTML = output2

            }

        }
        const botaoCompra = document.getElementsByClassName("button-hover-background")
        console.log(botaoCompra)
        for (var i = 0; i < botaoCompra.length; i++) {
            botaoCompra[i].addEventListener("click", addAoCarrinho)
        }
    }