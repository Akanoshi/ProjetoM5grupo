import app from "./app.js";
import User from "./Models/user.js";
import Produto from "./Models/produtos.js";



app.set("port", process.env.PORT || 3000)

            // Rotas 
    // Rotas Get

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

    // Rotas Post

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

    // Rotas Put

app.put('/', (req, res, next) => {

    res.send('PUT')
});

    // Rotas Delete

app.delete('/', (req, res, next) => {
    res.send('DELETE')
});


        // Servidor rodando em: 
app.listen(app.get("port"), () => {   
    console.log(`Listening on port localhost:${app.get("port")}`)
})
