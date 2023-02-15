

function cadastra(url, body) {
    console.log(body)
    let request = new XMLHttpRequest();
    request.open('POST', url, true);
    request.setRequestHeader('Content-Type', 'application/json')
    request.send(JSON.stringify(body));

    request.onload = function () {
        console.log(this.responseText)
    }
    console.log('cadastrado no banco!')
    return request.responseText;
}

const isValidFields = () => {
    return document.getElementById('register-form').reportValidity()
}

function cadastrarUser() {
    if (isValidFields()) {
    event.preventDefault()
    const nome = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value; 
    const sobrenome = document.getElementById('lastname').value;
    let url = "http://localhost:3000/cadastrar" 

    const body = {
        "nome": nome,
        "sobrenome": sobrenome,
        "email": email,
        "senha": senha
    }

    cadastra(url, body)
    }
}