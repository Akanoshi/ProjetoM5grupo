import app from "./app.js";
import User from "./Models/user.js";
import Produto from "./Models/produtos.js";



app.set("port", process.env.PORT || 3000)

            // Rotas  :::::::::::
    // Rotas Get :::::::::::::::::::::::::::

app.get('/', (req, res) => {
    res.sendStatus(200)
});

app.get('/produtos', async (req, res, next) => {

    await Produto.findAll()
    .then((produtos) => {
        console.log(produtos)
        return res.json(produtos)
    }).catch((err) => {
        return res.status(400).json({
            erro: err.name,
            message: "falha na requisição"});
    })
});

app.get('/produto', async (req, res) => {
    console.log('produto especifico')
    
    const prod = await Produto.findOne({ where: {nome: req.body.nome}})
    .then((prod) => {
        console.log('produto encontrado')
        res.json(prod)
    }).catch((err) => {
        console.log('produto não encontrado')
    })
})
    // Rotas Post :::::::::::::::::::::::::::

app.post('/cadastrar', async (req, res, next) => {
    await User.create(req.body)
    .then(()=> {
        return res.json({
            erro: false,
            message: "sucesso"});
    }).catch((err) => {
        return res.status(400).json({
            erro: err,
            message: "falha no cadastro"});
    })
});

app.post('/estocar', async (req, res, next) => {
    await Produto.create(req.body)
    .then(()=> {
        return res.json({
            erro: false,
            message: "sucesso"});
    }).catch((err) => {
        return res.status(400).json({
            erro: err,
            message: "falha no cadastro"});
    })
});

app.post('/estoque', async (req, res, next) => {
<<<<<<< HEAD
    await (req.body).forEach((el, i) => {
        Produto.create(el)
    })
    res.send(err)
=======
    let count = 0
    await (req.body).forEach((el, i) => {
        Produto.create(req.body[i])
            console.log(req.body[i])
            count += 1;
    })
    res.send(`${count} produtos estocados com sucesso`)
>>>>>>> 15fc8e8b86a398d8e0dd60d306d636a6803926b8
});


    // Rotas Put :::::::::::::::::::::::::::

app.put('/redefinirSenha', async (req, res, next) => {
    console.log('redefinição de senha');
    await User.findOne({ where: {email: (req.body.email).toLowerCase()}})
    .then((user) => {
        User.update({ senha: req.body.senha }, {where: {email: (req.body.email).toLowerCase()}})
        .then(() => {
        console.log('senha atualizada para ' + user.senha);
        res.json(User)
        }).catch((err) => {
            console.log('não foi possível atualizar a senha');
            res.send(err.name + ' ' + err.message);
        })
    }).catch((err) => {
        console.log('email não cadastrado')
        res.send(err.name + ' ' + err.message);
    })
});

    // Rotas Delete :::::::::::::::::::::::::::

app.delete('/deletarItens', async (req, res, next) => {
    console.log('Declarar estoque vazio')
    
    const prod = await Produto.findOne({ where: {nome: req.body.nome}})
    .then((prod) => {
        prod.destroy();
        console.log('produto vendido');
        res.send('produto ' + prod.nome + ' vendido com sucesso!')
    }).catch((err) => {
        console.log('produto não encontrado')
        res.send(err.name + ' ' + err.message)
    })
});


        // Servidor rodando em: 
app.listen(app.get("port"), () => {   
    console.log(`Listening on port localhost:${app.get("port")}`)
})
