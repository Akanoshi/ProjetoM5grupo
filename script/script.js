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
    
        for(let produto of data) {
            output += `<h1>${produto.nome}</h1>`
    
            document.querySelector('.content').innerHTML = output
    
        }
    }