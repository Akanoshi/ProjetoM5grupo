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
    const nome = document.getElementById('name').value;
    let url = "http://localhost:3000/deletarItens" 
     const body = {
        "nome": nome
     }

     deletar(url, body)
}


document.getElementById('concluir').addEventListener("onclick", deletarItens())