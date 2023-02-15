import app from "./app.js";
import User from "./Models/user.js";
import Produto from "./Models/produtos.js";
const port = 3000



app.get('/produtos', async (req, res, next) => {

    await Produto.findAll()
    .then((produtos) => {
        console.log(produtos)
        return res.json(produtos)
    }).catch((err) => {
        return res.status(400).json({
            erro: err,
            message: "falha na requisição"});
    })
});

app.post('/cadastrar', async (req, res, next) => {
    console.log(req.body)

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
    console.log(req.body)

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

app.delete('/deletarProduto', async (req, res, next) => {
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



app.listen(port, () => {   
    console.log(`Listening on port ${port}`)
})
